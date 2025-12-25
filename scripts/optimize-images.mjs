import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../src/assets');
const outputDir = join(__dirname, '../src/assets/optimized');

async function optimizeImages() {
  try {
    await mkdir(outputDir, { recursive: true });
    
    const files = await readdir(inputDir);
    const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));
    
    for (const file of imageFiles) {
      const inputPath = join(inputDir, file);
      const nameWithoutExt = basename(file, extname(file));
      
      // Get image metadata for dimensions
      const metadata = await sharp(inputPath).metadata();
      console.log(`Processing ${file}: ${metadata.width}x${metadata.height}`);
      
      // Create WebP version (high quality)
      const webpPath = join(outputDir, `${nameWithoutExt}.webp`);
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);
      
      // Create AVIF version (best compression, modern format)
      const avifPath = join(outputDir, `${nameWithoutExt}.avif`);
      await sharp(inputPath)
        .avif({ quality: 75, effort: 6 })
        .toFile(avifPath);
      
      // Create optimized PNG fallback (smaller)
      const pngPath = join(outputDir, `${nameWithoutExt}.png`);
      await sharp(inputPath)
        .png({ compressionLevel: 9, quality: 80 })
        .toFile(pngPath);
      
      console.log(`✓ ${file} optimized`);
    }
    
    // Show file sizes
    console.log('\n--- File sizes ---');
    const optimizedFiles = await readdir(outputDir);
    for (const file of optimizedFiles) {
      const stats = await import('fs').then(fs => 
        new Promise((resolve, reject) => 
          fs.stat(join(outputDir, file), (err, stats) => err ? reject(err) : resolve(stats))
        )
      );
      console.log(`${file}: ${(stats.size / 1024).toFixed(1)}KB`);
    }
    
    console.log('\n✅ All images optimized!');
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeImages();


