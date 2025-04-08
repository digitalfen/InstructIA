# CLI Commands

## Overview

Instructa provides a command-line interface (CLI) for interacting with the framework. This page documents all available CLI commands.

## Global Commands

### Version

Display the current version of Instructa:

```bash
instructa --version
```

### Help

Display help information:

```bash
instructa --help
```

## Project Commands

### Init

Initialize a new Instructa project:

```bash
instructa init [options]
```

Options:
- `--language`: Set the project language (default: en-US)
  ```bash
  instructa init --language=pt-BR
  ```

### Context Backup

Create a backup of the current context:

```bash
instructa context_backup
```

### Context Update

Update the context based on the latest data:

```bash
instructa context_update
```

### Help

Display help information about available commands:

```bash
instructa help
```

## Plugin Commands

### Plugin Install

Install a plugin:

```bash
instructa plugin install <plugin-name>
```

### Plugin List

List installed plugins:

```bash
instructa plugin list
```

### Plugin Remove

Remove a plugin:

```bash
instructa plugin remove <plugin-name>
```

## Custom Commands

Custom commands can be added through plugins or by extending the framework. See the [Extending the Framework](../advanced/extending.md) page for more information. 