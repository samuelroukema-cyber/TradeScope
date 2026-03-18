// app.js — TradeScope rendering logic

function getStatusClass(status) {
  const map = {
    expanding:   'status-expanding',
    contracting: 'status-contracting',
    mixed:       'status-mixed',
    stable:      'status-stable'
  };
  return map[status] || 'status-stable';
}

// Build the country dropdown, filtered by region
function buildCountryDropdown(selectedRegion) {
  const countrySelect = document.getElementById('country-select');
  const previousValue = countrySelect.value;

  const filtered = Object.entries(COUNTRIES).filter(([key, d]) => {
    return selectedRegion === 'all' || d.region === selectedRegion;
  });

  filtered.sort((a, b) => a[1].name.localeCompare(b[1].name));

  countrySelect.innerHTML = filtered.map(([key, d]) =>
    `<option value="${key}">${d.flag} ${d.name}</option>`
  ).join('');

  const keys = filtered.map(([k]) => k);
  if (keys.includes(previousValue)) {
    countrySelect.value = previousValue;
  }

  renderCountry(countrySelect.value);
}

function renderCountry(key) {
  const d = COUNTRIES[key];
  if (!d) return;

  const maxShare = Math.max(...d.topPartners.map(p => p.share));
  const maxBar   = Math.max(...d.gdpHistory);
  const months   = ['M','A','M','J','J','A','S','O','N','D','J','F'];

  const partnersHTML = d.topPartners.map(p => `
    <div class="trade-row">
      <span class="trade-partner">${p.name}</span>
      <span class="trade-share">${p.share}%</span>
    </div>
    <div class="bar-wrap">
      <div class="bar-fill" style="width:${Math.round(p.share / maxShare * 100)}%"></div>
    </div>
  `).join('');

  const exportsHTML = d.topExports.map((e, i) => `
    <div class="trade-row">
      <span class="trade-partner">${e}</span>
      <span class="trade-share">#${i + 1}</span>
    </div>
  `).join('');

  const sparkHTML = d.gdpHistory.map((v, i) => {
    const h = Math.round(v / maxBar * 100);
    const isLast = i === d.gdpHistory.length - 1;
    return `<div class="spark-bar ${isLast ? 'highlight' : ''}" style="height:${h}%" title="${months[i]}: ${v}"></div>`;
  }).join('');

  document.getElementById('country-display').innerHTML = `
    <div class="country-header">
      <span class="flag">${d.flag}</span>
      <div>
        <div class="country-name">${d.name}</div>
        <div class="country-region">${d.region}</div>
      </div>
      <span class="status-badge ${getStatusClass(d.status)}">${d.statusLabel}</span>
    </div>

    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-label">GDP (Nominal)</div>
        <div class="metric-value">${d.gdp}</div>
        <div class="metric-delta ${d.gdpPos ? 'delta-pos' : 'delta-neg'}">${d.gdpDelta} YoY</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Inflation</div>
        <div class="metric-value">${d.inflation}</div>
        <div class="metric-delta ${d.inflationPos ? 'delta-pos' : 'delta-neg'}">${d.inflationDelta} YoY</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Unemployment</div>
        <div class="metric-value">${d.unemployment}</div>
        <div class="metric-delta ${d.unemploymentPos ? 'delta-pos' : 'delta-neg'}">${d.unemploymentDelta} YoY</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Trade Balance</div>
        <div class="metric-value small">${d.tradeBalance}</div>
        <div class="metric-delta ${d.tradeBalancePos ? 'delta-pos' : 'delta-neg'}">${d.tradeBalanceDelta}</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Current Account</div>
        <div class="metric-value small">${d.currentAccount} GDP</div>
        <div class="metric-delta ${d.caPos ? 'delta-pos' : 'delta-neg'}">${d.caPos ? '▲ Surplus' : '▼ Deficit'}</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">FDI Inflows</div>
        <div class="metric-value small">${d.fdi}</div>
        <div class="metric-delta delta-neu">Annual</div>
      </div>
    </div>

    <div class="two-col">
      <div class="info-block">
        <div class="section-title">Top Trade Partners</div>
        ${partnersHTML}
      </div>
      <div class="info-block">
        <div class="section-title">Key Export Categories</div>
        ${exportsHTML}
        <div class="section-title spaced">GDP Growth Trend (12 mo)</div>
        <div class="spark-row">${sparkHTML}</div>
      </div>
    </div>

    <div class="info-block">
      <div class="section-title">Economic Summary</div>
      <p class="summary-text">${d.summary}</p>
    </div>
  `;
}

// ─── Init ─────────────────────────────────────────────
const regionSelect  = document.getElementById('region-select');
const countrySelect = document.getElementById('country-select');

buildCountryDropdown('all');

regionSelect.addEventListener('change', () => {
  buildCountryDropdown(regionSelect.value);
});

countrySelect.addEventListener('change', () => {
  renderCountry(countrySelect.value);
});
