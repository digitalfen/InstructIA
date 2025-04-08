# Internationalization

## Overview

Instructa supports multiple languages through its internationalization (i18n) system. This allows you to use the framework in your preferred language.

## Supported Languages

Instructa currently supports the following languages:

- English (United States) (en-US)
- Portuguese (Brazil) (pt-BR)

## Setting the Language

### During Installation

You can set the language during installation:

```bash
# Install with default language (en-US)
npm install -g instructa

# Install with specific language
npm install -g instructa --language=pt-BR
```

### During Initialization

You can also set the language when initializing a new project:

```bash
# Initialize with default language (en-US)
instructa init

# Initialize with specific language
instructa init --language=pt-BR
```

## Language Configuration

Language configuration files are stored in the `config/languages/` directory:

```
config/
└── languages/
    ├── en-US.json
    └── pt-BR.json
```

## Language File Structure

Each language file follows this structure:

```json
{
  "language": "en-US",
  "name": "English (United States)",
  "messages": {
    "key1": "Message 1",
    "key2": "Message 2"
  }
}
```

## Using Translations

Instructa automatically uses the appropriate translations based on the configured language.

## Adding New Languages

To add a new language:

1. Create a new language file in `config/languages/`
2. Add translations for all messages
3. Update the language configuration to include the new language 