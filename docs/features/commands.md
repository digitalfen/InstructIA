# Commands

## Overview

Commands are the entry points for user interactions in Instructa. They define how users can trigger actions and prompts.

## Command Structure

Each command is a markdown file with the following structure:

```markdown
# Command Name

Description of what the command does.

## Usage

`command-name [options]`

## Options

- `--option1`: Description of option1
- `--option2`: Description of option2

## Examples

1. Basic usage:
   ```
   command-name
   ```

2. With options:
   ```
   command-name --option1 value1 --option2 value2
   ```
```

## Creating Commands

Create your commands in the `commands/` directory:

```markdown
# My Command

Description of my command.

## Usage

`my-command [options]`

## Options

- `--input`: Input file path
- `--output`: Output file path

## Examples

1. Basic usage:
   ```
   my-command
   ```

2. With input and output:
   ```
   my-command --input data.txt --output result.txt
   ```
```

## Command Categories

Commands can be organized into categories:

```markdown
# Category: Data Processing

## Commands

1. `process-data`: Process input data
2. `analyze-data`: Analyze processed data
3. `export-data`: Export data to various formats
```

## Best Practices

1. **Clear Names**: Use descriptive names that indicate the command's purpose
2. **Detailed Descriptions**: Provide clear descriptions of what the command does
3. **Well-Documented Options**: Document all available options and their usage
4. **Helpful Examples**: Include practical examples of command usage
5. **Consistent Format**: Follow a consistent format for all commands 