# Rules System

Rules are a powerful way to define and enforce development practices and guidelines in your project. Each rule is stored in its own `.mdc` file in the `.cursor/rules/` directory.

## Default Rules

The system comes with a default set of rules in `default.mdc` that cover common development best practices. These rules are always applied to your project.

## Managing Rules

You can create, edit, and delete rules using the following commands:

### Create a Rule

```bash
instructia create rule
```

This command will:
1. Ask for a short description of what the rule should do
2. Ask for the instructions (one per line, starting with '-')
3. Create a new `.mdc` file with:
   - The description as title
   - Each instruction as a bullet point
   - Default settings (applies to all files)

Example:
```
Description: Documentation Rules
Instructions:
- keep documentation up to date
- use markdown
- include examples
- document public APIs
```

### Edit a Rule

```bash
instructia edit rule
```

This command will:
1. List all available rules
2. Let you choose which rule to edit
3. Show the current content
4. Let you provide new content
5. Update the rule file

### Delete a Rule

```bash
instructia delete rule
```

This command will:
1. List all available rules
2. Let you choose which rule to delete
3. Remove the rule file

## Rule Structure

Each rule file follows this structure:

```yaml
---
description: Description of what the rule does
globs: ["**/*"]  # Files the rule applies to
alwaysApply: true  # Whether the rule is always active
---

# Rule Title

- Instruction 1
- Instruction 2
- Instruction 3
```

## Best Practices

- Keep rules focused and specific
- Use clear, actionable instructions
- Group related instructions together
- Keep rules up to date
- Review rules periodically 