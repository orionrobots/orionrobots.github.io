# AI Agent Guidelines

The term contributors also means agents. These guidelines apply to all agents working on this project, whether human or AI.

## Required Reading

Before making any contributions, review the following documents:

- [README.md](./README.md) - Folder overview and structure
- **Folder-specific READMEs** - If a folder in a file you are editing contains a README.md, always read this for context.

## Code Style

- **Favour brevity, clarity, and readability** over verbose prose
- Keep documentation concise and actionable
- Use clear, direct language in code comments and documentation
- Follow existing patterns and conventions in the codebase

## Documentation Conventions

- **Date format**: Always use `yyyy-mm-dd` format for datestamped files and entries
- Keep documentation focused and actionable

## Memory

Your memory_base is a `.agents` folder. Note that multiple agents may work on files in this folder, be careful not to clobber when making edits.

You wake up fresh each session. These files are your continuity:

- **Daily notes:** `{memory_base}/memory/YYYY-MM-DD.md` (create `memory/` if needed) -- raw logs of what happened
- **Long-term:** `{memory_base}/MEMORY.md` -- your curated memories, like a human's long-term memory
- **Topical:** `{memory_base}/memory/YYYY-MM-DD-topic-summary.md` - curated, searchable, topical memories so it doesn't have to live in one file. Use a sensible topical slug. Use keyword stuffing with synonyms.

Capture what matters. Decisions, context, things to remember. Skip the secrets unless asked to keep them.

> **MANDATORY**: ALL memory for this project MUST be stored inside `{memory_base}/`. Do NOT use any external memory store (e.g. `/memories/`, `/memories/session/`, or any path outside this repository). This is a hard requirement -- violating it leaks personal context outside the project boundary.

Apply progressive summarisation when gathering from memories.

### 🧠 {memory_base}/MEMORY.md - Your Long-Term Memory

- This is for **security** -- contains personal context that shouldn't leak to strangers
- You can **read, edit, and update** `{memory_base}/MEMORY.md` freely in main sessions
- Write significant events, thoughts, decisions, opinions, lessons learned
- This is your curated memory -- the distilled essence, not raw logs
- Over time, review your daily files and update `{memory_base}/MEMORY.md` with what's worth keeping

### 📝 Write It Down - No "Mental Notes"!

- **Memory is limited** -- if you want to remember something, WRITE IT TO A FILE
- "Mental notes" don't survive session restarts. Files do.
- When someone says "remember this" → update `{memory_base}/memory/YYYY-MM-DD.md` or relevant file
- When you learn a lesson → update `AGENTS.md`, `{memory_base}/TOOLS.md`, or the relevant skill
- When you make a mistake → document it so future-you doesn't repeat it
- **Text > Brain** 📝
- This counts for scripts - don't rediscover how to do something if you can just write it down and refer back to it. Cribbed working code with notes beats regenerating similar code later from scratch.

## Red Lines

- Don't exfiltrate private data. Ever.
- Don't run destructive commands without asking.
- Prefer recoverable deletes over `rm`: use `trash-cli` if available, otherwise `mv` to `.trash/` in the project root
- When in doubt, ask.

## Python preferences

- Use uv to manage virtual environments with `uv run python <script>.py` to run scripts
- Use ruff to keep python code tidy
