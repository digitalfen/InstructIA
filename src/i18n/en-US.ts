export const enUS = {
  defaultInstructions: `The user can at any time send you a prompt containing a key phrase for you to execute a predefined instruction, listed in this file;

To identify when the user is using a key and differentiate it from a normal conversation, the user must 
send the following prompt: instructa [key-phrase]

For example: instructa help

Each instruction can have multiple actions, which will be executed in the order they are listed.

The arrangement of instructions with their key phrases and actions will be done using the JSON structure below:
\`\`\`json
{
 "key": [
   "action 1",
   "action 2"
 ]
}
\`\`\`

# Default instructions 
\`\`\`json
{ 
  "context_create-backup": [
    "Create a folder inside 'instructa/src/backup/' named 'context_backup_[id formed by the current date in epoch format]'",
    "Copy all files and folders that are inside the 'context' folder to the folder created in the previous action, with the aim of creating a backup of the current context",
    "Create a log file in the 'logs' folder with the instruction name, date and time of creation in the name. The log should contain information about the backup created"
  ],
  "context_load-backup": [
    "List the available backups in the 'instructa/src/backup' folder",
    "Allow the user to choose which backup they want to restore",
    "Delete all files and folders in the 'instructa/context' folder, except for the files created during the installation of this package ('/context.md' and '/instructions/default-instructions.md'), but delete any changes made to these files",
    "Copy the content of the selected backup into the 'instructa/context' folder",
    "Create a log with the instruction name, date and time of execution, and the name of the restored backup"
  ],
  "context_update": [
    "Execute the 'context_create_backup' instruction",
    "Read the content of \`context-config.md\` and, based on the instructions contained in it, analyze each file and its data located in \`src/data/\` to generate \`.md\` files inside the \`context/\` folder. Each generated \`.md\` file must be modularized by subject or functionality, have a clear structure with titles and subtitles, contain only useful, detailed and well-written information for consumption by LLM. When including raw data or interpretations of graphs and the like, use ASCII to create the necessary forms, tables and graphs for explanations",
    "Create a log file in the 'logs' folder with the instruction name, date and time of creation in the name. The log should contain the names of the files read to compose the context, the names of the generated files, date and time of execution, the prompts used in the process, and the differences between the created context files and those from the last backup if it exists (save the changed line number and example of before and after the change)"
  ],
  "context_reset": [
    "Inform the user that this action will delete the entire current context and create a new one",
    "Delete all files and folders in the 'instructa/context' folder, except for the files created during the installation of this package ('/context.md' and '/instructions/default-instructions.md'), but delete any changes made to these files",
    "Create a log file in the 'logs' folder with the instruction name, date and time of creation in the name. The log should contain the names of the files deleted during the execution of the instruction"
  ],
  "context_summarize": [
    "Read all files with \`.md\` extension directly located in the \`instructa/context\` folder, ignoring subfolders",
    "For each file, generate a clear, objective and faithful textual summary of the content present. The summary should capture the main topics, important concepts and explained structures, using language appropriate for consumption by LLMs",
    "Unify all summaries into a single continuous text, well structured, separated by sections with titles that correspond to the original file name (without the \`.md\` extension)",
    "Save the unified summary in a new file called \`context_summary.md\` inside the \`instructa/context/\` folder",
    "Create a log file in the \`logs\` folder with the instruction name, date and time of creation in the name. The log should contain the names of the summarized files, total number of lines read, and the name of the generated output file"
  ],
  "instruction_create": [
    "If it doesn't exist, create a file in 'instructa/context/instructions/' called 'custom_instructions.md' (use 'default_instructions.md' as a base)",
    "Ask the user to provide the instructions they want to add to the 'custom_instructions.md' file in JSON list format and show an example of how the list should be formatted, based on the content of the 'default_instructions.md' file (use 'help' as an example)",
    "Validate if the received instructions don't have the same identifier as the instructions contained in 'default_instructions.md' and in 'custom_instructions.md'",
    "If they don't, add them to the instruction list. If an instruction with the same name already exists, inform the user that the instruction already exists and ask them to choose another name",
    "Create a log file in the 'logs' folder with the instruction name, date and time of creation in the name. The log should contain the received instructions and the ones that were added"
  ],
  "instruction_delete": [
    "Check if the file 'instructa/context/instructions/custom_instructions.md' exists. If it doesn't, inform the user that there are no custom instructions to be deleted",
    "Ask the user for the name of the custom instruction they want to delete",
    "Check if the informed instruction is present in the 'custom_instructions.md' file. If it's not, inform the user that the instruction was not found",
    "Remove the instruction from the file, preserving the markdown structure and ensuring that no other instruction is affected",
    "Create a log file in the 'logs' folder with the instruction name, date and time of creation in the name. The log should contain the name of the deleted instruction, the removed content, date and time of execution"
  ],
  "instruction_edit": [
    "Check if the file 'instructa/context/instructions/custom_instructions.md' exists. If it doesn't, inform the user that there are no custom instructions to be edited",
    "Ask the user for the name of the custom instruction they want to edit",
    "Check if the instruction exists in the 'custom_instructions.md' file. If it's not, inform the user that the instruction was not found",
    "Show the current content of the instruction and ask the user for the new version in the same format used (organized and objective markdown text)",
    "Replace the instruction content with the new content provided, keeping the rest of the file intact",
    "Create a log file in the 'logs' folder with the instruction name, date and time of creation in the name. The log should contain the name of the edited instruction, the previous content, the new content, date and time of execution"
  ],
  "help": [
    "Explain what the Instructa tool is for and how to use it",
    "List the available instructions and ask if the user wants to know about any of them",
    "If they want to know about one or more, explain about the instructions"
  ]
}
\`\`\``,
  
  readmeContent: `# Instructa Framework

Framework based on POD (Prompt-Oriented Development) for instruction automation.

## Directory Structure

- \`context/\`: Contains processed .md files ready for use as context
- \`src/\`: Contains raw data and configuration files
  - \`data/\`: Raw files (PDFs, texts, spreadsheets, etc)
  - \`config/\`: .md files with custom instructions
  - \`backup/\`: Backups of context and other files
- \`logs/\`: Log files
- \`context/instructions/\`: Instructions triggered by keywords

## Usage

To execute an instruction, use the format:
\`instructa [key-phrase]\`

Example: \`instructa help\`
`,
  
  contextConfigContent: '# Custom instructions for creating context files',
  
  installationSuccess: 'Instructa has been successfully installed! To make Instructa work, you must include the generated \'instructa/context\' folder in the context of the LLM used by your AI-integrated IDE.',
  installationError: 'Error during installation:',
  startingInstallation: 'Starting Instructa installation...',
  directoryCreated: 'Directory created:',
  installationFileMoved: 'Installation file moved successfully',
  errorMovingInstallationFile: 'Error moving installation file:',
  directoryStructureCreated: 'Directory structure created successfully!'
}; 