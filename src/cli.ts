#!/usr/bin/env node

import { install } from './install';

// Parse command line arguments
const args = process.argv.slice(2);
const params = new Map<string, string>();

args.forEach(arg => {
  if (arg.startsWith('--')) {
    const [key, value] = arg.slice(2).split('=');
    params.set(key, value || 'true');
  }
});

// Get language from arguments or use default
const language = params.get('language') || 'en-US';

// Execute installation
install({ language })
  .then(() => {
    process.exit(0);
  })
  .catch(error => {
    console.error('Error during setup:', error);
    process.exit(1);
  }); 