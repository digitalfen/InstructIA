export interface CommandOptions {
  language?: string;
  verbose?: boolean;
  [key: string]: any;
}

export interface Command {
  name: string;
  description: string;
  aliases?: string[];
  options?: {
    name: string;
    description: string;
    required?: boolean;
    default?: any;
  }[];
  execute: (options: CommandOptions) => Promise<void>;
}

export interface CommandManager {
  register(command: Command): void;
  execute(commandName: string, options: CommandOptions): Promise<void>;
  getCommand(commandName: string): Command | undefined;
  getCommands(): Command[];
} 