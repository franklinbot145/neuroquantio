import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '../src/assets/Logo für Neuroquant .png');
const outputDir = join(__dirname, '../src/assets/optimized');

async function resizeLogo() {
  try {
    await mkdir(outputDir, { recursive: true });
    
    console.log('Processing and resizing new logo...');
    
    // Read the image
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    console.log(`Original size: ${metadata.width}x${metadata.height}`);
    
    // Target height for navbar: 120px (will be displayed at 58px, but 2x for retina)
    const targetHeight = 240;
    const aspectRatio = metadata.width / metadata.height;
    const targetWidth = Math.round(targetHeight * aspectRatio);
    
    console.log(`Resizing to: ${targetWidth}x${targetHeight}`);
    
    // Resize first, then process transparency
    const resizedBuffer = await image
      .resize(targetWidth, targetHeight, { fit: 'contain' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const { data, info } = resizedBuffer;
    
    // Process each pixel - make near-black pixels transparent
    const threshold = 35; // Pixels with R, G, B all below this become transparent
    const processedData = Buffer.alloc(data.length);
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      
      // Check if pixel is near-black (background)
      if (r < threshold && g < threshold && b < threshold) {
        // Make transparent
        processedData[i] = 0;
        processedData[i + 1] = 0;
        processedData[i + 2] = 0;
        processedData[i + 3] = 0;
      } else {
        // Keep original
        processedData[i] = r;
        processedData[i + 1] = g;
        processedData[i + 2] = b;
        processedData[i + 3] = a;
      }
    }
    
    // Create the transparent image
    const transparentImage = sharp(processedData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    });
    
    // Save PNG with transparency
    const pngPath = join(outputDir, 'neuroquant-logo.png');
    await transparentImage
      .clone()
      .png({ compressionLevel: 9 })
      .toFile(pngPath);
    console.log('✓ PNG saved');
    
    // Save WebP with transparency
    const webpPath = join(outputDir, 'neuroquant-logo.webp');
    await transparentImage
      .clone()
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(webpPath);
    console.log('✓ WebP saved');
    
    // Save AVIF with transparency
    const avifPath = join(outputDir, 'neuroquant-logo.avif');
    await transparentImage
      .clone()
      .avif({ quality: 85 })
      .toFile(avifPath);
    console.log('✓ AVIF saved');
    
    // Show file sizes
    const fs = await import('fs');
    const pngStats = fs.statSync(pngPath);
    const webpStats = fs.statSync(webpPath);
    const avifStats = fs.statSync(avifPath);
    
    console.log('\n--- File sizes ---');
    console.log(`PNG:  ${(pngStats.size / 1024).toFixed(1)} KB`);
    console.log(`WebP: ${(webpStats.size / 1024).toFixed(1)} KB`);
    console.log(`AVIF: ${(avifStats.size / 1024).toFixed(1)} KB`);
    
    console.log(`\n✅ New logo processed: ${info.width}x${info.height}`);
    console.log('Background has been made transparent.');
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

resizeLogo();


