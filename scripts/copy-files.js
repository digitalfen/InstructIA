const fs = require('fs-extra');
const path = require('path');

async function copyFiles() {
  try {
    // Copiar arquivos de tradução
    await fs.ensureDir('dist/i18n/locale');
    await fs.copy('src/i18n/locale', 'dist/i18n/locale');

    // Copiar arquivos de instruções
    await fs.ensureDir('dist/data/instructions');
    await fs.copy('src/data/instructions', 'dist/data/instructions');

    console.log('Files copied successfully!');
  } catch (err) {
    console.error('Error copying files:', err);
    process.exit(1);
  }
}

copyFiles(); 