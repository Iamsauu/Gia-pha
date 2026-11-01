# Viewing the Family Tree

## Overview

**Tổng quan** is the default view. It displays all 231 records, grouped by the generation-two branch and generation-three family. Generation-four parents appear above their generation-five children. Branch colors and labels preserve context when a branch spans several columns. Click any name to open its details.

On desktop, the overview measures the available width and height and chooses columns, spacing, and type size that fit the content. Full HD (including a 1920 × 900 browser window), QHD (2560 × 1440), and 4K (3840 × 2160) were verified to show all records without scrolling. A monitor's physical diagonal cannot determine its browser viewport; browser zoom and operating-system scaling can reduce available space. Smaller viewports retain readable text and allow scrolling.

On phones, families form a single scrolling column with 44-pixel touch targets. Use the branch selector or search to jump to a family. Generation-two branch buttons can be swiped horizontally. Details open in a scrollable bottom sheet with a persistent close button.

## Diagram

**Sơ đồ** retains the connected tree, with compact cards and wrapped names. Filter a branch for a closer view. The toolbar provides zoom, orientation, and fit controls on both desktop and mobile; dragging and pinch gestures also work. Searching expands collapsed ancestors and switches branches when needed. The full-screen button is available on desktop browsers that support it.

## Verification

Run the dependency-free data tests with `node --test tests/family-data.test.js`.

The browser regression script requires Playwright and a Chromium browser. With Playwright available to Node, run:

```sh
node tests/layout.browser.cjs
```

Set `CHROME_PATH` to an installed Chrome executable if Playwright's browser is unavailable. If Playwright is supplied by a shared runtime, set `NODE_PATH` to that runtime's `node_modules`. Set `SCREENSHOT_DIR` optionally to save visual checks.

The script checks all-entry visibility and clipping at monitor sizes, readable touch targets and header spacing at phone sizes, branch filtering, cross-branch search, relationship comparison, collapsed-node search, orientation, zoom/fit, fullscreen, theme persistence, the mobile details sheet, and native tap/pinch events in touch emulation.
