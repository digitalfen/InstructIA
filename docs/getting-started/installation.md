# Installation

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Global Installation

Instructa is designed to be installed globally as a command-line tool:

```bash
npm install -g instructa
```

## Language Configuration

Instructa supports multiple languages. You can specify the language during installation:

```bash
# Install with default language (en-US)
npm install -g instructa

# Install with specific language
npm install -g instructa --language=pt-BR
```

## Verification

To verify the installation, run:

```bash
instructa --version
```

## Troubleshooting

### Permission Issues

If you encounter permission issues during global installation, you may need to use sudo (on Linux/macOS):

```bash
sudo npm install -g instructa
```

On Windows, run your terminal as Administrator.

### Node.js Version

If you encounter compatibility issues, ensure you have the correct Node.js version:

```bash
node --version
```

The version should be 14 or higher. 