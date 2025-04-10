# Installation & Initialization

Getting started with InstructIA involves two main steps: installing the tool globally and then initializing a context environment in your desired project directory.

## Step 1: Global Installation

First, install the `instructia` command-line tool globally using npm:

```bash
npm install -g instructia
```

This makes the `instructia` command available anywhere on your system.

## Step 2: Initializing the Context Environment

Navigate to the directory where you want to manage your AI context (e.g., your project folder) and run the `init` command:

```bash
# Initialize for Cursor IDE
instructia init cursor

# Or initialize with a specific language (e.g., Portuguese)
instructia init cursor --language=pt-BR
```

**What `instructia init cursor` Does:**

Running the `instructia init cursor` command performs the crucial setup within your current directory:

1.  **Creates Project Directory**: Creates the root directory named `instructia/`.
2.  **Creates Subdirectories**: Sets up the core folder structure within `instructia/`, including:
    - `context/`
    - `context/instructions/`
    - `context/data/`
    - `context/backup/`
3.  **Sets Up Configuration**: Initializes default configuration files.
4.  **Copies Default Instructions**: Populates `instructia/context/instructions/` with the default set of instructions.
5.  **Sets Language**: Configures the system to use the specified language (or the default, en-US).

## Prerequisites

Ensure you have the following before proceeding:

*   **Node.js & npm**: Required for the global installation (`npm install -g`). You need [Node.js](https://nodejs.org/) installed.
*   **Cursor IDE**: Currently, only Cursor IDE is supported. Support for more IDEs is planned for the future.

## Verification

After global installation, you can verify the tool is available by checking its version:

```bash
instructia version
``` 