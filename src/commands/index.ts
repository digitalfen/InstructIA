export * from './types';
export * from './manager';
export * from './init';
export * from './version';
export * from './help';

import { DefaultCommandManager } from './manager';
import { initCommand } from './init';
import { versionCommand } from './version';
import { helpCommand } from './help';

// Create and configure the command manager
const commandManager = new DefaultCommandManager();

// Register all commands
commandManager.register(initCommand);
commandManager.register(versionCommand);
commandManager.register(helpCommand);

export { commandManager }; 