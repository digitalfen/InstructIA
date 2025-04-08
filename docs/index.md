# InstructIA

A powerful Context Management System based on POD (Prompt-Oriented Development) for automating AI-driven instructions and actions.

## Overview

InstructIA is a comprehensive framework designed to streamline the management of AI-driven instructions and actions through a structured, modular approach. It provides a robust system for organizing and executing predefined commands while maintaining flexibility for customization.

## Quick Start

To get started with InstructIA, install it via npm:

```bash
# Install with default language (en-US)
npm install instructia

# Or install with a specific language
npm install instructia --language=pt-BR
```

## Available Instructions

Here are the default instructions available out-of-the-box. Use them by running `instructia <command>`:

- **`instructia context_create-backup`**: Creates a backup of the current context.
- **`instructia context_load-backup`**: Restores a selected backup.
- **`instructia context_update`**: Updates the context based on predefined configurations.
- **`instructia context_reset`**: Resets the current context.
- **`instructia context_summarize`**: Generates a summary of context files.
- **`instructia instruction_create`**: Creates new custom instructions.
- **`instructia instruction_delete`**: Deletes existing custom instructions.
- **`instructia instruction_edit`**: Edits existing custom instructions.
- **`instructia help`**: Provides assistance on how to use the tool and its instructions.

For more details, see the [Default Instructions](default_instructions.md) page.

## What's Next?

- Learn about [Key Features](key_features.md)
- Understand [Core Concepts](core_concepts.md)
- Follow the [Installation Guide](installation.md) 