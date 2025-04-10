import { Command, CommandManager } from './types';
import { getSupportedEnvironments } from '../bin';
import { Logger } from '../utils/logger';
import chalk from 'chalk';
import { readFileSync } from 'fs';
import { join } from 'path';

function getVersion(): string {
  try {
    const packageJson = JSON.parse(readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf8'));
    return packageJson.version;
  } catch (error) {
    return 'unknown';
  }
}

export const helpCommand: Command = {
  name: 'help',
  description: 'Show help information',
  aliases: ['--help', '-h'],
  async execute(): Promise<void> {
    const logger = Logger.getInstance();
    const environments = getSupportedEnvironments();
    const environmentsList = environments.map(env => `  ${env}    Initialize for ${env.toUpperCase()} IDE`).join('\n');
    
    logger.info(`
${chalk.bold('Instructia CLI')} - IDE Configuration Tool ${chalk.gray(`v${getVersion()}`)}

${chalk.bold('Usage:')}
  instructia init <environment> [options]
  instructia --help, -h        Show this help message
  instructia --version, -v     Show CLI version

${chalk.bold('Environments:')}
${environmentsList}

${chalk.bold('Options:')}
  --language=<lang>     Set project language [default: en-US]
  --verbose             Show detailed logs during installation
  --help, -h           Show this help message
  --version, -v        Show CLI version

${chalk.bold('Supported Languages:')}
  en-US     English (default)
  pt-BR     Portuguese (Brazil)

${chalk.bold('Log Levels:')}
  ${chalk.blue('INFO')}     Detailed information (only with --verbose)
  ${chalk.yellow('WARN')}     Warnings and alerts
  ${chalk.red('ERROR')}    Errors and failures
  ${chalk.green('SUCCESS')}  Success messages

${chalk.bold('Examples:')}
  # Show help
  instructia --help

  # Show version
  instructia --version

  # Basic installation
  instructia init cursor

  # Installation in Portuguese
  instructia init cursor --language=pt-BR

  # Installation with detailed logs
  instructia init cursor --verbose

  # Installation in Portuguese with detailed logs
  instructia init cursor --language=pt-BR --verbose
  `);
  }
}; 