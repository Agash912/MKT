import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '..', 'public', 'assets');
const logoPath = path.join(assetsDir, 'logo-mark.png');
const outPath = path.join(assetsDir, 'favicon-32.png');
const size = 32;

const meta = await sharp(logoPath).metadata();
const w = meta.width;
const h = meta.height;
const scale = Math.min(size / w, size / h);
const nw = Math.round(w * scale);
const nh = Math.round(h * scale);

const resized = await sharp(logoPath)
  .resize(nw, nh)
  .png()
  .toBuffer();

const padded = await sharp({
  create: {
    width: size,
    height: size,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 1 },
  },
})
  .composite([{
    input: resized,
    left: Math.round((size - nw) / 2),
    top: Math.round((size - nh) / 2),
  }])
  .png()
  .toFile(outPath);

console.log('Favicon written:', outPath, `(${nw}x${nh} logo centered in ${size}x${size})`);