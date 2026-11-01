# Viewing the Family Tree

## Connected tree

**Cây gia phả** is the default view. It opens with the common ancestor connected to all six generation-two branches. Branches have distinct colors, generation guides, full names, and descendant counts. Deeper generations start folded so names remain readable.

Click **+** to open one generation, **−** to fold it, or use the branch selector to explore a family. A focused branch opens through generation three on desktop. Keyboard users can expand with Arrow Down/Right, collapse with Arrow Up/Left, and open details with Enter. **Mở hết** reveals all descendants; **Thu gọn** restores the branch's starting view.

Desktop starts with a top-down tree. Phones start with a left-to-right tree and readable zoom; drag to reach surrounding branches or pinch to zoom. **Vừa màn hình** explicitly fits every displayed node. The **Xem trên cây gia phả** action in details opens and centers the person's lineage. Searching also opens collapsed ancestors automatically.

## Overview

**Toàn bộ gia phả** displays all 231 records, grouped by the generation-two branch and generation-three family. Generation-four parents appear above their generation-five children. Branch colors and labels preserve context when a branch spans several columns. Click any name to open its details.

On desktop, the overview measures the available width and height and chooses columns, spacing, and type size that fit the content. Full HD (including a 1920 × 900 browser window), QHD (2560 × 1440), and 4K (3840 × 2160) were verified to show all records without scrolling. A monitor's physical diagonal cannot determine its browser viewport; browser zoom and operating-system scaling can reduce available space. Smaller viewports retain readable text and allow scrolling.

On phones, families form a single scrolling column with 44-pixel touch targets. Use the branch selector or search to jump to a family. Generation-two branch buttons can be swiped horizontally. Details open in a scrollable bottom sheet with a persistent close button.

## Diagram

The connected tree uses compact cards with wrapped names. Filter a branch for a closer view. The toolbar provides zoom on desktop, orientation and fit controls on both desktop and mobile; dragging and pinch gestures also work. The full-screen button is available on desktop browsers that support it.

## Verification

Run the dependency-free data tests with `node --test tests/family-data.test.js`.

The browser regression script requires Playwright and a Chromium browser. With Playwright available to Node, run:

```sh
node tests/layout.browser.cjs
```

Set `CHROME_PATH` to an installed Chrome executable if Playwright's browser is unavailable. If Playwright is supplied by a shared runtime, set `NODE_PATH` to that runtime's `node_modules`. Set `SCREENSHOT_DIR` optionally to save visual checks.

The script checks the default connected tree, keyboard expansion, all 231 tree nodes after expanding, search-to-tree navigation, all-entry visibility in the overview, phone spacing and touch targets, filters, relationship comparison, orientation, zoom/fit, fullscreen, themes, details, and native tap/pinch events in touch emulation.
