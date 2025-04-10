# Usage Guide

This guide provides an overview of how to use InstructIA effectively.

!!! warning "Important Note on IDE Support"
    InstructIA is designed to support multiple development environments. Currently, **Cursor IDE** is the first supported environment, but we are actively working to expand support to other popular IDEs like VS Code, JetBrains, and other development environments. Stay tuned for updates on when new environments will be supported.

## Getting Started

InstructIA follows a simple workflow:

1. **Installation**: Install the tool globally using npm
2. **Initialization**: Set up your context environment in your project
3. **Usage**: Use predefined instructions or create your own

For detailed instructions on each step, refer to the specific sections in the navigation menu.

## Command Structure

All InstructIA commands follow this pattern:

```bash
instructia <command> [options]
```

Where `<command>` is one of the available commands:

```bash
# Initialize environment (currently supports cursor)
instructia init cursor [--language=<lang>]

# Show help
instructia help

# Show version
instructia version
```

## Documentation Structure

- **Installation**: Step-by-step guide for installing and initializing InstructIA
- **Default Instructions**: List and explanation of built-in instructions
- **Creating Custom Instructions**: How to extend InstructIA with your own instructions

For more information on specific topics, please refer to the corresponding sections in the navigation menu. 