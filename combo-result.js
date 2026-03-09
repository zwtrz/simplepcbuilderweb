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

const singlePickMarkup = (title, pick) => {
  if (!pick) {
    return "";
  }

  return `
    <section class="result-card">
      <h3>${escapeHtml(title)}</h3>
      <p><strong>${escapeHtml(pick.model)}</strong></p>
      <p>${escapeHtml(pick.description)}</p>
    </section>
  `;
};

const gpuTripletMarkup = (picks) => {
  if (!picks || !picks.length) {
    return "";
  }

  const cards = picks
    .map(
      (pick) => `
        <article class="gpu-pick-card">
          <h4>${escapeHtml(pick.vendor)}</h4>
          <p><strong>${escapeHtml(pick.model)}</strong></p>
          <p>${escapeHtml(pick.description)}</p>
        </article>
      `
    )
    .join("");

  return `
    <section class="result-card result-card-wide">
      <h3>GPU Picks (One Per Vendor)</h3>
      <div class="gpu-pick-grid">${cards}</div>
    </section>
  `;
};

const sourceListMarkup = (sources) =>
  sources
    .map(
      (source) =>
        `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer noopener">${escapeHtml(source.label)}</a></li>`
    )
    .join("");

const referencesDropdownMarkup = (benchmarkSources, communitySources) => {
  const benchmarkList = benchmarkSources?.length
    ? `
      <div class="reference-group">
        <h4>Benchmark References</h4>
        <ul>${sourceListMarkup(benchmarkSources)}</ul>
      </div>
    `
    : "";

  const communityList = communitySources?.length
    ? `
      <div class="reference-group">
        <h4>Community / Forum References</h4>
        <ul>${sourceListMarkup(communitySources)}</ul>
      </div>
    `
    : "";

  if (!benchmarkList && !communityList) {
    return "";
  }

  return `
    <section class="result-card result-card-wide">
      <details class="reference-dropdown">
        <summary>References</summary>
        ${benchmarkList}
        ${communityList}
      </details>
    </section>
  `;
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

      <section class="result-card result-card-wide">
        <h3>Selected Part Profile</h3>
        ${listMarkup(result.selectedDetails)}
      </section>

      <div class="result-grid">
        ${singlePickMarkup("Recommended CPU", result.cpuRecommendation)}
        ${singlePickMarkup("Recommended Motherboard", result.motherboardRecommendation)}
        ${gpuTripletMarkup(result.gpuRecommendations)}
        ${referencesDropdownMarkup(result.benchmarkSources, result.communitySources)}
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
