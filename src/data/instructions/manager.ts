import path from 'path';
import fs from 'fs';

export async function createInstructions() {
  const cursorPath = process.env.CURSOR_PATH || path.join(process.env.HOME || process.env.USERPROFILE || '', '.cursor');
  const baseInstructionsPath = path.join(cursorPath, 'context', 'instructions', 'base-instructions.mdc');
  const defaultInstructionsPath = path.join(cursorPath, 'context', 'instructions', 'default-instructions.mdc');
  const customInstructionsPath = path.join(cursorPath, 'context', 'instructions', 'custom-instructions.mdc');

  // Read content from default-instructions.json
  const defaultInstructionsJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'instructions', 'default-instructions.json'), 'utf-8'));

  // Create base-instructions.mdc content
  const baseInstructionsContent = `# Base Instructions for InstructIA

This file contains the base instructions for InstructIA, including default and custom instructions.

## Default Instructions

${Object.entries(defaultInstructionsJson)
  .map(([key, value]) => `### ${key}\n\nWhen the user types "instructia ${key}", execute the following steps:\n\n${(value as string[]).join('\n\n')}`)
  .join('\n\n')}

## Custom Instructions

Custom instructions will be added here when created.
`;

  // Create default-instructions.mdc content
  const defaultInstructionsContent = `# Default Instructions for InstructIA

This file contains the default instructions for InstructIA.

${Object.entries(defaultInstructionsJson)
  .map(([key, value]) => `## ${key}\n\nWhen the user types "instructia ${key}", execute the following steps:\n\n${(value as string[]).join('\n\n')}`)
  .join('\n\n')}
`;

  // Create custom-instructions.mdc content
  const customInstructionsContent = `# Custom Instructions for InstructIA

This file contains custom instructions for InstructIA.

## Available Instructions

No custom instructions have been created yet.
`;

  // Create files
  fs.writeFileSync(baseInstructionsPath, baseInstructionsContent);
  fs.writeFileSync(defaultInstructionsPath, defaultInstructionsContent);
  fs.writeFileSync(customInstructionsPath, customInstructionsContent);

  console.log('InstructIA instruction files created successfully!');
} 