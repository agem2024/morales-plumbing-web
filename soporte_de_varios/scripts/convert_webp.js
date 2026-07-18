#!/usr/bin/env node
/**
 * MEJORA 2: Conversor de imágenes a WebP
 * Morales Plumbing — Optimización de Assets
 * 
 * Uso: node scripts/convert_webp.js
 * Requiere: npm install sharp
 * 
 * Convierte todos los PNG/JPG en /assets a WebP con calidad 85
 * y redimensiona cualquier imagen mayor a 2000px de ancho.
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');
const QUALITY = 82;          // balance calidad/tamaño (0-100)
const MAX_WIDTH = 1600;      // px — suficiente para pantallas 4K con 2x DPR

const SKIP_FILES = [
  'logo_portada.png',        // se procesa con max-quality especial
  'logo_portada - Copy.png',
  'logo_portada - Copy.jpg',
];

async function convertAssets() {
  const files = fs.readdirSync(ASSETS_DIR).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return (ext === '.png' || ext === '.jpg' || ext === '.jpeg') && !f.startsWith('.');
  });

  console.log(`\n🔄 Procesando ${files.length} imágenes...\n`);

  let totalSaved = 0;
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const inputPath = path.join(ASSETS_DIR, file);
    const baseName = path.basename(file, path.extname(file));
    const outputPath = path.join(ASSETS_DIR, baseName + '.webp');

    // Skip si ya existe WebP y es más nuevo
    if (fs.existsSync(outputPath)) {
      const inStat = fs.statSync(inputPath);
      const outStat = fs.statSync(outputPath);
      if (outStat.mtimeMs > inStat.mtimeMs) {
        console.log(`  ⏭  ${file} — ya convertido`);
        skipped++;
        continue;
      }
    }

    const origSize = fs.statSync(inputPath).size;
    const quality = SKIP_FILES.includes(file) ? 90 : QUALITY;

    try {
      const pipeline = sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality, effort: 5 });

      await pipeline.toFile(outputPath);

      const newSize = fs.statSync(outputPath).size;
      const savedKB = Math.round((origSize - newSize) / 1024);
      const savedPct = Math.round((1 - newSize / origSize) * 100);
      totalSaved += origSize - newSize;
      converted++;

      const emoji = savedPct > 60 ? '🔥' : savedPct > 30 ? '✅' : '✓';
      console.log(`  ${emoji} ${file.padEnd(55)} ${(origSize/1024).toFixed(0).padStart(6)} KB → ${(newSize/1024).toFixed(0).padStart(6)} KB  (-${savedPct}%)`);
    } catch (err) {
      console.error(`  ❌ Error procesando ${file}:`, err.message);
    }
  }

  console.log(`\n${'─'.repeat(75)}`);
  console.log(`✅ Convertidas: ${converted}  |  Omitidas: ${skipped}`);
  console.log(`💾 Espacio ahorrado total: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log(`\n⚠️  PRÓXIMO PASO:`);
  console.log(`   Actualiza las referencias en index.html y style.css:`);
  console.log(`   logo_portada.png → logo_portada.webp  (¡7.8 MB → ~300 KB esperado!)`);
  console.log(`   Agrega <picture> tags para compatibilidad con Safari antiguo.\n`);
}

convertAssets().catch(console.error);
