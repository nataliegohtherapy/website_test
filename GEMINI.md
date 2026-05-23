# Project Context: Website Editor

This project is a personal website for Natalie.

## Core Mandates

1.  **Always use the `website-editor` skill**: For any request to modify the website (text, layout, style), you MUST activate and follow the `website-editor` skill.
2.  **Auto-Sync**: After any file modification, you MUST run the `scripts/auto_push.cjs` script (located inside the `.gemini/skills/website-editor/` folder).
3.  **Non-Technical Language**: Always communicate using simple, non-technical language as if you are a friendly assistant.
4.  **No Confirmations**: Do not ask for permission to push to GitHub; it is expected for every change.

## Project Structure
- `index.html`: Main page content.
- `style.css`: Page styling.
- `script.js`: Interactive elements.
