# Usage Guide

This guide provides an overview of how to use InstructIA effectively.

!!! warning "Important Note on LLM Integration"
    InstructIA is designed to be used **in conjunction with a Large Language Model (LLM)** integrated into your IDE (like VS Code with Copilot or Cursor) or an external LLM management tool (like Ollama with a frontend) that allows you to easily include the `instructia/context/` folder (created during initialization) in the LLM's context window. The natural language prompts within this `context` folder are meant to be processed by an LLM to drive actions and generate responses. InstructIA itself manages the context structure and provides the command triggers, but the LLM performs the interpretation and execution based on the prompts.

## Getting Started

InstructIA follows a simple workflow:

1. **Installation**: Install the tool globally using npm
2. **Initialization**: Set up your context environment in your project
3. **Usage**: Use predefined instructions or create your own

For detailed instructions on each step, refer to the specific sections in the navigation menu.

## Command Structure

All InstructIA commands follow this pattern:

```bash
instructia <keyword>
```

Where `<keyword>` is the instruction you want to execute. For example:

```bash
instructia help
instructia context_create-backup
instructia instruction_create
```

## Documentation Structure

- **Installation**: Step-by-step guide for installing and initializing InstructIA
- **Default Instructions**: List and explanation of built-in instructions
- **Creating Custom Instructions**: How to extend InstructIA with your own instructions

For more information on specific topics, please refer to the corresponding sections in the navigation menu. 