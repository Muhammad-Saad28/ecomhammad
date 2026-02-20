const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const roots = [
  path.join(__dirname, '..', 'public', 'Results'),
  path.join(__dirname, '..', 'public', 'Hammad'),
  path.join(__dirname, '..', 'public', 'Sales'),
  path.join(__dirname, '..', 'public', 'Testimonals')
];

const MAX_WIDTH = 1600;
const QUALITY = 78;
const allowedExts = new Set(['.png', '.jpg', '.jpeg']);

function walk(dir) {
  return fs.readdirSync(dir).flatMap((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

async function convertImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!allowedExts.has(ext)) return;

  const outPath = file.replace(ext, '.webp');
  if (fs.existsSync(outPath)) return;

  const image = sharp(file);
  const metadata = await image.metadata();
  const targetWidth = Math.min(metadata.width || MAX_WIDTH, MAX_WIDTH);

  await image
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath);

  console.log(`Created ${path.relative(process.cwd(), outPath)}`);
}

async function main() {
  const allFiles = roots.filter(fs.existsSync).flatMap(walk);
  for (const file of allFiles) {
    try {
      await convertImage(file);
    } catch (err) {
      console.error('Failed to optimize', file, err.message);
    }
  }
  console.log('Image optimization complete');
}

main();