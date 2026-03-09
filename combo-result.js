const COMBO_SEED_KEY = "spcb-combo-seed";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const readSeed = () => {
  try {
    const raw = window.localStorage.getItem(COMBO_SEED_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const listMarkup = (items) => {
  if (!items || !items.length) {
    return "<p>No suggestion available.</p>";
  }

  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
};

const renderComboResult = () => {
  const host = document.getElementById("combo-result");
  if (!host) {
    return;
  }

  const seed = readSeed();
  const result = window.comboEngine?.buildComboFromSeed(seed);

  if (!seed || !result) {
    host.innerHTML = `
      <article class="combo-result-shell">
        <h2>No Part Selected</h2>
        <p>Select one CPU, GPU, or motherboard first. The combo page will then be built automatically.</p>
        <a class="inline-link" href="index.html">Go to Start</a>
      </article>
    `;
    return;
  }

  const seedLabel = `${seed.type.toUpperCase()} - ${seed.label}`;

  host.innerHTML = `
    <article class="combo-result-shell">
      <header class="combo-result-head">
        <h2>Anchor Selection</h2>
        <p>${escapeHtml(seedLabel)}</p>
      </header>

      <section class="result-card">
        <h3>Selected Part Profile</h3>
        ${listMarkup(result.selectedDetails)}
      </section>

      <div class="result-grid">
        <section class="result-card">
          <h3>Recommended CPU Side</h3>
          ${listMarkup(result.cpuSuggestions)}
        </section>

        <section class="result-card">
          <h3>Recommended Motherboard Side</h3>
          ${listMarkup(result.motherboardSuggestions)}
        </section>

        <section class="result-card">
          <h3>Recommended GPU Side</h3>
          ${listMarkup(result.gpuSuggestions)}
        </section>

        <section class="result-card">
          <h3>Important Notes</h3>
          ${listMarkup(result.notes)}
        </section>
      </div>

      <div class="result-actions">
        <a class="inline-link" href="cpu.html">Pick CPU Instead</a>
        <a class="inline-link" href="gpu.html">Pick GPU Instead</a>
        <a class="inline-link" href="motherboard.html">Pick Motherboard Instead</a>
      </div>
    </article>
  `;
};

renderComboResult();