# Prompts

## Overview

Prompts are the core of Instructa's AI interactions. They define how the AI should behave and respond to user inputs.

## Prompt Structure

Each prompt is a markdown file with the following structure:

```markdown
# Prompt Name

Description of what the prompt does.

## Context

Provide context for the AI about its role and capabilities.

## Instructions

1. First instruction
2. Second instruction
3. Third instruction

## Examples

### Example 1
User: Input example
Assistant: Expected response

### Example 2
User: Another input
Assistant: Another response
```

## Creating Prompts

Create your prompts in the `prompts/` directory:

```markdown
# Code Review Assistant

An AI assistant that helps review code changes.

## Context

You are a code review assistant with expertise in software development best practices.

## Instructions

1. Analyze code changes for potential issues
2. Suggest improvements for code quality
3. Check for security vulnerabilities
4. Verify adherence to coding standards

## Examples

### Example 1
User: Review this code:
```python
def calculate_total(items):
    return sum(items)
```
Assistant: The code looks good but could be improved:
1. Consider adding type hints
2. Add docstring explaining the function
3. Consider handling empty lists

### Example 2
User: Is this secure?
```python
password = input("Enter password: ")
```
Assistant: This is not secure because:
1. Passwords should never be stored in plain text
2. Input should be validated
3. Consider using a secure password input method
```

## Best Practices

1. **Clear Context**: Provide clear context about the AI's role
2. **Specific Instructions**: Give precise instructions for desired behavior
3. **Relevant Examples**: Include examples that demonstrate expected interactions
4. **Consistent Format**: Follow a consistent format for all prompts
5. **Regular Updates**: Keep prompts updated with new requirements and improvements 