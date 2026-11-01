// A compact, readable alternative to squeezing every leaf into one tree row.
class FamilyOverview {
  constructor(container, visualizer) {
    this.container = container;
    this.visualizer = visualizer;
    this.branchId = "all";
    this.isActive = true;
    this.colors = ["#10b981", "#38bdf8", "#a78bfa", "#fbbf24", "#fb7185", "#2dd4bf"];
    this.render();
    this.resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(this.resizeFrame);
      this.resizeFrame = requestAnimationFrame(() => this.fit());
    });
    this.resizeObserver.observe(container);
    document.fonts.ready.then(() => this.fit());
  }

  static count(node) {
    return 1 + (node.children || []).reduce((sum, child) => sum + FamilyOverview.count(child), 0);
  }

  static primary(node) {
    return node[node.bloodline]?.name || node.name;
  }

  personButton(node, className = "", showGeneration = false) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `overview-person ${className}`;
    button.dataset.nodeId = node.id;
    button.title = `Đời ${node.generation} · ${node.name}`;
    if (showGeneration) {
      const generation = document.createElement("span");
      generation.className = "overview-generation";
      generation.textContent = `Đ${node.generation}`;
      button.append(generation);
    }
    const name = document.createElement("span");
    name.className = "overview-name";
    name.textContent = FamilyOverview.primary(node);
    button.append(name);
    const spouse = node[node.bloodline === "wife" ? "husband" : "wife"];
    if (spouse) {
      const partner = document.createElement("span");
      partner.className = "overview-spouse";
      partner.textContent = ` & ${spouse.name}`;
      button.append(partner);
    }
    button.addEventListener("click", () => this.visualizer.selectNode(node.id));
    return button;
  }

  familyGroup(node) {
    const family = document.createElement("div");
    family.className = "overview-family";
    family.append(this.personButton(node, "family-parent", true));
    if (node.children?.length) {
      const children = document.createElement("div");
      children.className = "overview-children";
      children.setAttribute("aria-label", `Con của ${FamilyOverview.primary(node)}, đời ${node.generation + 1}`);
      for (const child of node.children) {
        children.append(child.children?.length ? this.familyGroup(child) : this.personButton(child, "family-child"));
      }
      family.append(children);
    }
    return family;
  }

  render() {
    const root = this.visualizer.rawData;
    const branches = root.children.filter(branch => this.branchId === "all" || branch.id === this.branchId);
    this.container.replaceChildren();
    const sheet = document.createElement("div");
    sheet.className = "overview-sheet";
    const intro = document.createElement("div");
    intro.className = "overview-intro";
    const rootLabel = document.createElement("span");
    rootLabel.className = "overview-kicker";
    rootLabel.textContent = "Đời 1 · Cụ tổ";
    const ancestor = document.createElement("div");
    ancestor.append(rootLabel, this.personButton(root, "root-person"));
    const stats = document.createElement("p");
    stats.className = "overview-stats";
    const count = this.branchId === "all" ? FamilyOverview.count(root) : 1 + FamilyOverview.count(branches[0]);
    stats.textContent = `${count} mục gia phả · 5 đời`;
    intro.append(ancestor, stats);
    const branchStrip = document.createElement("div");
    branchStrip.className = "overview-branches";
    branchStrip.setAttribute("aria-label", "Các nhánh đời 2");
    const grid = document.createElement("div");
    grid.className = "overview-grid";
    for (const branch of branches) {
      const color = this.colors[root.children.indexOf(branch) % this.colors.length];
      const branchButton = this.personButton(branch, "branch-person", true);
      branchButton.style.setProperty("--branch-color", color);
      branchStrip.append(branchButton);
      for (const child of branch.children || []) {
        const card = document.createElement("article");
        card.className = "overview-card";
        card.style.setProperty("--branch-color", color);
        const breadcrumb = document.createElement("p");
        breadcrumb.className = "overview-breadcrumb";
        breadcrumb.textContent = `Nhánh ${FamilyOverview.primary(branch)}`;
        const heading = document.createElement("h2");
        heading.append(this.personButton(child, "family-heading", true));
        card.append(breadcrumb, heading);
        for (const grandchild of child.children || []) card.append(this.familyGroup(grandchild));
        grid.append(card);
      }
    }
    sheet.append(intro, branchStrip, grid);
    this.container.append(sheet);
    this.updateHighlights();
    this.fit();
    this.container.scrollTop = 0;
  }

  fit() {
    if (!this.isActive || this.container.hidden || !this.container.clientWidth) return;
    const sheet = this.container.querySelector(".overview-sheet");
    const grid = this.container.querySelector(".overview-grid");
    const width = this.container.clientWidth - 32;
    const mobile = window.innerWidth <= 768;
    let fitted = false;
    if (mobile) {
      sheet.classList.remove("compact");
      sheet.style.setProperty("--overview-font", "16px");
      grid.style.setProperty("--overview-columns", "1");
    } else {
      const maxColumns = Math.min(7, Math.max(2, Math.floor(width / 260)));
      const maxFont = Math.min(24, Math.max(14, width / 130));
      const availableHeight = this.container.clientHeight - 28;
      // Prefer readable type, then try more columns before reducing font size.
      outer: for (let font = maxFont; font >= 12; font -= 0.5) {
        sheet.style.setProperty("--overview-font", `${font}px`);
        for (const compact of [false, true]) {
          sheet.classList.toggle("compact", compact);
          for (let columns = Math.max(2, maxColumns - 2); columns <= maxColumns; columns++) {
            grid.style.setProperty("--overview-columns", columns);
            if (sheet.offsetHeight <= availableHeight) {
              fitted = true;
              break outer;
            }
          }
        }
      }
    }
    const count = this.container.querySelectorAll(".overview-person").length;
    document.getElementById("view-status").textContent = `${count} mục · ${mobile || !fitted ? "Cuộn để xem các gia đình" : "Đang hiển thị toàn bộ"}`;
  }

  setBranch(branchId) {
    this.branchId = branchId;
    this.render();
  }

  updateHighlights() {
    for (const button of this.container.querySelectorAll(".overview-person")) {
      const node = this.visualizer.nodesMap[button.dataset.nodeId];
      button.classList.toggle("selected", node.id === this.visualizer.activeNodeId);
      button.classList.toggle("search-match", this.visualizer.nodeMatchesSearch(node));
      button.classList.toggle("compare-match", node.id === this.visualizer.compareTargetId);
      button.setAttribute("aria-pressed", String(node.id === this.visualizer.activeNodeId));
    }
  }

  select(nodeId) {
    let button = this.container.querySelector(`[data-node-id="${nodeId}"]`);
    if (!button) {
      const branch = this.visualizer.getLineagePath(nodeId)[1];
      if (branch) {
        this.visualizer.setBranch(branch.id);
        document.getElementById("branch-select").value = branch.id;
      }
      button = this.container.querySelector(`[data-node-id="${nodeId}"]`);
    }
    this.updateHighlights();
    if (button) requestAnimationFrame(() => button.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }));
  }
}
