import { Command, CommandOptions } from './types';
import { getInstaller, isInstallerAvailable } from '../bin';
import { Logger } from '../utils/logger';

export const initCommand: Command = {
  name: 'init',
  description: 'Initialize Instructia for a specific IDE environment',
  options: [
    {
      name: 'environment',
      description: 'Target IDE environment',
      required: true
    },
    {
      name: 'language',
      description: 'Project language',
      default: 'en-US'
    },
    {
      name: 'verbose',
      description: 'Show detailed logs',
      default: false
    }
  ],
  async execute(options: CommandOptions): Promise<void> {
    const logger = Logger.getInstance();
    const { environment } = options;

    if (!environment || !isInstallerAvailable(environment)) {
      throw new Error(`Unsupported environment: ${environment}`);
    }

    const installer = getInstaller(environment);
    if (!installer) {
      throw new Error(`Installer not found for environment: ${environment}`);
    }

    await installer(options);
  }
}; 