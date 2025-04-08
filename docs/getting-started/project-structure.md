# Project Structure

## Directory Structure

After initialization, Instructa creates the following directory structure:

```
your-project/
├── prompts/           # Directory for your prompts
│   └── ...           # Prompt files (.md)
├── actions/           # Directory for your actions
│   └── ...           # Action files (.md)
├── config/            # Configuration files
│   ├── languages/     # Language configuration files
│   └── ...           # Other configuration files
└── instructa.json     # Main configuration file
```

## Key Components

### Prompts Directory

The `prompts/` directory contains all your prompt definitions. Each prompt is a markdown file with the following structure:

```markdown
# Prompt Name

Description of what the prompt does.

## Template

The prompt template with placeholders:

```
You are an assistant specialized in {topic}.
Please help with: {question}
```
```

### Actions Directory

The `actions/` directory contains all your action definitions. Each action is a markdown file with the following structure:

```markdown
# Action Name

Description of what the action does.

## Steps

1. First step
2. Second step
3. Return the result
```

### Config Directory

The `config/` directory contains configuration files:

- `languages/`: Language-specific configuration files
- Other configuration files as needed

### instructa.json

The main configuration file that defines:

- Project settings
- Default language
- Custom instructions
- Other configuration options 