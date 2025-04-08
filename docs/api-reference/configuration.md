# Configuration

## Overview

Instructa uses configuration files to customize its behavior. This page documents all available configuration options.

## Main Configuration File

The main configuration file is `instructa.json` in the root of your project:

```json
{
  "language": "en-US",
  "prompts": {
    "directory": "prompts/"
  },
  "actions": {
    "directory": "actions/"
  },
  "context": {
    "directory": "context/",
    "backup": {
      "directory": "context/backup/"
    }
  },
  "instructions": {
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
}
```

## Configuration Options

### Language

Set the default language for the project:

```json
{
  "language": "en-US"
}
```

Supported values:
- `en-US`: English (United States)
- `pt-BR`: Portuguese (Brazil)

### Prompts

Configure the prompts directory:

```json
{
  "prompts": {
    "directory": "prompts/"
  }
}
```

### Actions

Configure the actions directory:

```json
{
  "actions": {
    "directory": "actions/"
  }
}
```

### Context

Configure the context directory and backup settings:

```json
{
  "context": {
    "directory": "context/",
    "backup": {
      "directory": "context/backup/"
    }
  }
}
```

### Instructions

Define custom instructions:

```json
{
  "instructions": {
    "my_custom_instruction": [
      "Step 1: Do something",
      "Step 2: Do something else"
    ]
  }
}
```

## Environment Variables

Instructa also supports configuration through environment variables:

- `INSTRUCTA_LANGUAGE`: Set the default language
- `INSTRUCTA_PROMPTS_DIR`: Set the prompts directory
- `INSTRUCTA_ACTIONS_DIR`: Set the actions directory
- `INSTRUCTA_CONTEXT_DIR`: Set the context directory
- `INSTRUCTA_CONTEXT_BACKUP_DIR`: Set the context backup directory 