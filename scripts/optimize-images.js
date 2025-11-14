import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = join(__dirname, '../src/assets/images');
const OUTPUT_DIR = join(__dirname, '../src/assets/images/optimized');

// Images to optimize (exclude SVGs and already small images)
const OPTIMIZE_IMAGES = [
  'CarRental.png',
  'Portfolio.png',
  'SurveyRails.png',
  'SyncSpace.png',
  'profile-img.jpg'
];

// Quality settings
const WEBP_QUALITY = 85;
const RESIZE_WIDTHS = [400, 800, 1200]; // Responsive image sizes

async function optimizeImage(filename) {
  const inputPath = join(IMAGES_DIR, filename);
  const baseName = basename(filename, extname(filename));

  console.log(`\nOptimizing ${filename}...`);

  try {
    // Get original file size
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.size} bytes`);

    // Create optimized WebP version (full size)
    const webpPath = join(OUTPUT_DIR, `${baseName}.webp`);
    await image
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);

    const webpStats = await sharp(webpPath).metadata();
    console.log(`  WebP: ${webpStats.width}x${webpStats.height}, ${webpStats.size} bytes`);
    console.log(`  Savings: ${((1 - webpStats.size / metadata.size) * 100).toFixed(1)}%`);

    // Create responsive variants for project images
    if (filename.includes('CarRental') || filename.includes('Portfolio') ||
        filename.includes('Survey') || filename.includes('Sync') || filename.includes('Personal')) {
      for (const width of RESIZE_WIDTHS) {
        const responsivePath = join(OUTPUT_DIR, `${baseName}-${width}w.webp`);
        await sharp(inputPath)
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(responsivePath);

        const stats = await sharp(responsivePath).metadata();
        console.log(`  ${width}w variant: ${stats.size} bytes`);
      }
    }

  } catch (error) {
    console.error(`  Error optimizing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('=== Image Optimization Script ===\n');

  // Create output directory
  try {
    await mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`Output directory: ${OUTPUT_DIR}\n`);
  } catch (error) {
    console.error('Error creating output directory:', error.message);
    process.exit(1);
  }

  // Process each image
  for (const filename of OPTIMIZE_IMAGES) {
    await optimizeImage(filename);
  }

  console.log('\n=== Optimization Complete ===');
  console.log('\nNext steps:');
  console.log('1. Update src/utils/data.js to import from images/optimized/');
  console.log('2. Update components to use <picture> elements with responsive images');
  console.log('3. Test the site with optimized images');
  console.log('4. If everything looks good, you can remove the original large images\n');
}

main().catch(console.error);
