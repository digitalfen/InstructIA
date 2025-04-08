import { install } from './install';

// Check command line arguments
const language = process.env.npm_config_language || 'en-US';
install({ language }); 