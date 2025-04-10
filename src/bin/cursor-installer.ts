import { SUPPORTED_LANGUAGES, isValidLanguage } from '../i18n/language';
import fs from 'fs-extra';
import path from 'path';
import { Logger } from '../utils/logger';

const logger = Logger.getInstance();

interface InstallerOptions {
  language: string;
}

/**
 * Official installer for Cursor IDE environment
 * Responsible for configuring Instructia for use with Cursor
 */
export async function installCursor(options: InstallerOptions) {
  // Normalize language code to match the format in SUPPORTED_LANGUAGES
  const normalizedLanguage = normalizeLanguageCode(options.language);

  if (!isValidLanguage(normalizedLanguage)) {
    logger.error(`Unsupported language: ${options.language}`);
    logger.info('Supported languages:');
    Object.entries(SUPPORTED_LANGUAGES).forEach(([code, name]) => {
      logger.info(`- ${code} (${name})`);
    });
    process.exit(1);
  }

  // Load translation file for the selected language
  let i18nData;
  try {
    const i18nPath = path.resolve(__dirname, '..', 'i18n', 'locale', `${normalizedLanguage}.json`);
    i18nData = await fs.readJson(i18nPath);
    logger.info(`Loaded translations for language: ${normalizedLanguage}`);
  } catch (error: any) {
    logger.error(`Error loading translation file for ${normalizedLanguage}: ${error?.message || 'Unknown error'}`);
    process.exit(1);
  }

  // Load default instructions
  let defaultInstructions;
  try {
    const instructionsPath = path.resolve(__dirname, '..', 'data', 'instructions', 'default-instructions.json');
    defaultInstructions = await fs.readJson(instructionsPath);
    logger.info('Loaded default instructions');
  } catch (error: any) {
    logger.error(`Error loading default instructions: ${error?.message || 'Unknown error'}`);
    process.exit(1);
  }

  // Load constants
  let constants;
  try {
    const constantsPath = path.resolve(__dirname, '..', 'data', 'constants.json');
    constants = await fs.readJson(constantsPath);
    logger.info('Loaded constants');
  } catch (error: any) {
    logger.error(`Error loading constants: ${error?.message || 'Unknown error'}`);
    process.exit(1);
  }

  // Create directory structure
  logger.info('Creating directory structure...');
  const directories = [
    constants.directories.root,
    constants.directories.data,
    constants.directories.config,
    constants.directories.context.instructions.system,
    constants.directories.context.instructions.user
  ];

  for (const dir of directories) {
    await fs.ensureDir(dir);
    logger.info(`Created directory: ${dir}`);
  }

  // Create system instructions with default instructions included
  const systemInstructions = {
    ...constants.systemInstructions.base,
    content: constants.systemInstructions.base.content.replace('{language}', normalizedLanguage) + 
      `\n\nDefault Instructions:\n${Object.entries(defaultInstructions)
        .map(([key, value]) => `${key}:\n${value}`)
        .join('\n\n')}`
  };

  await fs.writeFile(
    path.join(constants.directories.context.instructions.system, constants.files.system.baseInstructions),
    JSON.stringify(systemInstructions, null, 2)
  );
  logger.info('Created base system instructions');

  // Create coding style instructions
  await fs.writeFile(
    path.join(constants.directories.context.instructions.system, constants.files.system.codingStyle),
    JSON.stringify(constants.systemInstructions.codingStyle, null, 2)
  );
  logger.info('Created coding style instructions');

  // Create security guidelines
  await fs.writeFile(
    path.join(constants.directories.context.instructions.system, constants.files.system.security),
    JSON.stringify(constants.systemInstructions.security, null, 2)
  );
  logger.info('Created security guidelines');

  // Create empty user instructions file
  await fs.writeFile(
    path.join(constants.directories.context.instructions.user, constants.files.user.customInstructions),
    JSON.stringify(constants.userInstructions.empty, null, 2)
  );
  logger.info('Created empty user instructions file');

  // Create context configuration
  const contextConfig = {
    ...constants.contextConfig,
    language: normalizedLanguage
  };

  await fs.writeFile(
    path.join(constants.directories.config, constants.files.config.context),
    JSON.stringify(contextConfig, null, 2)
  );
  logger.info('Created context configuration');

  // Save language configuration
  await fs.writeJson(
    path.join(constants.directories.config, constants.files.config.language), 
    { 
      language: normalizedLanguage,
      environment: 'cursor'
    }
  );
  logger.info('Saved language configuration');

  // Log installation success
  logger.success(`Environment: Cursor IDE`);
  logger.success(`Language configured: ${SUPPORTED_LANGUAGES[normalizedLanguage as keyof typeof SUPPORTED_LANGUAGES]}`);
  logger.success(i18nData.installationSuccess);
}

// Normalize language code to match the format in SUPPORTED_LANGUAGES
function normalizeLanguageCode(langCode: string): string {
  // Convert to lowercase and split by hyphen
  const parts = langCode.toLowerCase().split('-');
  if (parts.length === 2) {
    // Keep the second part in uppercase as per SUPPORTED_LANGUAGES format
    return `${parts[0]}-${parts[1].toUpperCase()}`;
  }
  return langCode;
} 