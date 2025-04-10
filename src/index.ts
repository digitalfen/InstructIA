import { getInstaller } from './bin';

// Check command line arguments
const language = process.env.npm_config_language || 'en-US';
const environment = process.env.npm_config_environment || 'cursor';

const installer = getInstaller(environment);
if (installer) {
  installer({ language });
} else {
  console.error(`Error: Installer not found for environment '${environment}'`);
  process.exit(1);
} 