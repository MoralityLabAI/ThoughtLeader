"""Portable, dependency-free validation of authored drafts, exports, assets, provenance."""
import argparse
import hashlib
import json
import struct
import sys
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from build_season1 import check_source, write_json
from sweepweave_validator import validate_storyworld


def check_png(path):
    data = path.read_bytes()
    assert data[:8] == b"\x89PNG\r\n\x1a\n", f"Not a PNG: {path}"
    offset, chunks, idat = 8, [], []
    width = height = None
    while offset < len(data):
        length = struct.unpack(">I", data[offset:offset + 4])[0]
        kind = data[offset + 4:offset + 8]
        payload = data[offset + 8:offset + 8 + length]
        checksum = struct.unpack(">I", data[offset + 8 + length:offset + 12 + length])[0]
        assert zlib.crc32(kind + payload) & 0xFFFFFFFF == checksum, f"Bad PNG CRC: {path}"
        if kind == b"IHDR":
            width, height = struct.unpack(">II", payload[:8])
        if kind == b"IDAT":
            idat.append(payload)
        chunks.append(kind)
        offset += length + 12
        if kind == b"IEND":
            break
    assert chunks[0] == b"IHDR" and chunks[-1] == b"IEND" and idat and width >= 512 and height >= 512
    assert len(zlib.decompress(b"".join(idat))) > width * height
    return {"path": path.relative_to(ROOT).as_posix(), "width": width, "height": height,
            "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest(), "crc_and_pixel_stream": "valid"}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--with-playtests", action="store_true", help="Also require fresh passing browser/rehearsal reports")
    args = parser.parse_args()
    report = {"profile": "Season 1 compact narrative draft", "episodes": [], "assets": [], "errors": []}
    try:
        build = json.loads((ROOT / "season1" / "reports" / "build.json").read_text(encoding="utf-8"))
        assert build["worlds"] == 6
        for relative, expected in build["sha256"].items():
            assert hashlib.sha256((ROOT / relative).read_bytes()).hexdigest() == expected, f"Stale build: {relative}"
        for n in range(1, 7):
            assert f"season1/authored/episode-{n:02}.json" in build["sha256"], "Incomplete source fingerprint"
        bundle = (ROOT / "season1" / "season-data.js").read_text(encoding="utf-8")
        embedded = json.loads(bundle.removeprefix("window.THOUGHTLEADER_SEASON = ").removesuffix(";\n"))
        assert embedded == [json.loads(p.read_text(encoding="utf-8")) for p in sorted((ROOT / "season1" / "worlds").glob("episode-*.json"))], "Stale reader data"
        report["source_export_bundle_freshness"] = "verified"
    except (AssertionError, KeyError, ValueError, OSError) as error:
        report["errors"].append(f"Build freshness: {error}")
    for number in range(1, 7):
        path = ROOT / "season1" / "worlds" / f"episode-{number:02}.json"
        try:
            draft = json.loads((ROOT / "season1" / "authored" / path.name).read_text(encoding="utf-8"))
            check_source(draft)
            world = json.loads(path.read_text(encoding="utf-8"))
            assert world["reconstruction"]["authored_sha256"] == hashlib.sha256((ROOT / "season1" / "authored" / path.name).read_bytes()).hexdigest(), "Stale authored source"
            errors = validate_storyworld(str(path))
            assert not errors, errors
            assert len(world["encounters"]) == 24
            images = {e["image"] for e in world["encounters"]}
            assert images == {f"assets/pixel/ep{number:02}.png"}
            for image in images:
                assert (ROOT / "season1" / image).is_file(), f"Missing image: {image}"
            effects = [r["after_effects"] for e in world["encounters"] for o in e["options"] for r in o["reactions"]]
            assert min(map(len, effects)) >= 4
            texts = [r["text"] for s in draft["scenes"] for o in s["options"] for r in o["reactions"]]
            assert len(set(texts)) == len(texts), "Repeated authored reactions"
            report["episodes"].append({"episode": number, "schema": "valid", "decision_scenes": 18, "filing_scenes": 1,
                                        "endings": 5, "options": sum(len(e["options"]) for e in world["encounters"]),
                                        "reactions": sum(len(o["reactions"]) for e in world["encounters"] for o in e["options"]),
                                        "minimum_effects": min(map(len, effects)), "unique_authored_reactions": len(set(texts))})
        except (AssertionError, KeyError, ValueError, OSError) as error:
            report["errors"].append(f"Episode {number}: {error}")
    for image in [*(f"ep{n:02}.png" for n in range(1, 7)), "cast.png"]:
        try:
            report["assets"].append(check_png(ROOT / "season1" / "assets" / "pixel" / image))
        except (AssertionError, ValueError, OSError, struct.error, zlib.error) as error:
            report["errors"].append(f"Asset {image}: {error}")
    try:
        manifest = json.loads((ROOT / "season1/assets/pixel/manifest.json").read_text(encoding="utf-8"))
        expected_assets = {asset["relativePath"]: asset for asset in manifest["assets"]}
        assert len(expected_assets) == 7 and len(report["assets"]) == 7
        for asset in report["assets"]:
            expected = expected_assets[asset["path"]]
            assert all(asset[key] == expected[key] for key in ("width", "height", "bytes", "sha256")), asset["path"]
        report["art_manifest_matches"] = True
        for relative, expected_hash in manifest["sourceHashes"].items():
            assert hashlib.sha256((ROOT / relative).read_bytes()).hexdigest() == expected_hash, f"Changed recovered source: {relative}"
        report["recovered_pixel_sources_match"] = True
    except (AssertionError, KeyError, ValueError, OSError) as error:
        report["errors"].append(f"Art manifest: {error}")
    if args.with_playtests:
        try:
            reports = ROOT / "season1/reports"
            digest = lambda path: hashlib.sha256(path.read_bytes()).hexdigest()
            reader_hash = digest(ROOT / "season1/storyworld_reader.html")
            browser = json.loads((reports / "browser-playtest.json").read_text(encoding="utf-8"))
            assert browser["pass"] and len(browser["episodes"]) == 6
            for relative, expected in browser["sha256"].items():
                assert digest(ROOT / "season1" / relative) == expected, f"Stale browser report: {relative}"
            summary = json.loads((reports / "season-rehearsal.json").read_text(encoding="utf-8"))
            assert summary["pass"] and len(summary["reports"]) == 6 and summary["runs_per_episode"] >= 5000
            assert summary["reader_sha256"] == reader_hash, "Stale season rehearsal"
            for number in range(1, 7):
                rehearsal = json.loads((reports / f"episode-{number:02}-rehearsal.json").read_text(encoding="utf-8"))
                assert rehearsal["pass"] and rehearsal["runs"] >= 5000
                assert rehearsal["reader_sha256"] == reader_hash, f"Stale rehearsal reader: {number}"
                assert rehearsal["world_sha256"] == digest(ROOT / f"season1/worlds/episode-{number:02}.json"), f"Stale rehearsal world: {number}"
            report["fresh_playtests"] = "six browser paths and 30,000+ actual-engine runs"
        except (AssertionError, KeyError, ValueError, OSError) as error:
            report["errors"].append(f"Playtest freshness: {error}")
    report["pass"] = not report["errors"]
    write_json(ROOT / "season1" / "reports" / "draft-checks.json", report)
    print(json.dumps({"pass": report["pass"], "episodes": len(report["episodes"]), "images": len(report["assets"]), "errors": report["errors"]}, indent=2))
    return 0 if report["pass"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
