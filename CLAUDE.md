# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal profile page for hayata-yamamoto built with Vite + React + TypeScript, deployed via GitHub Pages.
SNS links and company links are displayed in separate sections, with OGP card previews for links that have OGP metadata.

## Architecture

- `src/App.tsx` — Main profile page component (avatar, name, sectioned link list, OGP cards)
- `src/data/links.ts` — Profile info and link data with optional OGP metadata (edit here to add/remove links)
- `src/index.css` — Global styles (background, layout)
- `src/App.css` — Component styles (avatar, link buttons, OGP cards)
- `public/` — Static assets (profile photo)
- `index.html` — Entry point with GA4 analytics snippet
- `.github/workflows/deploy.yml` — GitHub Actions workflow for Pages deployment

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server
bun run build        # Type-check and build for production
bun run preview      # Preview production build locally
```

## Deployment

Push to `master` triggers GitHub Actions → builds with Vite → deploys to GitHub Pages.
Base path is `/hayata-yamamoto/` (configured in `vite.config.ts`).
