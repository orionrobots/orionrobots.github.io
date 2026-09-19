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

## Python preferences

- Use uv to manage virtual environments with `uv run python <script>.py` to run scripts
- Use ruff to keep python code tidy

## Agent Memory

Long-term agent memory for this repo lives in the central OrionRobots memory repo, **not** inside this repo:

`/home/danny/ai/orionrobots_memories` (PARA structure — see its `README.md` and `MEMORY.md`)

- Durable reference for this repo (site structure, image handling, local validation, perf tooling): `20-areas/orionrobots-github-io-repo.md`
- Do not recreate a local `.agents/` memory store here — write session notes, decisions, and reference material into the central repo's PARA folders instead (`10-projects/` for active work, `20-areas/` for standing reference, `40-archive/` for completed work).
