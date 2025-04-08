# Instructa Framework

A powerful framework based on POD (Prompt-Oriented Development) for automating AI-driven instructions and actions.

## Installation

Instructa is installed globally as a command-line tool:

```bash
npm install -g instructa
```

## Usage

### Initialization

To start using Instructa, you need to initialize a new project. The `init` command will set up everything you need:

```bash
# Initialize with default language (en-US)
instructa init

# Initialize with specific language
instructa init --language=pt-BR
```

#### Initialization Options

- `--language`: Sets the project language (default: en-US)
  ```bash
  instructa init --language=pt-BR
  ```

### Project Structure

After initialization, Instructa will create the following directory structure:

```
your-project/
├── prompts/           # Directory for your prompts
├── actions/           # Directory for your actions
├── config/            # Configuration files
└── instructa.json     # Main configuration file
```

### Prompt Development

Create your prompts in the `prompts/` directory:

```typescript
// prompts/my-prompt.ts
export const prompt = {
  name: "my-prompt",
  description: "Description of my prompt",
  template: `
    You are an assistant specialized in {topic}.
    Please help with: {question}
  `
};
```

### Action Development

Create your actions in the `actions/` directory:

```typescript
// actions/my-action.ts
export const action = {
  name: "my-action",
  description: "Description of my action",
  execute: async (context) => {
    // Action implementation
    return result;
  }
};
```

## What is Instructa?

Instructa is a framework that enables the creation of structured, modular, and reusable prompts for AI systems. It provides a standardized environment for managing context, executing predefined actions, and extending functionality through a keyword-based command system.

The framework is particularly useful for IDEs with integrated AI capabilities (like Cursor and WindSurf), where it helps generate and manage context for AI consumption.

## Core Concepts

### POD (Prompt-Oriented Development)

POD is a development paradigm centered on creating systems, frameworks, or agents based on structured, modular, and reusable prompts. It transforms textual instructions into logical context units, providing AI systems (or interpretive compilers) with a solid semantic foundation for code generation, behavior definition, or response formulation.

Key aspects of POD:
- **Structured Prompts**: Well-defined formats for instructions
- **Modularity**: Reusable components that can be combined
- **Context Management**: Organized storage and retrieval of information
- **Semantic Clarity**: Clear meaning and purpose for each instruction

### Instructa Framework

Instructa is a POD-based framework that contextualizes predefined commands and actions while enabling the creation of new ones. It establishes a structured directory system for AI context management and implements a keyword-triggered action system.

Key features:
- **Context Management**: Organized storage of information for AI consumption
- **Keyword Commands**: Simple trigger system for executing predefined actions
- **Extensibility**: Framework for adding new commands and actions
- **Internationalization**: Support for multiple languages

## Default Instructions

```json
{
  "context_backup": [
    "Create a folder inside 'instructa/src/backup/' named context_backup_[current date in epoch format]",
    "Copy all files and folders from the 'context' folder to the folder created in the previous action to create a backup of the current context"
  ],
  "context_update": [
    "Execute the context_backup instruction",
    "Read the content of `context-config.md` and based on the instructions contained therein, analyze each file and its data located in `src/data/` to generate `.md` files within the `context/` folder. Each generated `.md` file must be modularized by subject or functionality, have a clear structure with titles and subtitles, contain only useful, detailed, and well-written information for consumption by LLM, and when including raw data or interpretations of graphs and the like, use ASCII to create the necessary forms, tables, and graphs for explanations",
    "Create a log file in the logs folder, with the date and time of creation in the name. Containing the names of files read to compose that context, the names of generated files, date and time of execution, as well as the prompts used in the process and the differences between the created context files and those from the last backup if it exists. (save the changed line number and example of before and after the change)"
  ],
  "help": [
    "Explain what each command in this list is for and how to use it"
  ]
}
```

## Internationalization

Instructa supports multiple languages:
- English (United States) (en-US)
- Portuguese (Brazil) (pt-BR)

To change the language during installation:
```bash
npm install instructa --language=en-GB
```

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup

To use Instructa in your project, simply install it via npm:

```bash
# Install with default language (en-US)
npm install instructa

# Or install with a specific language
npm install instructa --language=pt-BR
```

This will:
1. Create the necessary directory structure
2. Set up configuration files
3. Configure the framework with your chosen language

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