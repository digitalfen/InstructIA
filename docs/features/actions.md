# Actions

## Overview

Actions are operations that can be executed by Instructa. They allow you to automate tasks and interact with the system.

## Action Structure

Each action is a markdown file with the following structure:

```markdown
# Action Name

Description of what the action does.

## Context

Provide context about when and how the action should be used.

## Instructions

1. First instruction
2. Second instruction
3. Third instruction

## Examples

### Example 1
Input: Description of input
Output: Description of expected output

### Example 2
Input: Another input
Output: Another expected output
```

## Creating Actions

Create your actions in the `actions/` directory:

```markdown
# Process Data

An action to process input data.

## Context

This action is used to process raw data and convert it into a specific format.

## Instructions

1. Validate input data format
2. Apply necessary transformations
3. Generate result in desired format
4. Validate final result

## Examples

### Example 1
Input: CSV with sales data
Output: JSON with aggregated totals by category

### Example 2
Input: Log file
Output: Error and warning report
```

## Best Practices

1. **Clear Context**: Provide clear context about the action's purpose
2. **Specific Instructions**: Give precise instructions for desired behavior
3. **Relevant Examples**: Include examples that demonstrate expected usage
4. **Consistent Format**: Follow a consistent format for all actions
5. **Regular Updates**: Keep actions updated with new requirements and improvements 