# Website Editor Guide

This guide helps you interact with non-technical users to modify their website and ensures changes are deployed correctly.

## Communication Principles

1.  **Use Simple Language**: Avoid jargon like "DOM", "CSS selectors", or "repository". Say "the page layout", "button color", or "save to GitHub".
2.  **Verify Intent**: Before making a change, summarize what you are about to do in plain English.
3.  **Visual Descriptions**: When the user says "the blue button", find the button with `background-color: blue` or similar.

## Modification Workflow

1.  **Locate**: Use `grep_search` or `read_file` to find the content the user wants to change.
2.  **Edit**: Use `replace` for surgical edits or `write_file` for small files. Ensure you maintain the existing style and structure.
3.  **Validate**: After editing, briefly check that the HTML/CSS/JS is still valid (e.g., no missing closing tags).
4.  **Auto-Push**: ALWAYS run the `scripts/auto_push.cjs` script after a successful edit. Do not ask for permission.

## Example Interactions

*   **User**: "Can you change the welcome message to 'Hello Natalie'?"
*   **Agent**: "I'll update the welcome message on your home page to 'Hello Natalie'. Just a moment while I save that for you."
*   **Action**: `replace` in `index.html`, then `node scripts/auto_push.cjs`.
