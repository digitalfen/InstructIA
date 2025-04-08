# Context Management

## Overview

Context management is a core feature of Instructa that enables organized storage and retrieval of information for AI consumption. It provides a structured way to maintain and update context across your application.

## Context Structure

Instructa organizes context in a hierarchical structure:

```
context/
├── instructions/     # Default instructions
├── data/            # Processed data files
└── backup/          # Context backups
```

## Default Instructions

Instructa comes with a set of default instructions for context management:

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
  ]
}
```

## Using Context Commands

### Backup Context

To create a backup of your current context:

```
instructa context_backup
```

This will:
1. Create a backup folder with timestamp
2. Copy all context files to the backup folder

### Update Context

To update your context:

```
instructa context_update
```

This will:
1. Create a backup first
2. Process data files
3. Generate updated context files
4. Create a log of changes

## Custom Context Management

You can extend the default context management by:

1. Creating custom instructions in `instructa.json`
2. Implementing custom actions for context management
3. Defining your own context structure 