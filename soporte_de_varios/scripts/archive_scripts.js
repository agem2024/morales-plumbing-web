#!/usr/bin/env node
/**
 * MEJORA 5: Limpieza de scripts temporales
 * Morales Plumbing — Organización del proyecto
 * 
 * Uso: node scripts/archive_scripts.js
 * 
 * Mueve todos los scripts de parche/utilidad de la raíz a /archive/
 * Genera un índice de lo que se movió y cuándo.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ARCHIVE_DIR = path.join(ROOT, 'archive');

// Scripts que deben quedarse en la raíz (activos en producción)
const KEEP_IN_ROOT = [
  'app.js',
  'config.js',
  'universe.js',
  'package.json',
  'package-lock.json',
];

// Scripts de utilidad/parche a archivar
const SCRIPTS_TO_ARCHIVE = [
  'add_animations.js',
  'add_app_card.js',
  'add_exclusions.js',
  'add_mic_btn.js',
  'add_mic_logic.js',
  'add_seo_features.js',
  'add_speak_to_joe.js',
  'auto_translate.js',
  'create_all_comics.js',
  'find_lines.js',
  'find_missing_i18n.js',
  'fix.js',
  'fix2.js',
  'fix_app.js',
  'fix_emojis.js',
  'fix_horizontal.js',
  'fix_html.js',
  'fix_links.js',
  'fix_nl.js',
  'fix_pricebook_prices.js',
  'fix_prices.js',
  'fix_video.js',
  'inject_back_key.js',
  'inject_comic_button.js',
  'inject_comic_keys.js',
  'inject_pb_keys.js',
  'inject_translations.js',
  'inject_trenchless_link.js',
  'inject_video.js',
  'list_svc.js',
  'remove_joe_ai.js',
  'remove_joe_ai2.js',
  'revert_icons.js',
  'update_emergency_style.js',
  'update_html.js',
  'update_index.js',
  'update_pb.js',
  'update_pb_pro.js',
  'update_trans.js',
  'verify_html.js',
];

function archiveScripts() {
  // Crear directorio archive si no existe
  if (!fs.existsSync(ARCHIVE_DIR)) {
    fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
    console.log(`📁 Creado directorio: archive/`);
  }

  const manifest = {
    archivedAt: new Date().toISOString(),
    archivedCount: 0,
    skipped: [],
    archived: [],
  };

  console.log(`\n📦 Archivando scripts de utilidad...\n`);

  for (const scriptName of SCRIPTS_TO_ARCHIVE) {
    const srcPath = path.join(ROOT, scriptName);
    const destPath = path.join(ARCHIVE_DIR, scriptName);

    if (!fs.existsSync(srcPath)) {
      console.log(`  ⏭  ${scriptName.padEnd(40)} — no encontrado`);
      manifest.skipped.push(scriptName);
      continue;
    }

    try {
      fs.copyFileSync(srcPath, destPath);
      fs.unlinkSync(srcPath);
      console.log(`  ✅ ${scriptName.padEnd(40)} → archive/${scriptName}`);
      manifest.archived.push(scriptName);
      manifest.archivedCount++;
    } catch (err) {
      console.error(`  ❌ Error archivando ${scriptName}:`, err.message);
    }
  }

  // Guardar manifiesto
  const manifestPath = path.join(ARCHIVE_DIR, 'archive_manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n${'─'.repeat(60)}`);
  console.log(`✅ Archivados: ${manifest.archivedCount} scripts`);
  console.log(`⏭  Omitidos:  ${manifest.skipped.length} (no encontrados)`);
  console.log(`📄 Manifiesto: archive/archive_manifest.json`);
  console.log(`\n💡 Para restaurar un script: copiar de archive/ a la raíz.\n`);
}

archiveScripts();
