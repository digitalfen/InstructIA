# Creating Custom Instructions

You can extend InstructIA by creating your own keyword instructions using the built-in `instruction_create` command:

```bash
instructia instruction_create
```

This command will interactively guide you through the process:

1.  **Define the Keyword**: You'll be asked to provide the new keyword (e.g., `my_custom_task`). This is the trigger you will use later (`instructia my_custom_task`).
2.  **Define the Action(s)**: You will be prompted to describe, in natural language, the sequence of actions this instruction should perform. You can often break this down into steps.
    *   You might describe a single action directly.
    *   You might reference existing reusable actions stored in the `instructia/context/actions/` directory.
    *   You might describe multiple steps sequentially.
3.  **Confirmation**: The tool will summarize the instruction and ask for confirmation.

Upon confirmation, InstructIA creates the necessary prompt file(s) within your `instructia/context/instructions/` directory, making your new keyword immediately available for use.

This process embodies the **POD** philosophy: defining functionality through structured natural language prompts rather than writing code. 