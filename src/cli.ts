#!/usr/bin/env node

import { Logger } from './utils/logger';
import { commandManager } from './commands';

const logger = Logger.getInstance();
const args = process.argv.slice(2);

// Parse arguments
const params = new Map<string, string>();
let command = 'help'; // Default command
let subcommand: string | undefined;

// Parse command and subcommand
if (args.length > 0) {
  const firstArg = args[0];
  if (!firstArg.startsWith('-')) {
    command = firstArg;
    if (args.length > 1 && !args[1].startsWith('-')) {
      subcommand = args[1];
    }
  } else if (firstArg === '--version' || firstArg === '-v') {
    command = 'version';
  } else if (firstArg === '--help' || firstArg === '-h') {
    command = 'help';
  }
}

// Parse options
args.forEach(arg => {
  if (arg.startsWith('--')) {
    const [key, value] = arg.slice(2).split('=');
    params.set(key.toLowerCase(), value || 'true');
  }
});

// Configure logger verbosity
logger.setVerbose(params.get('verbose') === 'true');

// Prepare command options
const options = {
  environment: subcommand,
  language: params.get('language') || 'en-US',
  verbose: params.get('verbose') === 'true'
};

// Execute command
commandManager.execute(command, options).catch(error => {
  logger.error(error.message);
  process.exit(1);
}); 