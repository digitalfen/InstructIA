# Base Instructions

InstructIA comes with a set of base instructions that help you manage your context and rules. These instructions are available by default and can be extended with custom instructions.

## Available Instructions

### Context Management
- `update context`: Update the context with new files or directories
- `reset context`: Reset the current context to its initial state
- `summarize context`: Generate a summary of all context files

### Instruction Management
- `create instruction`: Create a new custom instruction
- `delete instruction`: Remove an existing custom instruction
- `edit instruction`: Modify an existing custom instruction
- `list instructions`: List all available instructions (default and custom)

### Rule Management
- `create rule`: Create a new development rule
- `delete rule`: Remove an existing rule
- `edit rule`: Modify an existing rule
- `list rules`: List all available rules with their details

### Help
- `help`: Show available commands and their usage

## Usage Examples

### Summarizing Context
```bash
instructia summarize context
```
The system will:
- Read all `.mdc` and `.md` files in the context folder
- Generate a clear and objective summary of each file
- Focus on main topics, important concepts, and structures
- Use language appropriate for LLM consumption

### Listing Instructions
```bash
instructia list instructions
```
The system will show:
- All available instructions
- Brief description of each
- Whether it's a default or custom instruction

### Listing Rules
```bash
instructia list rules
```
The system will show:
- All available rules
- Description of each rule
- Files the rule applies to
- Whether the rule is always active

### Creating a Rule
```bash
instructia create rule
```
The system will guide you through creating a new rule with:
- A description of what the rule should do
- A list of instructions (one per line)
- Automatic file creation with proper formatting

### Managing Instructions
```bash
instructia create instruction
instructia delete instruction
instructia edit instruction
```
These commands help you manage custom instructions for your project.

### Context Operations
```bash
instructia update context
instructia reset context
```
Use these commands to manage your project's context.

## Best Practices

- Use clear and descriptive names for instructions
- Keep instructions focused on a single task
- Document complex instructions
- Review and update instructions regularly
- Use rules to enforce development practices
