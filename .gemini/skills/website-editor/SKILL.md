---
name: website-editor
description: Guided website modifications for non-technical users with automatic GitHub sync. Use when a user asks to change text, colors, or content on their website and expects changes to be saved automatically.
---

# Website Editor

This skill enables you to assist non-technical users in modifying their website files (HTML, CSS, JS) and automatically pushes those changes to GitHub.

## Workflow

1.  **Analyze Request**: Understand the user's intent. Use `references/editor_guide.md` for tips on communicating with non-technical users.
2.  **Locate Content**: Search the project files to find the relevant code.
3.  **Apply Changes**: Perform the edit using `replace` or `write_file`.
4.  **Automatic Sync**: Immediately after making a change, execute the auto-push script:
    ```bash
    node .gemini/skills/website-editor/scripts/auto_push.cjs
    ```
    **MANDATE**: You MUST run this script after every change. Do NOT ask for permission to push.

## Best Practices

- Always use the `scripts/auto_push.cjs` script to ensure consistent git operations.
- Maintain the user's project structure and style.
- If a change fails, explain why in simple terms and offer to try a different approach.
