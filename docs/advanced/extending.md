# Extending the Framework

## Overview

Instructa is designed to be extensible. You can extend its functionality by creating custom prompts, actions, and instructions.

## Extension Points

### Prompts

Create custom prompts in the `prompts/` directory:

```typescript
// prompts/custom-prompt.ts
export const prompt = {
  name: "custom-prompt",
  description: "A custom prompt",
  template: `
    You are a custom assistant.
    Please help with: {question}
  `
};
```

### Actions

Create custom actions in the `actions/` directory:

```typescript
// actions/custom-action.ts
export const action = {
  name: "custom-action",
  description: "A custom action",
  execute: async (context) => {
    // Custom action implementation
    return result;
  }
};
```

### Instructions

Add custom instructions to your `instructa.json` file:

```json
{
  "custom_instruction": [
    "Step 1: Do something",
    "Step 2: Do something else"
  ]
}
```

## Creating a Plugin

You can create a plugin to package your extensions:

1. Create a new directory for your plugin
2. Add your custom prompts, actions, and instructions
3. Create a `plugin.json` file:

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "A custom plugin for Instructa",
  "prompts": [
    "prompts/custom-prompt.ts"
  ],
  "actions": [
    "actions/custom-action.ts"
  ],
  "instructions": {
    "custom_instruction": [
      "Step 1: Do something",
      "Step 2: Do something else"
    ]
  }
}
```

4. Install your plugin:

```bash
instructa plugin install my-plugin
```

## Example: Data Processing Plugin

```json
{
  "name": "data-processor",
  "version": "1.0.0",
  "description": "A plugin for data processing",
  "prompts": [
    "prompts/process-data-prompt.ts"
  ],
  "actions": [
    "actions/process-data-action.ts"
  ],
  "instructions": {
    "process_data": [
      "Read the data from 'src/data/input.json'",
      "Process the data according to the rules in 'config/processing-rules.json'",
      "Save the processed data to 'src/data/output.json'"
    ]
  }
}
```

## Best Practices

1. **Modularity**: Keep your extensions modular and focused
2. **Documentation**: Document your extensions thoroughly
3. **Testing**: Test your extensions before publishing
4. **Versioning**: Use semantic versioning for your plugins
5. **Compatibility**: Ensure compatibility with the core framework 