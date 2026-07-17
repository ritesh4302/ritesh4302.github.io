/**
 * Syncs extracted hospital data + images from the repo root into the app.
 *
 *   ../data/*.json                -> src/data/          (consumed by src/lib/hospital.ts)
 *   ../assets/images/hospital/*  -> public/images/hospital/
 *
 * Images wider than MAX_WIDTH are downscaled with sharp: the site is a static
 * export (`images.unoptimized`), so files are served exactly as synced.
 *
 * Runs automatically via the `predev` / `prebuild` npm scripts, so a refresh
 * of the extracted data propagates to the UI on the next dev run or build.
 */
import { cpSync, existsSync, mkdirSync, readdirSync, renameSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const MAX_WIDTH = 2560;

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(appRoot, "..");

const jobs = [
  { from: path.join(repoRoot, "data", "hospital_details.json"), to: path.join(appRoot, "src/data/hospital_details.json") },
  { from: path.join(repoRoot, "data", "reviews", "reviews.json"), to: path.join(appRoot, "src/data/reviews.json") },
  { from: path.join(repoRoot, "data", "photos_catalog.json"), to: path.join(appRoot, "src/data/photos_catalog.json") },
  { from: path.join(repoRoot, "assets", "images", "hospital"), to: path.join(appRoot, "public/images/hospital") },
];

// The extraction workspace only exists locally; in CI (standalone repo) the
// committed copies in src/data/ and public/images/hospital/ are used as-is.
if (!existsSync(path.join(repoRoot, "data"))) {
  console.log("[sync-assets] ../data not found (standalone build) - using committed copies");
  process.exit(0);
}

for (const { from, to } of jobs) {
  mkdirSync(path.dirname(to), { recursive: true });
  cpSync(from, to, { recursive: true });
}

const imgDir = path.join(appRoot, "public/images/hospital");
const synced = readdirSync(imgDir).filter((f) => /\.jpe?g$/i.test(f));

let resized = 0;
for (const file of synced) {
  const filePath = path.join(imgDir, file);
  const meta = await sharp(filePath).metadata();
  if (meta.width > MAX_WIDTH) {
    const tmp = `${filePath}.tmp`;
    await sharp(filePath)
      .resize({ width: MAX_WIDTH })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(tmp);
    renameSync(tmp, filePath);
    resized++;
  }
}

const mb = synced
  .map((f) => statSync(path.join(imgDir, f)).size)
  .reduce((a, b) => a + b, 0) / 1024 / 1024;

console.log(
  `[sync-assets] 3 JSON files -> src/data; ${synced.length} images (${mb.toFixed(1)} MB, ${resized} downscaled to <=${MAX_WIDTH}px) -> public/images/hospital`,
);
