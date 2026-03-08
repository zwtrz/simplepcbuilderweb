const blocks = document.querySelectorAll(".selector-block");
const pageType = document.body.dataset.pageType;
const pageCatalog = window.catalogData?.[pageType] || {};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const navigateWithFade = (targetUrl) => {
  if (!targetUrl || document.body.classList.contains("page-leave")) {
    return;
  }

  document.body.classList.add("page-leave");
  window.setTimeout(() => {
    window.location.href = targetUrl;
  }, 180);
};

const createOptionMarkup = (option) => {
  return `
    <button class="option-card option-btn" type="button" data-option-id="${escapeHtml(option.id)}">
      <h3>${escapeHtml(option.label)}</h3>
      <p>${escapeHtml(option.subtitle)}</p>
    </button>
  `;
};

const createPartsMarkup = (option) => {
  const sectionsMarkup = option.sections
    .map((section, sectionIndex) => {
      const itemsMarkup = section.items
        .map((item, itemIndex) => {
          const itemLabel = escapeHtml(item);
          const itemId = `${option.id}-${sectionIndex}-${itemIndex}`;

          return `
            <li>
              <button class="part-item-btn" type="button" data-item-id="${escapeHtml(itemId)}" data-item-label="${itemLabel}" aria-pressed="false">
                ${itemLabel}
              </button>
            </li>
          `;
        })
        .join("");

      return `
        <section class="parts-group">
          <h4>${escapeHtml(section.title)}</h4>
          <ul>${itemsMarkup}</ul>
        </section>
      `;
    })
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
      <section class="selection-box" aria-live="polite">
        <p>Placeholder Selection</p>
        <div class="selection-value">None selected</div>
      </section>
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

    optionGrid.innerHTML = options.map(createOptionMarkup).join("");

    const optionButtons = optionGrid.querySelectorAll(".option-btn");

    const activateOption = (optionId) => {
      optionButtons.forEach((button) => {
        const isActive = button.dataset.optionId === optionId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      const selectedOption = options.find((option) => option.id === optionId);
      if (!selectedOption) {
        return;
      }

      partsOutput.innerHTML = createPartsMarkup(selectedOption);

      const partItemButtons = partsOutput.querySelectorAll(".part-item-btn");
      const selectionValue = partsOutput.querySelector(".selection-value");

      partItemButtons.forEach((itemButton) => {
        itemButton.addEventListener("click", () => {
          const wasActive = itemButton.classList.contains("active");

          partItemButtons.forEach((button) => {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
          });

          if (wasActive) {
            if (selectionValue) {
              selectionValue.textContent = "None selected";
            }
            return;
          }

          itemButton.classList.add("active");
          itemButton.setAttribute("aria-pressed", "true");

          if (selectionValue) {
            selectionValue.textContent = itemButton.textContent.trim();
          }
        });
      });

      partsOutput.classList.remove("active");
      window.requestAnimationFrame(() => {
        partsOutput.classList.add("active");
      });
    };

    optionButtons.forEach((button) => {
      button.addEventListener("click", () => activateOption(button.dataset.optionId));
    });

    const firstOptionId = options[0]?.id;
    if (firstOptionId) {
      activateOption(firstOptionId);
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

document.querySelectorAll(".back-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navigateWithFade(link.getAttribute("href"));
  });
});

