# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Vietnamese family-tree viewer built with plain HTML, CSS, JavaScript, and D3 v7.

- `index.html`: page structure, toolbar, sidebar, and CDN dependencies.
- `style.css` and `layout.css`: themes, tree cards, overview layout, and mobile styling.
- `app.js`: embedded `familyData`, the `FamilyTreeVisualizer` class, and UI event handlers; `overview.js`: grouped family overview.
- `family_tree.json`: standalone copy of the genealogy data.
- `.github/workflows/deploy.yml`: publishes the repository root to GitHub Pages on pushes to `main` or manual dispatch.

`tests/` contains data and layout checks; `docs/` explains source references and viewing modes. Fonts, icons, and D3 load from external services.

## Build, Test, and Development Commands

No dependency installation or build step is required.

- `python3 -m http.server 8000 --bind 127.0.0.1`: serve the repository locally; open `http://127.0.0.1:8000`.
- Open `index.html` directly for a quick preview; embedded data supports `file://` use. Internet access is needed for CDN resources.
- `node --check app.js`: check JavaScript syntax when Node.js is available.
- `node --test tests/family-data.test.js`: validate genealogy data, PDF parent connections, and relationship logic.
- `python3 -m json.tool family_tree.json > /dev/null`: validate JSON syntax.
- `git diff --check`: catch whitespace errors before committing.

## Coding Style & Naming Conventions

Use two-space indentation and match nearby formatting. JavaScript uses semicolons, `const`/`let`, camelCase methods and variables, and PascalCase classes. Use kebab-case for HTML IDs and CSS classes. Reuse CSS custom properties for colors, spacing, and theme behavior. No formatter or linter is configured.

Preserve Vietnamese text and diacritics. Keep stable genealogy IDs such as `gen2_nguyen_van_luong`, and update both data copies together; the viewer reads embedded `familyData`, not the JSON file.

## Testing Guidelines

Tests use Node's built-in runner; no coverage threshold is configured. Run the data tests and syntax checks above, then manually check rendering, search, node expansion, sidebar details, relationship comparison, zoom/pan, orientation changes, and theme persistence. Check desktop and narrow mobile layouts, and inspect the browser console for errors.

Run `node tests/layout.browser.cjs` with Playwright available for viewport and interaction checks; see `docs/layout.md` for setup.

## Commit & Pull Request Guidelines

Follow the existing short, imperative commit subjects: `Add GitHub Pages deployment workflow` or `Reduce level spacing between generations`. Keep changes focused.

PRs should explain the change, link relevant issues, and list validation performed. Include screenshots for visual changes. Review genealogy edits carefully and avoid committing secrets or unintended personal information: deployed static files are publicly accessible.
