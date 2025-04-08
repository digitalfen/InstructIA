# Default Instructions

InstructIA comes with a set of default instructions (keyword triggers) designed to streamline common tasks. Use them by running `instructia <keyword>`:

!!! info "Understanding Instruction Logic"
    The exact sequence of actions performed by each default instruction is defined by natural language prompts stored within the `instructia/context/instructions/` and `instructia/context/actions/` directories, specifically in the subfolder for your chosen language (e.g., `en-US/`). To understand precisely how an instruction works, you can read the corresponding prompt files.

## Context Management

-   **`instructia context_create-backup`**: Creates a timestamped backup of the entire `instructia/context/` directory (excluding the `backups/` folder itself) within `instructia/context/backups/`.
-   **`instructia context_load-backup`**: Lists available backups and prompts the user to select one to restore. It replaces the current `instructia/context/` (excluding `backups/`) with the contents of the chosen backup.
-   **`instructia context_update`**: (Functionality depends on specific action prompts) Typically used to update context elements based on external sources or predefined configurations.
-   **`instructia context_reset`**: Resets the `instructia/context/` by deleting user-added instructions, actions, and potentially other context data, reverting to the default state provided during installation.
-   **`instructia context_summarize`**: (Functionality depends on specific action prompts) Generally designed to analyze context files (like instructions or documents) within `instructia/context/` and generate a summary, often using an AI model.

## Instruction Management

-   **`instructia instruction_create`**: Guides the user through creating a new custom keyword instruction. See the section below for details.
-   **`instructia instruction_delete`**: Prompts the user to select an existing custom instruction to delete from `instructia/context/instructions/`.
-   **`instructia instruction_edit`**: Prompts the user to select an existing custom instruction within `instructia/context/instructions/` to edit its associated action prompts.
-   **`instructia help`**: Provides assistance on how to use the tool, lists available instructions, and offers guidance. 