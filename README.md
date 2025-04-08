# Instructa Framework

A powerful framework based on POD (Prompt-Oriented Development) for automating AI-driven instructions and actions.

## What is Instructa?

Instructa is a framework that enables the creation of structured, modular, and reusable prompts for AI systems. It provides a standardized environment for managing context, executing predefined actions, and extending functionality through a keyword-based command system.

The framework is particularly useful for IDEs with integrated AI capabilities (like Cursor and WindSurf), where it helps generate and manage context for AI consumption.

## Installation

Instructa is installed globally as a command-line tool:

```bash
npm install -g instructa
```

## Usage

After installing globally, you can use Instructa in any directory to set up the framework structure:

```bash
# Create structure with default language (en-US)
instructa

# Create structure with specific language
instructa --language=pt-BR
```

The command will create the following directory structure:
```
project/
├── context/              # Processed .md files for AI consumption
│   └── instructions/     # Instructions that AI can use
├── src/
│   ├── data/            # Raw data for processing
│   ├── config/          # Custom configurations and instructions
│   └── backup/          # Context backups
└── logs/                # Operation logs
```

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

## Usage

Instructa is designed to be used during your conversations with AI in IDEs like Cursor or WindSurf. It works as a keyword trigger system:

### How it Works

1. During your conversation with the AI, you can use keywords to trigger specific actions:
   ```
   instructa [keyword]
   ```

2. The AI will recognize these keywords and execute the corresponding actions defined in your instructions.

### Example: Using the Help Keyword

When chatting with the AI, you can type:
```
instructa help
```

The AI will:
1. Recognize this as a keyword trigger
2. Read the instructions from `context/instructions/default-instructions.md`
3. Find the "help" keyword and its associated action
4. Execute the action: "explain what each command in this list is for and how to use it"
5. Respond with something like:
   ```
   Available keywords and their actions:
   
   context_backup:
   - Creates a backup of your current context
   - Saves it in 'src/backup/' with timestamp
   - Useful for preserving your work before major changes
   
   context_update:
   - Creates a backup first (using context_backup)
   - Analyzes files in 'src/data/'
   - Generates new .md files in 'context/'
   - Creates detailed logs of changes
   
   help:
   - Shows this help message
   - Explains all available keywords and their actions
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