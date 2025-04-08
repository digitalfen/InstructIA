import { SUPPORTED_LANGUAGES, isValidLanguage } from './config/languages';
import fs from 'fs-extra';
import path from 'path';

interface InstallOptions {
  language: string;
}

export async function install(options: InstallOptions) {
  // Normalize language code to match the format in SUPPORTED_LANGUAGES
  const normalizedLanguage = normalizeLanguageCode(options.language);

  if (!isValidLanguage(normalizedLanguage)) {
    console.error(`Unsupported language: ${options.language}`);
    console.log('Supported languages:');
    Object.entries(SUPPORTED_LANGUAGES).forEach(([code, name]) => {
      console.log(`- ${code} (${name})`);
    });
    process.exit(1);
  }

  // Load translation file for the selected language
  let i18nData;
  try {
    const i18nPath = path.join(__dirname, 'i18n', `${normalizedLanguage}.js`);
    const i18nModule = await import(i18nPath);
    const langKey = normalizedLanguage.replace('-', '');
    i18nData = i18nModule[langKey];
    
    if (!i18nData || !i18nData.defaultInstructions) {
      throw new Error(`Missing defaultInstructions in ${normalizedLanguage} language file`);
    }
  } catch (error) {
    console.error(`Error loading translation file for ${normalizedLanguage}:`, error);
    process.exit(1);
  }

  // Create directory structure in the root
  const directories = [
    'context',
    'src/data',
    'src/config',
    'src/backup',
    'logs',
    'context/instructions'
  ];

  for (const dir of directories) {
    await fs.ensureDir(dir);
  }

  // Create context configuration file
  await fs.writeFile(
    path.join('src/config', 'context-config.md'),
    i18nData.contextConfigContent
  );

  // Create default instructions file with the selected language
  await fs.writeFile(
    path.join('context/instructions', 'default-instructions.md'),
    i18nData.defaultInstructions
  );

  // Save language configuration
  await fs.writeJson(path.join('src/config', 'language.json'), { language: normalizedLanguage });

  // Log messages in the correct order
  console.log(`Language configured: ${SUPPORTED_LANGUAGES[normalizedLanguage as keyof typeof SUPPORTED_LANGUAGES]}`);
  console.log(i18nData.installationSuccess);
}

// Normalize language code to match the format in SUPPORTED_LANGUAGES
function normalizeLanguageCode(langCode: string): string {
  // Split by hyphen and capitalize each part
  const parts = langCode.split('-');
  if (parts.length === 2) {
    return `${parts[0].toLowerCase()}-${parts[1].toUpperCase()}`;
  }
  return langCode;
}

// Check command line arguments
const language = process.env.npm_config_language || 'en-US';
install({ language }); 