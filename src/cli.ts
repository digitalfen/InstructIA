#!/usr/bin/env node

import { install } from './install';

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0] || 'help';
const params = new Map<string, string>();

args.slice(1).forEach(arg => {
  if (arg.startsWith('--')) {
    const [key, value] = arg.slice(2).split('=');
    params.set(key.toLowerCase(), value || 'true');
  }
});

// Get language from arguments or use default
const language = params.get('language') || 'en-US';

const showHelp = () => {
  console.log(`
Instructa CLI - POD (Prompt-Oriented Development) Framework

Usage:
  instructa [command] [options]

Commands:
  init         Create a new Instructa project
  help         Show this help message

Options:
  --language=<lang>  Set project language [default: en-US]

Examples:
  instructa init
  instructa init --language=pt-BR
  `);
  process.exit(0);
};

// Handle different commands
switch (command.toLowerCase()) {
  case 'init':
    install({ language })
      .then(() => process.exit(0))
      .catch(error => {
        console.error('Error during setup:', error);
        process.exit(1);
      });
    break;
  
  case 'help':
  default:
    showHelp();
    break;
} 