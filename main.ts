// Entry for "Convince the AI Judge to Visit Your House: A Letter in One Image".
// The invitation image is drawn offline and shipped as entry.png; this program
// validates it against the sealed scorer's gate (whole PNG, at most 1 MiB and
// 1024 by 1024 pixels) and copies it to /output/entry.png.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1_048_576;
const MAX_DIM = 1024;

function pngSize(buf: Buffer): { width: number; height: number } {
  // Minimal PNG header parse: 8-byte signature, then the IHDR chunk
  // (4-byte length, 4-byte type, 4-byte width, 4-byte height).
  if (buf.length < 33) throw new Error("entry.png is too short to be a PNG file");
  if (buf.readUInt32BE(0) !== 0x89504e47 || buf.readUInt32BE(4) !== 0x0d0a1a0a) {
    throw new Error("entry.png is not a PNG file");
  }
  if (buf.toString("ascii", 12, 16) !== "IHDR") {
    throw new Error("entry.png has no IHDR chunk");
  }
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const bytes = statSync(src).size;
if (bytes > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB gate`);
}
const buf = readFileSync(src);
const { width, height } = pngSize(buf);
if (width > MAX_DIM || height > MAX_DIM) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate`);
}
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
copyFileSync(src, outPath);
// Read the copy back and confirm it is the same whole PNG we validated.
const copied = readFileSync(outPath);
if (copied.length !== bytes || copied.compare(buf) !== 0) {
  throw new Error("the copied /output/entry.png does not match entry.png");
}
console.log(`entry.png ${width}x${height} ${bytes} bytes -> /output/entry.png`);
