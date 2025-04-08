# Quick Start

## Initialization

After installing Instructa globally, you can initialize a new project:

```bash
# Initialize with default language (en-US)
instructa init

# Initialize with specific language
instructa init --language=pt-BR
```

## Project Structure

The initialization process creates the following directory structure:

```
your-project/
├── prompts/           # Directory for your prompts
├── actions/           # Directory for your actions
├── config/            # Configuration files
└── instructa.json     # Main configuration file
```

## Creating Your First Prompt

Create a new prompt in the `prompts/` directory:

```typescript
// prompts/my-prompt.ts
export const prompt = {
  name: "my-prompt",
  description: "Description of my prompt",
  template: `
    You are an assistant specialized in {topic}.
    Please help with: {question}
  `
};
```

## Creating Your First Action

Create a new action in the `actions/` directory:

```typescript
// actions/my-action.ts
export const action = {
  name: "my-action",
  description: "Description of my action",
  execute: async (context) => {
    // Action implementation
    return result;
  }
};
```

## Using Keyword Commands

Instructa uses a keyword-based command system. During your conversation with AI in IDEs like Cursor or WindSurf, you can use keywords to trigger specific actions:

```
instructa [keyword]
```

For example:
```
instructa help
```

This will trigger the help action, which explains all available commands. 