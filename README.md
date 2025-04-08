# InstructIA

A powerful Context Management System based on POD (Prompt-Oriented Development) for automating AI-driven instructions and actions.

## Key Features
- **Context Management**: Organizes and stores information for AI consumption.
- **Keyword Instructions**: Simple trigger system for executing predefined actions.
- **Extensibility**: Framework for adding new commands and actions.
- **Internationalization**: Support for multiple languages, including English and Portuguese.

## Core Concepts
- **POD (Prompt-Oriented Development)**: A development paradigm focused on creating systems based on structured, modular, and reusable prompts.
- **InstructIA Framework**: Contextualizes predefined commands and actions while enabling the creation of new ones.

## Installation

Installed globally as a command-line tool via npm.

To use InstructIA in your project, simply install it via npm:

```bash
# Install with default language (en-US)
npm install instructia

# Or install with a specific language
npm install instructia --language=pt-BR
```

This will:
1. Create the necessary directory structure
2. Set up configuration files
3. Configure the system with your chosen language

## Default Instructions Usage
InstructIA comes with a set of default instructions designed to streamline common tasks and enhance productivity. Here's a brief overview of what these instructions do:

- **context_create-backup**: Creates a backup of the current context.
- **context_load-backup**: Restores a selected backup.
- **context_update**: Updates the context based on predefined configurations.
- **context_reset**: Resets the current context, deleting all data except default files.
- **context_summarize**: Generates a summary of context files.
- **instruction_create**: Creates new custom instructions.
- **instruction_delete**: Deletes existing custom instructions.
- **instruction_edit**: Edits existing custom instructions.
- **help**: Provides assistance on how to use the tool and its instructions.

## Documentation

The complete documentation is available at: [https://digitalfen.github.io/InstructIA/](https://digitalfen.github.io/InstructIA/)

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Credits

Created by Vinícius Maffioli from DigitalFen.

This framework is free to use and modify. Feel free to use it in your projects, whether personal or commercial.