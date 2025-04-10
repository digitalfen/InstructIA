import { Command } from './index';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Logger } from '../utils/logger';

export const versionCommand: Command = {
  name: 'version',
  description: 'Show CLI version',
  aliases: ['--version', '-v'],
  async execute(): Promise<void> {
    const logger = Logger.getInstance();
    
    try {
      const packageJson = JSON.parse(readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf8'));
      logger.info(`Instructia CLI version ${packageJson.version}`);
    } catch (error) {
      logger.info('Instructia CLI version unknown');
    }
  }
}; 