# AGENTS.md — Antigravity Agent Guidelines for VGES-9-Websites

## Workspace Identity & Scope
- **Workspace:** `C:\Users\samph\OneDrive\Υπολογιστής\VGES-9-Websites`
- **GitHub Repository:** `https://github.com/efthymiossamartzis-creator/VGES-9-Websites`
- **Branch:** `main`
- **Mission:** Autonomous development, asset management, QA testing, commit, push, and deployment of 9 independent demo websites for VGES Online Websites.

## Golden Rules for Autonomous Agents
1. **Strict Folder Isolation:** Each of the 9 projects lives strictly within its own directory (`01-Aurelio-Barbershop` through `09-Pedia-Learning-Center`). Code, assets, CSS, JS, and HTML must never cross boundaries.
2. **Untouchable External Directories:** Never modify, move, or write to `remix-of-online`, `CONCEPT PROJECTS`, or any live production repositories or directories.
3. **No Fake Legal / Commercial Claims:** Never invent real client names, real patient/lawyer credentials, fictional reviews with real identities, or fake operational booking backends without explicit requirements.
4. **Preserve Completed Work:** Existing completed sites (`01-Aurelio-Barbershop/site` and `02-Mason-Elia/site`) must be preserved and not overwritten.
5. **Security & Secrets:** Never commit `.env`, API tokens, private keys, or passwords. Never ask the user to paste secrets into chat.
6. **Push-to-Deploy Architecture:** Deployments are triggered automatically via GitHub Actions in `.github/workflows/deploy-pages.yml` targeting Cloudflare Pages projects.
7. **Verification First:** Never declare a site deployed or operational without real verification (local asset checks, HTTP 200 responses, or verified Cloudflare URLs).
8. **Continuation Resilience:** All knowledge, brief specifications, and execution status are persisted on disk so future sessions can resume instantly without external archives.
