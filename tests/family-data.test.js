const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const data = JSON.parse(fs.readFileSync(path.join(root, "family_tree.json"), "utf8"));
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const runtime = vm.runInNewContext(`${app}\n;({ familyData, FamilyTreeVisualizer });`, {
  document: { addEventListener() {} }
});
const entries = [];
function visit(node, parent = null) {
  entries.push({ node, parent });
  (node.children || []).forEach(child => visit(child, node));
}
visit(data);
const source = (generation, box) => `1:${generation}.${String(box).padStart(2, "0")}`;
const fromBox = (generation, box) => entries.filter(entry =>
  entry.node.generation === generation && entry.node.source === source(generation, box));

test("embedded and standalone data agree", () => {
  assert.deepEqual(JSON.parse(JSON.stringify(runtime.familyData)), data);
});

test("all entries have unique IDs, valid lineage, dates, and PDF references", () => {
  assert.equal(entries.length, 231);
  assert.equal(new Set(entries.map(({ node }) => node.id)).size, entries.length);
  const counts = {};
  for (const { node, parent } of entries) {
    counts[node.generation] = (counts[node.generation] || 0) + 1;
    assert.ok(node[node.bloodline]?.name, node.id);
    assert.match(node.source, /^1:[1-5]\.\d{2}$/);
    if (parent) assert.equal(node.generation, parent.generation + 1, node.id);
    for (const member of [node.husband, node.wife]) {
      if (!member?.anniversary) continue;
      const [day, month] = member.anniversary.split("-").map(Number);
      assert.ok(day >= 1 && day <= 30 && month >= 1 && month <= 12, node.id);
    }
  }
  assert.deepEqual(counts, { 1: 1, 2: 6, 3: 20, 4: 56, 5: 148 });
});

test("every printed PDF box is represented", () => {
  for (const [generation, count] of [[1, 1], [2, 6], [3, 20], [4, 56], [5, 44]]) {
    for (let box = 1; box <= count; box++) assert.ok(fromBox(generation, box).length, source(generation, box));
  }
  assert.equal(new Set(entries.map(({ node }) => node.source)).size, 127);
});

test("parent branches follow the PDF connectors, including all sibling groups", () => {
  const expectParents = (generation, parents) => {
    parents.forEach((parentBox, index) => {
      for (const { node, parent } of fromBox(generation, index + 1)) {
        assert.equal(parent.source, source(generation - 1, parentBox), node.id);
      }
    });
  };
  expectParents(2, [1, 1, 1, 1, 1, 1]);
  expectParents(3, [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 5, 6, 6, 6, 6]);
  expectParents(4, [
    1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4,
    5, 5, 5, 5, 5, 5, 5, 7, 7, 9, 9, 9, 9, 9, 11, 11, 11, 11, 11, 11,
    12, 12, 12, 12, 12, 13, 14, 15, 15, 16, 16, 16, 16, 16, 18, 18, 19, 19
  ]);
  expectParents(5, [
    1, 2, 3, 4, 5, 6, 7, 9, 11, 15, 16, 17, 18, 21, 22, 23, 24, 26,
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44,
    45, 46, 47, 48, 49, 50, 51, 52, 53, 54
  ]);
  const inlineChildren = entries.filter(({ node }) => node.generation === 5 && node.source === source(4, 14));
  assert.equal(inlineChildren.length, 4);
  for (const { parent } of inlineChildren) assert.equal(parent.source, source(4, 14));
});

test("ancestor corrections and separate anniversary dates are retained", () => {
  assert.equal(data.husband.name, "Nguyễn Công Tự");
  assert.equal(data.husband.alias, "Hiệu Phúc Ngôn");
  assert.equal(data.children[0].wife.name, "Lê Thị Tân");
  const hao = fromBox(3, 2)[0].node;
  assert.equal(hao.husband.anniversary, "23-8");
  assert.equal(hao.wife.anniversary, "28-12");
  assert.equal(fromBox(3, 6)[0].node.husband.name, "Nguyễn Văn Thìn");
  assert.match(fromBox(4, 9)[0].node.wife.notes, /4-10/);
  assert.match(fromBox(4, 17)[0].node.wife.notes, /26-12/);
});

test("relationship names and female seniority use the recorded bloodline", () => {
  const visualizer = Object.create(runtime.FamilyTreeVisualizer.prototype);
  visualizer.nodesMap = {};
  visualizer.buildMap(data);
  const hierarchy = node => ({ data: node, children: (node.children || []).map(hierarchy) });
  const tree = hierarchy(data);
  const descendants = node => [node, ...node.children.flatMap(descendants)];
  tree.descendants = () => descendants(tree);
  visualizer.rootNode = tree;
  const woman = fromBox(4, 29)[0].node;
  const nephew = fromBox(5, 21)[0].node;
  const relationship = visualizer.getRelationship(woman.id, nephew.id);
  assert.equal(relationship.nameA, "Nguyễn Thị Tính");
  assert.equal(relationship.rel, "Cô");
  assert.equal(visualizer.getLineagePath("gen4_trum_cach")[2].id, "gen3_nguyen_thi_luong");
});
