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
# Initialize with default language (en-US)
instructia init

# Or initialize with a specific language (e.g., Portuguese)
instructia init --language=pt-BR
```

**What `instructia init` Does:**

Running the `instructia init` command performs the crucial setup within your current directory:

1.  **Creates Project Directory**: Creates the root directory named `instructia/`.
2.  **Creates Subdirectories**: Sets up the core folder structure within `instructia/`, including the `context/` folder and its subdirectories (`actions`, `instructions`, `config`, etc.). For a detailed breakdown, see the [Directory Structure](directory_structure.md) page.
3.  **Sets Up Configuration**: Initializes default configuration files within `instructia/context/config/`.
4.  **Copies Default Instructions**: Populates `instructia/context/instructions/` and `instructia/context/actions/` with the default set of instructions and actions for the chosen language.
5.  **Sets Language**: Configures the system to use the specified language (or the default, en-US).

## Prerequisites

Ensure you have the following before proceeding:

*   **Node.js & npm**: Required for the global installation (`npm install -g`). You need [Node.js](https://nodejs.org/) installed.
*   **LLM Integration**: Required for *using* InstructIA effectively. Access to an LLM and a way to provide the `instructia/context/` folder as context.

## Verification

After global installation, you can verify the tool is available by checking its version:

```bash
instructia --version
``` 