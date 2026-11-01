const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const url = pathToFileURL(path.join(__dirname, "..", "index.html")).href;
const screenshots = process.env.SCREENSHOT_DIR;
if (screenshots) fs.mkdirSync(screenshots, { recursive: true });
const settle = page => page.waitForTimeout(450);
async function screenshot(page, name) {
  if (screenshots) await page.screenshot({ path: path.join(screenshots, `${name}.png`) });
}
async function open(browser, width, height) {
  const page = await browser.newPage({ viewport: { width, height }, isMobile: width <= 768, hasTouch: width <= 768 });
  page.errors = [];
  page.on("pageerror", error => page.errors.push(error.message));
  await page.goto(url);
  await page.waitForFunction(() => document.querySelectorAll(".overview-person").length === 231);
  await page.evaluate(() => document.fonts.ready);
  await settle(page);
  return page;
}

async function checkViewports(browser) {
  for (const [name, width, height, fits] of [
    ["full-hd", 1920, 1080, true], ["full-hd-window", 1920, 900, true], ["qhd", 2560, 1440, true], ["4k", 3840, 2160, true],
    ["laptop", 1440, 900, false], ["phone", 390, 844, false], ["small-phone", 320, 667, false]
  ]) {
    const page = await open(browser, width, height);
    await page.locator("#btn-view-overview").click();
    await settle(page);
    const metrics = await page.evaluate(() => {
      const container = document.getElementById("overview-container");
      const bounds = container.getBoundingClientRect();
      const buttons = [...container.querySelectorAll(".overview-person")];
      const within = rect => rect.top >= bounds.top - 1 && rect.bottom <= bounds.bottom + 1
        && rect.left >= bounds.left - 1 && rect.right <= bounds.right + 1;
      const header = document.querySelector(".app-header").getBoundingClientRect();
      const toolbar = document.querySelector(".view-toolbar").getBoundingClientRect();
      return {
        count: buttons.length,
        unique: new Set(buttons.map(button => button.dataset.nodeId)).size,
        visible: buttons.filter(button => within(button.getBoundingClientRect())).length,
        clipped: buttons.filter(button => button.scrollWidth > button.clientWidth + 1).length,
        overflow: document.documentElement.scrollWidth > innerWidth,
        overlaps: header.bottom > toolbar.top + 1,
        minHeight: Math.min(...buttons.map(button => button.getBoundingClientRect().height)),
        minFont: Math.min(...buttons.map(button => parseFloat(getComputedStyle(button).fontSize))),
        status: document.getElementById("view-status").textContent
      };
    });
    assert.equal(metrics.count, 231, name);
    assert.equal(metrics.unique, 231, name);
    assert.equal(metrics.clipped, 0, name);
    assert.equal(metrics.overflow, false, name);
    assert.equal(metrics.overlaps, false, name);
    if (fits) {
      assert.equal(metrics.visible, 231, name);
      assert.match(metrics.status, /Đang hiển thị toàn bộ/, name);
      assert.ok(metrics.minFont >= 11, name);
    }
    if (width <= 768) {
      assert.ok(metrics.minHeight >= 44, name);
      assert.ok(metrics.minFont >= 14, name);
    }
    assert.deepEqual(page.errors, [], name);
    await screenshot(page, name);
    await page.close();
    console.log(`PASS ${name}: ${metrics.visible}/231 in viewport, no clipping or header overlap`);
  }
}

async function search(page, query, name) {
  await page.locator("#search-input").fill(query);
  await page.locator(".search-item-name").filter({ hasText: name }).click();
  await settle(page);
}
async function clearSearch(page) {
  await page.locator("#btn-close-sidebar").click();
  await page.locator("#clear-search-btn").click();
}
async function treeFits(page) {
  assert.ok(await page.evaluate(() => {
    const container = document.getElementById("tree-container").getBoundingClientRect();
    const tree = document.querySelector(".zoomable-canvas").getBoundingClientRect();
    return tree.left >= container.left - 1 && tree.right <= container.right + 1
      && tree.top >= container.top - 1 && tree.bottom <= container.bottom + 1;
  }), "diagram bounds must fit the available canvas");
}

async function checkInteractions(browser) {
  const page = await open(browser, 1920, 1080);
  await page.locator("#btn-view-overview").click();
  await page.selectOption("#branch-select", "gen2_nguyen_v_ngo");
  assert.equal(await page.locator(".overview-person").count(), 26);
  await search(page, "Nguyễn Thị Tĩn Lớn", /Nguyễn Thị Tĩn Lớn$/);
  assert.equal(await page.locator("#branch-select").inputValue(), "gen2_nguyen_van_luong");
  assert.match(await page.locator("#spouse-name").textContent(), /Kép Hoàn/);
  await clearSearch(page);
  await search(page, "Nguyễn Thị Tính", /^Nguyễn Hữu Dương & Nguyễn Thị Tính$/);
  await page.locator("#compare-search-input").fill("Nguyễn Văn Gụ");
  await page.locator("#compare-dropdown-list .select-option").click();
  assert.equal(await page.locator(".compare-badge").textContent(), "Cô");
  await page.locator("#btn-close-sidebar").click();
  await page.locator("#clear-search-btn").click();
  await page.selectOption("#branch-select", "gen2_cai_con");
  await page.locator("#btn-view-tree").click();
  await settle(page);
  assert.equal(await page.locator("g.node-group").count(), 6);
  await page.locator("#btn-tree-expand").click();
  await settle(page);
  assert.equal(await page.locator("g.node-group").count(), 20);
  await treeFits(page);
  await page.locator("#btn-rotate-tree").click();
  await settle(page);
  await treeFits(page);
  await screenshot(page, "diagram");
  await page.locator("g.node-group[data-node-id='gen2_cai_con'] .node-toggle-btn").click();
  await settle(page);
  assert.equal(await page.locator("g.node-group").count(), 2);
  await search(page, "Nguyễn Thị Tiếp Con", /^Nguyễn Thị Tiếp Con$/);
  assert.equal(await page.locator("g.node-group[data-node-id='gen4_nguyen_thi_tiep_con']").count(), 1);
  assert.match(await page.locator("#sidebar-name").textContent(), /Nguyễn Thị Tiếp Con/);
  await clearSearch(page);
  await page.locator("#btn-zoom-in").click();
  await settle(page);
  const zoomBefore = await page.locator("#zoom-level").textContent();
  await page.locator("#btn-zoom-out").click();
  await settle(page);
  assert.notEqual(await page.locator("#zoom-level").textContent(), zoomBefore);
  await page.locator("#btn-zoom-fit").click();
  await settle(page);
  await treeFits(page);
  await page.locator("#btn-view-overview").click();
  await page.selectOption("#branch-select", "all");
  await page.locator("#btn-view-tree").click();
  await settle(page);
  await page.locator("#btn-tree-expand").click();
  await settle(page);
  assert.equal(await page.locator("g.node-group").count(), 231);
  await treeFits(page);
  await page.locator("#btn-view-overview").click();
  await page.locator("#btn-fullscreen").click();
  await settle(page);
  assert.equal(await page.evaluate(() => Boolean(document.fullscreenElement)), true);
  await page.locator("#btn-fullscreen").click();
  await page.locator("#btn-theme-toggle").click();
  await settle(page);
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await screenshot(page, "dark");
  await page.reload();
  await settle(page);
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator("#btn-view-overview").click();
  await page.locator("#btn-theme-toggle").click();
  await settle(page);
  await page.selectOption("#branch-select", "gen2_nguyen_van_tu");
  await page.locator(".overview-person[data-node-id='gen4_nguyen_van_luan']").click();
  await settle(page);
  assert.match(await page.locator("#sidebar-name").textContent(), /Nguyễn Văn Luân/);
  await screenshot(page, "phone-details");
  await page.locator("#details-sidebar").evaluate(element => { element.scrollTop = element.scrollHeight; });
  const closeBounds = await page.locator("#btn-close-sidebar").boundingBox();
  assert.ok(closeBounds.y >= 0 && closeBounds.y + closeBounds.height <= 844);
  await page.locator("#btn-close-sidebar").click();
  await search(page, "Nguyễn Văn Thìn", /^Nguyễn Văn Thìn$/);
  assert.equal(await page.locator("#branch-select").inputValue(), "gen2_nguyen_van_luong");
  await clearSearch(page);
  await page.locator("#btn-view-tree").click();
  assert.ok(await page.locator("#btn-rotate-tree").isVisible());
  assert.ok(await page.locator("#btn-zoom-fit").isVisible());
  await page.locator("#btn-rotate-tree").click();
  await page.locator("#btn-zoom-fit").click();
  await settle(page);
  await treeFits(page);
  await page.locator("#btn-view-overview").click();
  await page.selectOption("#branch-select", "all");
  assert.equal(await page.locator(".overview-person").count(), 231);
  assert.deepEqual(page.errors, []);
  await page.close();
  console.log("PASS interactions: branch filters, search, relationships, collapsed ancestors, zoom, rotation, fullscreen, themes and mobile details");
}

async function checkTreeDefault(browser) {
  for (const [width, height] of [[1920, 1080], [390, 844]]) {
    const page = await open(browser, width, height);
    assert.equal(await page.locator("body").getAttribute("data-view"), "tree");
    assert.equal(await page.locator("g.node-group").count(), 7);
    assert.equal(await page.locator("path.link").count(), 6);
    assert.equal(await page.locator("g.generation-guide").count(), 2);
    assert.equal(await page.locator("#btn-view-tree").getAttribute("aria-pressed"), "true");
    const zoom = await page.evaluate(() => d3.zoomTransform(document.querySelector("#tree-container svg")).k);
    assert.ok(zoom >= 0.85, "initial names must remain readable");
    await screenshot(page, width > 768 ? "tree-desktop" : "tree-phone");
    const branch = page.locator("g.node-group[data-node-id='gen2_cai_con']");
    await branch.focus();
    await page.keyboard.press("ArrowDown");
    await settle(page);
    assert.equal(await page.locator("g.node-group").count(), 11);
    await branch.focus();
    await page.keyboard.press("ArrowUp");
    await settle(page);
    assert.equal(await page.locator("g.node-group").count(), 7);
    await page.locator("#btn-tree-expand").click();
    await settle(page);
    assert.equal(await page.locator("g.node-group").count(), 231);
    assert.equal(await page.locator("path.link").count(), 230);
    assert.equal(await page.locator("g.generation-guide").count(), 5);
    if (width > 768) {
      await page.locator("#btn-tree-collapse").click();
      await settle(page);
      assert.equal(await page.locator("g.node-group").count(), 7);
    }
    await page.locator("#search-input").fill("Nguyễn Văn Thìn");
    await page.locator(".search-item-name").filter({ hasText: /^Nguyễn Văn Thìn$/ }).click();
    await page.locator("#btn-show-on-tree").click();
    await settle(page);
    assert.equal(await page.locator("#details-sidebar").getAttribute("aria-hidden"), "true");
    assert.equal(await page.locator("g.node-group[data-node-id='gen3_nguyen_van_thin']").count(), 1);
    assert.deepEqual(page.errors, []);
    await page.close();
  }
  console.log("PASS default tree: 6 connected branches, readable names, keyboard expansion, all 231 entries and search-to-tree navigation");
}

async function checkTouch(browser) {
  const page = await open(browser, 390, 844);
  const ancestor = await page.locator("g.node-group[data-node-id='root_ancestor'] .node-rect").boundingBox();
  await page.touchscreen.tap(ancestor.x + 30, ancestor.y + 20);
  assert.equal(await page.locator("#details-sidebar").getAttribute("aria-hidden"), "false");
  const close = await page.locator("#btn-close-sidebar").boundingBox();
  await page.touchscreen.tap(close.x + 22, close.y + 22);
  await page.selectOption("#branch-select", "gen2_cai_con");
  await page.locator("#btn-view-tree").click();
  await settle(page);
  const before = await page.locator("#zoom-level").textContent();
  const canvas = await page.locator("#tree-container").boundingBox();
  const centerX = canvas.x + canvas.width / 2;
  const centerY = canvas.y + canvas.height / 2;
  const client = await page.context().newCDPSession(page);
  const points = distance => [
    { x: centerX - distance, y: centerY, id: 1 },
    { x: centerX + distance, y: centerY, id: 2 }
  ];
  await client.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: points(25) });
  await client.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: points(60) });
  await client.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await settle(page);
  assert.notEqual(await page.locator("#zoom-level").textContent(), before);
  assert.deepEqual(page.errors, []);
  await page.close();
  console.log("PASS touch: tap opens details, persistent close button works, two-finger pinch changes diagram zoom");
}

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined, headless: true });
  try {
    await checkTreeDefault(browser);
    await checkViewports(browser);
    await checkInteractions(browser);
    await checkTouch(browser);
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
