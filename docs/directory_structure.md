# Directory Structure

After installing InstructIA globally (`npm install instructia`), you initialize your context environment by running `instructia init cursor` in your desired project location. This command creates a specific directory structure in your Cursor IDE configuration directory.

The structure is created in your Cursor configuration directory (typically `~/.cursor` or `%USERPROFILE%\.cursor`). Inside this folder, you'll find the following:

```
.cursor/
└── context/
    ├── instructions/
    │   ├── base-instructions.mdc    # Base instructions combining default and custom
    │   ├── default-instructions.mdc # Default system instructions
    │   └── custom-instructions.mdc  # User-defined custom instructions
    └── data/                        # Data files and configurations
```

## Key Directories

- `context/`: Main directory for all InstructIA context
  - `instructions/`: Contains all instruction files
    - `base-instructions.mdc`: Combined instructions (default + custom)
    - `default-instructions.mdc`: System default instructions
    - `custom-instructions.mdc`: User-defined custom instructions
  - `data/`: Stores data files and configurations