# Keyword Commands

## Overview

Instructa uses a keyword-based command system to trigger actions. This system allows you to execute predefined actions by using specific keywords during your conversation with AI in IDEs like Cursor or WindSurf.

## Command Format

The basic format for using keyword commands is:

```
instructa [keyword]
```

Where `[keyword]` is the identifier for a specific action.

## Default Commands

Instructa comes with a set of default commands:

### Help

```
instructa help
```

This command explains what each command in the list is for and how to use it.

### Context Backup

```
instructa context_backup
```

This command creates a backup of your current context.

### Context Update

```
instructa context_update
```

This command updates your context based on the latest data.

## How It Works

1. During your conversation with the AI, you use a keyword command
2. The AI recognizes this as a keyword trigger
3. The AI reads the instructions from the context
4. The AI finds the keyword and its associated action
5. The AI executes the action

## Example

When you type:
```
instructa help
```

The AI will:
1. Recognize this as a keyword trigger
2. Read the instructions from `context/instructions/default-instructions.md`
3. Find the "help" keyword and its associated action
4. Execute the action: "explain what each command in this list is for and how to use it"
5. Respond with a list of available commands and their descriptions

## Custom Commands

You can create custom commands by:

1. Adding new keywords to your instructions in `instructa.json`
2. Implementing the corresponding actions
3. Using the new keywords in your conversations 