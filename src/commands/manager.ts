import { Command, CommandManager, CommandOptions } from './types';
import { Logger } from '../utils/logger';

export class DefaultCommandManager implements CommandManager {
  private commands: Map<string, Command>;
  private logger: Logger;

  constructor() {
    this.commands = new Map();
    this.logger = Logger.getInstance();
  }

  public register(command: Command): void {
    this.commands.set(command.name, command);
    
    // Register command aliases
    if (command.aliases) {
      command.aliases.forEach(alias => {
        this.commands.set(alias, command);
      });
    }
  }

  public async execute(commandName: string, options: CommandOptions): Promise<void> {
    const command = this.getCommand(commandName);
    
    if (!command) {
      throw new Error(`Command not found: ${commandName}`);
    }

    // Validate required options
    if (command.options) {
      for (const option of command.options) {
        if (option.required && !(option.name in options)) {
          throw new Error(`Missing required option: ${option.name}`);
        }
      }
    }

    try {
      await command.execute(options);
    } catch (error: any) {
      this.logger.error(`Error executing command ${commandName}: ${error?.message || 'Unknown error'}`);
      throw error;
    }
  }

  public getCommand(commandName: string): Command | undefined {
    return this.commands.get(commandName);
  }

  public getCommands(): Command[] {
    // Remove duplicates (from aliases) by using command name as key
    const uniqueCommands = new Map<string, Command>();
    
    for (const command of this.commands.values()) {
      uniqueCommands.set(command.name, command);
    }

    return Array.from(uniqueCommands.values());
  }
} 