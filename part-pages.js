const blocks = document.querySelectorAll(".selector-block");
const pageType = document.body.dataset.pageType;
const pageCatalog = window.catalogData?.[pageType] || {};
const COMBO_SEED_KEY = "spcb-combo-seed";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const startComboFlow = (payload) => {
  const seed = {
    type: pageType,
    ...payload,
    updatedAt: Date.now()
  };

  window.localStorage.setItem(COMBO_SEED_KEY, JSON.stringify(seed));
  window.location.href = "combo.html";
};

const expandRawItem = (rawItem) => {
  const item = String(rawItem || "").trim();
  if (!item) {
    return [];
  }

  if (item.includes(":")) {
    const [prefixPart, ...restParts] = item.split(":");
    const prefix = prefixPart.trim();
    const rest = restParts.join(":").trim();

    const splitTokens = rest
      .split(",")
      .flatMap((token) => token.split("/"))
      .map((token) => token.replace(/\bclass\b/gi, "").trim())
      .filter(Boolean);

    return splitTokens.map((token) => `${prefix} ${token}`.replace(/\s+/g, " ").trim());
  }

  if (item.includes(" / ") && /\d/.test(item)) {
    return item
      .split("/")
      .map((token) => token.trim())
      .filter(Boolean);
  }

  return [item];
};

const createOptionMarkup = (option) => {
  return `
    <button class="option-card option-btn" type="button" data-option-id="${escapeHtml(option.id)}">
      <h3>${escapeHtml(option.label)}</h3>
      <p>${escapeHtml(option.subtitle)}</p>
    </button>
  `;
};

const createSectionItemsMarkup = (section, option, sectionIndex, interactiveItems) => {
  const expandedItems = (section.items || []).flatMap(expandRawItem);

  if (!interactiveItems) {
    const textItems = expandedItems.map((item) => `<li class="part-item-text">${escapeHtml(item)}</li>`).join("");
    return `<ul>${textItems}</ul>`;
  }

  const itemButtons = expandedItems
    .map((item, itemIndex) => {
      const itemLabel = escapeHtml(item);
      const itemId = `${option.id}-${sectionIndex}-${itemIndex}`;

      return `
        <li>
          <button class="part-item-btn" type="button" data-item-id="${escapeHtml(itemId)}" aria-pressed="false">
            ${itemLabel}
          </button>
        </li>
      `;
    })
    .join("");

  return `<ul>${itemButtons}</ul>`;
};

const createPartsMarkup = (option, interactiveItems) => {
  const sectionsMarkup = option.sections
    .map(
      (section, sectionIndex) => `
        <section class="parts-group">
          <h4>${escapeHtml(section.title)}</h4>
          ${createSectionItemsMarkup(section, option, sectionIndex, interactiveItems)}
        </section>
      `
    )
    .join("");

  const sourcesMarkup = option.sources?.length
    ? `
      <div class="source-list">
        <p>Reference Sources</p>
        <ul>
          ${option.sources
            .map(
              (source) =>
                `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer noopener">${escapeHtml(source.label)}</a></li>`
            )
            .join("")}
        </ul>
      </div>
    `
    : "";

  return `
    <article class="parts-sheet">
      <header class="parts-head">
        <h3>${escapeHtml(option.label)} Parts List</h3>
        <p>${escapeHtml(option.subtitle)}</p>
      </header>
      <div class="parts-groups">${sectionsMarkup}</div>
      ${sourcesMarkup}
    </article>
  `;
};

blocks.forEach((block) => {
  const vendorButtons = block.querySelectorAll(".vendor-btn");
  const panels = block.querySelectorAll(".panel");

  const setVendorState = (vendor) => {
    vendorButtons.forEach((btn) => {
      const isActive = btn.dataset.vendor === vendor;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === vendor;
      panel.classList.toggle("active", isActive);
      panel.setAttribute("aria-hidden", String(!isActive));
    });
  };

  const renderVendorPanel = (vendor) => {
    const vendorData = pageCatalog[vendor];
    const activePanel = block.querySelector(`.panel[data-panel="${vendor}"]`);

    if (!vendorData || !activePanel) {
      return;
    }

    const optionGrid = activePanel.querySelector(".option-grid");
    const partsOutput = activePanel.querySelector(".parts-output");
    const options = vendorData.options || [];
    const interactiveItems = pageType !== "motherboard";

    optionGrid.innerHTML = options.map(createOptionMarkup).join("");
    const optionButtons = optionGrid.querySelectorAll(".option-btn");

    const activateOption = (optionId, openCombo) => {
      optionButtons.forEach((button) => {
        const isActive = button.dataset.optionId === optionId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      const selectedOption = options.find((option) => option.id === optionId);
      if (!selectedOption) {
        return;
      }

      if (!interactiveItems && openCombo) {
        startComboFlow({
          label: selectedOption.label,
          vendor,
          optionId,
          optionLabel: selectedOption.label
        });
        return;
      }

      partsOutput.innerHTML = createPartsMarkup(selectedOption, interactiveItems);

      if (!interactiveItems) {
        return;
      }

      const partItemButtons = partsOutput.querySelectorAll(".part-item-btn");
      partItemButtons.forEach((itemButton) => {
        itemButton.addEventListener("click", () => {
          startComboFlow({
            label: itemButton.textContent.trim(),
            vendor,
            optionId,
            optionLabel: selectedOption.label
          });
        });
      });

      partsOutput.classList.remove("active");
      window.requestAnimationFrame(() => {
        partsOutput.classList.add("active");
      });
    };

    optionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const openCombo = pageType === "motherboard";
        activateOption(button.dataset.optionId, openCombo);
      });
    });

    const firstOptionId = options[0]?.id;
    if (firstOptionId) {
      activateOption(firstOptionId, false);
    } else {
      partsOutput.innerHTML = "";
    }
  };

  vendorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const vendor = button.dataset.vendor;
      setVendorState(vendor);
      renderVendorPanel(vendor);
    });
  });

  const firstVendor = vendorButtons[0]?.dataset.vendor;
  if (firstVendor) {
    setVendorState(firstVendor);
    renderVendorPanel(firstVendor);
  }
});