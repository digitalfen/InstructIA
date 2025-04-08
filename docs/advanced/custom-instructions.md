# Custom Instructions

## Overview

Instructa allows you to create custom instructions to extend its functionality. These instructions can be used to define new behaviors and actions.

## Default Instructions

Instructa comes with a set of default instructions:

```json
{
  "context_backup": [
    "Create a folder inside 'instructa/src/backup/' named context_backup_[current date in epoch format]",
    "Copy all files and folders from the 'context' folder to the folder created in the previous action to create a backup of the current context"
  ],
  "context_update": [
    "Execute the context_backup instruction",
    "Read the content of `context-config.md` and based on the instructions contained therein, analyze each file and its data located in `src/data/` to generate `.md` files within the `context/` folder. Each generated `.md` file must be modularized by subject or functionality, have a clear structure with titles and subtitles, contain only useful, detailed, and well-written information for consumption by LLM, and when including raw data or interpretations of graphs and the like, use ASCII to create the necessary forms, tables, and graphs for explanations",
    "Create a log file in the logs folder, with the date and time of creation in the name. Containing the names of files read to compose that context, the names of generated files, date and time of execution, as well as the prompts used in the process and the differences between the created context files and those from the last backup if it exists. (save the changed line number and example of before and after the change)"
  ],
  "help": [
    "Explain what each command in this list is for and how to use it"
  ]
}
```

## Creating Custom Instructions

You can create custom instructions by adding them to your `instructa.json` file:

```json
{
  "my_custom_instruction": [
    "Step 1: Do something",
    "Step 2: Do something else",
    "Step 3: Return the result"
  ]
}
```

## Using Custom Instructions

Custom instructions can be used with the keyword command system:

```
instructa my_custom_instruction
```

## Example: Custom Data Processing

```json
{
  "process_data": [
    "Read the data from 'src/data/input.json'",
    "Process the data according to the rules in 'config/processing-rules.json'",
    "Save the processed data to 'src/data/output.json'",
    "Generate a report in 'reports/processing-report.md'"
  ]
}
```

## Example: Custom Code Generation

```json
{
  "generate_code": [
    "Read the requirements from 'requirements.md'",
    "Generate code based on the requirements",
    "Save the generated code to 'src/generated/'",
    "Create documentation in 'docs/generated/'"
  ]
}
```

## Best Practices

1. **Clear Steps**: Break down instructions into clear, actionable steps
2. **Descriptive Names**: Use descriptive names for your instructions
3. **Documentation**: Document what each instruction does and how to use it
4. **Testing**: Test your instructions to ensure they work as expected
5. **Modularity**: Keep instructions modular and reusable 