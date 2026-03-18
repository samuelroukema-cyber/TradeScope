// data.js — country economic data
// Update these figures periodically from World Bank / IMF sources

const COUNTRIES = {
  usa: {
    name: "United States", flag: "🇺🇸", region: "North America",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$27.4T", gdpDelta: "+2.5%", gdpPos: true,
    inflation: "3.1%", inflationDelta: "-0.4%", inflationPos: true,
    unemployment: "3.7%", unemploymentDelta: "-0.1%", unemploymentPos: true,
    tradeBalance: "-$773B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-2.9%", caPos: false,
    fdi: "+$285B",
    topExports: ["Machinery", "Petroleum", "Aircraft", "Pharmaceuticals"],
    topPartners: [
      { name: "Canada",  share: 17 },
      { name: "Mexico",  share: 15 },
      { name: "China",   share: 12 },
      { name: "Germany", share: 5  }
    ],
    gdpHistory: [65,62,68,70,66,72,75,73,78,80,77,82],
    summary: "The U.S. economy maintains robust expansion driven by strong consumer spending and a resilient labour market. The Federal Reserve has begun a gradual easing cycle following successful disinflation. Trade deficits remain structural, particularly with East Asian manufacturing economies."
  },

  china: {
    name: "China", flag: "🇨🇳", region: "East Asia",
    status: "mixed", statusLabel: "Mixed Signals",
    gdp: "$17.7T", gdpDelta: "+4.9%", gdpPos: true,
    inflation: "0.3%", inflationDelta: "-1.1%", inflationPos: false,
    unemployment: "5.1%", unemploymentDelta: "+0.3%", unemploymentPos: false,
    tradeBalance: "+$823B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+1.5%", caPos: true,
    fdi: "+$163B",
    topExports: ["Electronics", "Machinery", "Textiles", "Steel"],
    topPartners: [
      { name: "USA",    share: 15 },
      { name: "EU",     share: 14 },
      { name: "ASEAN",  share: 16 },
      { name: "Japan",  share: 6  }
    ],
    gdpHistory: [70,74,78,82,75,72,76,79,74,77,75,78],
    summary: "China faces deflationary pressure and a property sector correction that continues to weigh on domestic demand. Export volumes remain elevated, sustaining the trade surplus, but structural headwinds from demographic decline and geopolitical decoupling present medium-term challenges."
  },

  germany: {
    name: "Germany", flag: "🇩🇪", region: "Western Europe",
    status: "contracting", statusLabel: "Contracting",
    gdp: "$4.4T", gdpDelta: "-0.3%", gdpPos: false,
    inflation: "2.6%", inflationDelta: "-1.8%", inflationPos: true,
    unemployment: "5.8%", unemploymentDelta: "+0.7%", unemploymentPos: false,
    tradeBalance: "+$265B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+5.9%", caPos: true,
    fdi: "+$38B",
    topExports: ["Vehicles", "Machinery", "Chemicals", "Electronics"],
    topPartners: [
      { name: "USA",         share: 10 },
      { name: "France",      share: 9  },
      { name: "China",       share: 8  },
      { name: "Netherlands", share: 7  }
    ],
    gdpHistory: [75,72,68,71,73,69,65,63,61,60,59,58],
    summary: "Germany is in a technical recession driven by high energy costs, weak industrial output, and declining competitiveness in auto manufacturing. Structural reform debates around labour market flexibility and infrastructure investment are intensifying. The trade surplus persists but is narrowing."
  },

  japan: {
    name: "Japan", flag: "🇯🇵", region: "East Asia",
    status: "stable", statusLabel: "Stable",
    gdp: "$4.2T", gdpDelta: "+1.9%", gdpPos: true,
    inflation: "2.8%", inflationDelta: "+1.6%", inflationPos: false,
    unemployment: "2.4%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "-$64B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "+3.5%", caPos: true,
    fdi: "+$30B",
    topExports: ["Vehicles", "Electronics", "Machinery", "Steel"],
    topPartners: [
      { name: "USA",         share: 19 },
      { name: "China",       share: 18 },
      { name: "South Korea", share: 7  },
      { name: "Taiwan",      share: 6  }
    ],
    gdpHistory: [55,57,60,58,62,65,63,67,68,70,69,72],
    summary: "Japan is experiencing its first sustained inflation in three decades, prompting the Bank of Japan to cautiously exit ultra-loose monetary policy. A weaker yen has boosted export earnings and inbound tourism. Demographic constraints on labour supply remain the key long-term structural challenge."
  },

  brazil: {
    name: "Brazil", flag: "🇧🇷", region: "South America",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$2.1T", gdpDelta: "+2.9%", gdpPos: true,
    inflation: "4.8%", inflationDelta: "-1.2%", inflationPos: true,
    unemployment: "7.4%", unemploymentDelta: "-1.1%", unemploymentPos: true,
    tradeBalance: "+$98B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-1.9%", caPos: false,
    fdi: "+$65B",
    topExports: ["Soybeans", "Iron Ore", "Petroleum", "Sugar"],
    topPartners: [
      { name: "China",       share: 28 },
      { name: "USA",         share: 12 },
      { name: "Argentina",   share: 6  },
      { name: "Netherlands", share: 4  }
    ],
    gdpHistory: [40,45,43,48,52,50,55,58,56,60,62,65],
    summary: "Brazil's commodity-driven expansion continues, with record agricultural exports and rising oil production from pre-salt fields. Fiscal consolidation efforts under the new framework are ongoing but face political resistance. The real has stabilized following currency volatility in late 2024."
  },

  india: {
    name: "India", flag: "🇮🇳", region: "South Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$3.7T", gdpDelta: "+6.4%", gdpPos: true,
    inflation: "5.1%", inflationDelta: "-0.7%", inflationPos: true,
    unemployment: "7.9%", unemploymentDelta: "-0.4%", unemploymentPos: true,
    tradeBalance: "-$247B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-1.3%", caPos: false,
    fdi: "+$71B",
    topExports: ["Petroleum Products", "Gems", "Pharmaceuticals", "Textiles"],
    topPartners: [
      { name: "USA",        share: 18 },
      { name: "UAE",        share: 7  },
      { name: "China",      share: 6  },
      { name: "Bangladesh", share: 5  }
    ],
    gdpHistory: [50,55,58,62,60,65,70,74,76,80,83,87],
    summary: "India is the world's fastest-growing major economy, driven by manufacturing expansion, digital infrastructure investment, and a young demographic dividend. Supply-chain diversification trends are benefitting Indian electronics and pharmaceutical sectors. Energy import dependency remains a structural vulnerability."
  },

  canada: {
    name: "Canada", flag: "🇨🇦", region: "North America",
    status: "stable", statusLabel: "Stable",
    gdp: "$2.1T", gdpDelta: "+1.5%", gdpPos: true,
    inflation: "2.6%", inflationDelta: "-1.4%", inflationPos: true,
    unemployment: "6.1%", unemploymentDelta: "+0.4%", unemploymentPos: false,
    tradeBalance: "+$12B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-1.0%", caPos: false,
    fdi: "+$53B",
    topExports: ["Energy", "Vehicles", "Gold", "Lumber"],
    topPartners: [
      { name: "USA",   share: 75 },
      { name: "China", share: 5  },
      { name: "UK",    share: 3  },
      { name: "Japan", share: 2  }
    ],
    gdpHistory: [60,63,61,65,68,66,70,71,69,72,73,74],
    summary: "Canada's economy is moderating after the Bank of Canada's rate-cutting cycle began in mid-2024. Housing affordability remains a key domestic issue. Export concentration toward the U.S. market — over 75% of goods exports — creates significant exposure to U.S. trade policy shifts and tariff uncertainty."
  },

  southkorea: {
    name: "South Korea", flag: "🇰🇷", region: "East Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$1.7T", gdpDelta: "+2.3%", gdpPos: true,
    inflation: "2.2%", inflationDelta: "-0.6%", inflationPos: true,
    unemployment: "2.9%", unemploymentDelta: "-0.1%", unemploymentPos: true,
    tradeBalance: "+$45B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+3.9%", caPos: true,
    fdi: "+$19B",
    topExports: ["Semiconductors", "Vehicles", "Petrochemicals", "Ships"],
    topPartners: [
      { name: "China", share: 20 },
      { name: "USA",   share: 15 },
      { name: "Vietnam", share: 9 },
      { name: "Japan", share: 6  }
    ],
    gdpHistory: [58,62,65,68,64,70,73,71,75,77,79,82],
    summary: "South Korea's export recovery is led by semiconductors, particularly memory chips benefitting from AI-driven demand. Political uncertainty following the 2024 constitutional crisis has weighed on business investment. The economy remains highly sensitive to China's economic trajectory given deep trade linkages."
  },

  mexico: {
    name: "Mexico", flag: "🇲🇽", region: "North America",
    status: "mixed", statusLabel: "Mixed Signals",
    gdp: "$1.4T", gdpDelta: "+1.8%", gdpPos: true,
    inflation: "4.2%", inflationDelta: "-1.5%", inflationPos: true,
    unemployment: "2.7%", unemploymentDelta: "+0.2%", unemploymentPos: false,
    tradeBalance: "-$28B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-0.9%", caPos: false,
    fdi: "+$36B",
    topExports: ["Vehicles", "Electronics", "Medical Devices", "Oil"],
    topPartners: [
      { name: "USA",     share: 80 },
      { name: "Canada",  share: 3  },
      { name: "China",   share: 2  },
      { name: "Germany", share: 2  }
    ],
    gdpHistory: [45,48,50,52,55,58,60,62,61,64,65,66],
    summary: "Mexico is a major nearshoring beneficiary as North American companies diversify supply chains away from Asia. USMCA has deepened manufacturing integration with the U.S. However, rule-of-law concerns, infrastructure gaps, and energy policy uncertainty temper the nearshoring opportunity for some investors."
  },

  australia: {
    name: "Australia", flag: "🇦🇺", region: "Oceania",
    status: "stable", statusLabel: "Stable",
    gdp: "$1.7T", gdpDelta: "+1.5%", gdpPos: true,
    inflation: "3.4%", inflationDelta: "-1.2%", inflationPos: true,
    unemployment: "4.1%", unemploymentDelta: "+0.3%", unemploymentPos: false,
    tradeBalance: "+$118B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+1.3%", caPos: true,
    fdi: "+$47B",
    topExports: ["Iron Ore", "Coal", "LNG", "Gold"],
    topPartners: [
      { name: "China",       share: 32 },
      { name: "Japan",       share: 16 },
      { name: "South Korea", share: 8  },
      { name: "India",       share: 6  }
    ],
    gdpHistory: [62,65,63,67,70,72,69,73,75,74,76,77],
    summary: "Australia's resource export revenues remain elevated, though softening Chinese demand for iron ore has tightened the trade surplus. The Reserve Bank of Australia began cutting rates in early 2025. Geopolitical realignment in the Indo-Pacific is increasingly shaping Australia's trade and investment policy choices."
  },
  
  newzealand: {
    name: "New Zealand", flag: "🇳🇿", region: "Oceania",
    status: "stable", statusLabel: "Recovering",
    gdp: "$248B", gdpDelta: "+1.8%", gdpPos: true,
    inflation: "2.5%", inflationDelta: "-0.8%", inflationPos: true,
    unemployment: "5.3%", unemploymentDelta: "+1.1%", unemploymentPos: false,
    tradeBalance: "-$8B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-3.5%", caPos: false,
    fdi: "+$12B",
    topExports: ["Dairy", "Meat", "Timber", "Wool"],
    topPartners: [
      { name: "China",     share: 28 },
      { name: "Australia", share: 15 },
      { name: "USA",       share: 10 },
      { name: "Japan",     share: 6  }
    ],
    gdpHistory: [60,58,55,52,56,59,57,54,50,53,56,58],
    summary: "New Zealand is in the early stages of recovery after a sharp contraction in 2024 caused by aggressive monetary tightening. The Reserve Bank cut rates by 325 basis points since mid-2024, and lower borrowing costs are beginning to support household spending and housing activity. Agricultural exports, particularly dairy and meat, remain strong, and tourism is recovering. Trade policy uncertainty from U.S. tariffs and slowing Chinese demand present headwinds."
  },
 
  southafrica: {
    name: "South Africa", flag: "🇿🇦", region: "Southern Africa",
    status: "mixed", statusLabel: "Mixed Signals",
    gdp: "$430B", gdpDelta: "+1.1%", gdpPos: true,
    inflation: "3.3%", inflationDelta: "-1.7%", inflationPos: true,
    unemployment: "32.9%", unemploymentDelta: "+1.0%", unemploymentPos: false,
    tradeBalance: "+$6B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-0.5%", caPos: false,
    fdi: "+$9B",
    topExports: ["Gold", "Platinum", "Coal", "Iron Ore"],
    topPartners: [
      { name: "EU",    share: 20 },
      { name: "China", share: 12 },
      { name: "USA",   share: 8  },
      { name: "UK",    share: 5  }
    ],
    gdpHistory: [42,40,44,47,45,48,50,49,51,52,50,53],
    summary: "South Africa holds the highest unemployment rate among G20 economies at nearly 33%, reflecting deep structural constraints on job creation. However, 2025 marked the strongest GDP growth since 2022 at 1.1%, aided by electricity reform reducing power outages, improved port and rail efficiency, and a successful disinflation cycle. A new 3% inflation target and a credit rating upgrade signal improving institutional credibility. Fiscal consolidation and reform momentum are key to sustaining a path toward 2%+ growth."
  },
 
  france: {
    name: "France", flag: "🇫🇷", region: "Western Europe",
    status: "stable", statusLabel: "Stable",
    gdp: "$3.1T", gdpDelta: "+0.9%", gdpPos: true,
    inflation: "0.9%", inflationDelta: "-1.4%", inflationPos: true,
    unemployment: "7.7%", unemploymentDelta: "+0.2%", unemploymentPos: false,
    tradeBalance: "-$112B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-0.7%", caPos: false,
    fdi: "+$96B",
    topExports: ["Aircraft", "Pharmaceuticals", "Machinery", "Wine & Spirits"],
    topPartners: [
      { name: "Germany", share: 15 },
      { name: "USA",     share: 8  },
      { name: "Italy",   share: 7  },
      { name: "Spain",   share: 7  }
    ],
    gdpHistory: [65,62,68,70,72,69,67,65,66,68,67,68],
    summary: "France's economy grew a modest 0.9% in 2025, dragged by political uncertainty, fiscal consolidation pressure, and weak domestic investment. Strong aerospace exports — particularly Airbus deliveries — provided a meaningful offset. Inflation fell sharply to under 1%, driven by energy price declines. The fiscal deficit remains elevated at 5.5% of GDP with public debt approaching 120% of GDP, making France one of the euro area's most fiscally constrained major economies heading into 2026."
  },
 
  uk: {
    name: "United Kingdom", flag: "🇬🇧", region: "Northern Europe",
    status: "stable", statusLabel: "Stable",
    gdp: "$3.4T", gdpDelta: "+1.1%", gdpPos: true,
    inflation: "2.5%", inflationDelta: "-1.2%", inflationPos: true,
    unemployment: "4.4%", unemploymentDelta: "+0.3%", unemploymentPos: false,
    tradeBalance: "-$265B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-3.2%", caPos: false,
    fdi: "+$61B",
    topExports: ["Machinery", "Pharmaceuticals", "Financial Services", "Vehicles"],
    topPartners: [
      { name: "USA",         share: 15 },
      { name: "Germany",     share: 10 },
      { name: "France",      share: 8  },
      { name: "Netherlands", share: 6  }
    ],
    gdpHistory: [62,60,65,68,66,70,72,69,73,74,72,74],
    summary: "The UK economy is growing modestly, supported by a resilient services sector and easing inflation that has allowed the Bank of England to begin cutting rates. Post-Brexit trade friction continues to weigh on goods exports, though financial services remain a global strength. The new government's fiscal plans involve higher employer taxes to fund public services, creating near-term uncertainty for business investment. A U.S.-UK trade deal remains a key strategic priority."
  },
 
  italy: {
    name: "Italy", flag: "🇮🇹", region: "Southern Europe",
    status: "stable", statusLabel: "Stable",
    gdp: "$2.3T", gdpDelta: "+0.7%", gdpPos: true,
    inflation: "1.5%", inflationDelta: "-1.1%", inflationPos: true,
    unemployment: "6.4%", unemploymentDelta: "-0.3%", unemploymentPos: true,
    tradeBalance: "+$52B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+0.9%", caPos: true,
    fdi: "+$28B",
    topExports: ["Machinery", "Vehicles", "Pharmaceuticals", "Food & Wine"],
    topPartners: [
      { name: "Germany", share: 13 },
      { name: "France",  share: 11 },
      { name: "USA",     share: 9  },
      { name: "Spain",   share: 6  }
    ],
    gdpHistory: [55,52,58,60,62,60,58,61,62,63,62,63],
    summary: "Italy grew 0.7% in 2025 — modest but steady, outperforming Germany. The manufacturing and luxury goods sectors remain strengths, particularly in machinery and food exports. EU recovery funds (PNRR) continue to support infrastructure investment. Structural challenges persist: low productivity growth, an ageing population, and high public debt near 135% of GDP. Unemployment has fallen to its lowest in over a decade, a notable improvement for the historically weak labour market."
  },
 
  spain: {
    name: "Spain", flag: "🇪🇸", region: "Southern Europe",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$1.7T", gdpDelta: "+2.9%", gdpPos: true,
    inflation: "2.4%", inflationDelta: "-0.8%", inflationPos: true,
    unemployment: "11.4%", unemploymentDelta: "-1.1%", unemploymentPos: true,
    tradeBalance: "-$45B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "+2.1%", caPos: true,
    fdi: "+$39B",
    topExports: ["Vehicles", "Machinery", "Food & Olive Oil", "Chemicals"],
    topPartners: [
      { name: "France",   share: 15 },
      { name: "Germany",  share: 11 },
      { name: "Portugal", share: 8  },
      { name: "Italy",    share: 8  }
    ],
    gdpHistory: [50,48,54,58,60,62,64,67,69,71,72,74],
    summary: "Spain is the standout eurozone growth story, expanding at nearly 3% in 2025 — far above the EU average. Strong tourism revenues, robust domestic consumption, and a booming renewable energy sector are driving the outperformance. Unemployment, while still the highest in major Western economies at 11.4%, has fallen substantially from post-crisis highs. EU funds are catalysing green energy and digital infrastructure investment. Political fragmentation in parliament remains a risk to economic reform."
  },
 
  uae: {
    name: "UAE", flag: "🇦🇪", region: "Middle East",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$601B", gdpDelta: "+4.0%", gdpPos: true,
    inflation: "2.3%", inflationDelta: "-0.5%", inflationPos: true,
    unemployment: "2.7%", unemploymentDelta: "-0.2%", unemploymentPos: true,
    tradeBalance: "+$152B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+9.4%", caPos: true,
    fdi: "+$30B",
    topExports: ["Petroleum", "Gold", "Diamonds", "Aluminium"],
    topPartners: [
      { name: "India",        share: 14 },
      { name: "China",        share: 8  },
      { name: "Japan",        share: 6  },
      { name: "Saudi Arabia", share: 5  }
    ],
    gdpHistory: [60,55,62,68,72,75,74,77,79,80,82,84],
    summary: "The UAE continues to diversify aggressively beyond oil, with Dubai cementing its status as a global hub for finance, logistics, trade, and tourism. Non-oil GDP now accounts for over 75% of total output. The country has attracted significant capital and talent inflows through liberalised visa regimes and tax-free structures. Abu Dhabi's sovereign wealth funds are major global investors. Geopolitical positioning between East and West gives the UAE outsized diplomatic and economic influence relative to its size."
  },
 
  vietnam: {
    name: "Vietnam", flag: "🇻🇳", region: "Southeast Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$511B", gdpDelta: "+5.6%", gdpPos: true,
    inflation: "3.3%", inflationDelta: "+0.4%", inflationPos: false,
    unemployment: "2.3%", unemploymentDelta: "-0.1%", unemploymentPos: true,
    tradeBalance: "+$28B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+3.7%", caPos: true,
    fdi: "+$18B",
    topExports: ["Electronics", "Textiles", "Footwear", "Machinery"],
    topPartners: [
      { name: "USA",         share: 28 },
      { name: "China",       share: 16 },
      { name: "South Korea", share: 6  },
      { name: "Japan",       share: 6  }
    ],
    gdpHistory: [55,58,62,65,60,66,70,72,75,78,80,83],
    summary: "Vietnam is one of Asia's most dynamic manufacturing exporters, attracting massive foreign direct investment as companies diversify supply chains out of China. Samsung, Intel, and Apple suppliers have made Vietnam a critical node in global electronics production. The heavy dependence on U.S. export markets — nearly 30% of goods — creates significant tariff exposure under shifting U.S. trade policy. Domestic consumption is rising alongside wages, and infrastructure investment is accelerating to support continued industrial growth."
  },
 
  peru: {
    name: "Peru", flag: "🇵🇪", region: "South America",
    status: "stable", statusLabel: "Stable",
    gdp: "$327B", gdpDelta: "+2.8%", gdpPos: true,
    inflation: "3.1%", inflationDelta: "-1.4%", inflationPos: true,
    unemployment: "5.8%", unemploymentDelta: "-0.3%", unemploymentPos: true,
    tradeBalance: "+$12B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-1.2%", caPos: false,
    fdi: "+$8B",
    topExports: ["Copper", "Gold", "Zinc", "Fishmeal"],
    topPartners: [
      { name: "China",  share: 30 },
      { name: "USA",    share: 16 },
      { name: "Canada", share: 5  },
      { name: "Brazil", share: 4  }
    ],
    gdpHistory: [45,42,48,52,55,53,56,58,59,61,62,63],
    summary: "Peru's economy is anchored in mining — it is the world's second-largest copper and zinc producer — making it highly sensitive to commodity price cycles and Chinese industrial demand. GDP growth of 2.8% in 2025 was supported by a strong mining sector and recovering consumer spending. Political instability remains a persistent risk: Peru has seen multiple presidents in recent years, which weighs on long-term investment confidence. Infrastructure gaps and social inequality continue to constrain broader economic development."
  },
 
  argentina: {
    name: "Argentina", flag: "🇦🇷", region: "South America",
    status: "mixed", statusLabel: "Rebalancing",
    gdp: "$668B", gdpDelta: "+4.5%", gdpPos: true,
    inflation: "120%", inflationDelta: "-95%", inflationPos: true,
    unemployment: "6.9%", unemploymentDelta: "-1.2%", unemploymentPos: true,
    tradeBalance: "+$18B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+1.0%", caPos: true,
    fdi: "+$11B",
    topExports: ["Soybeans", "Corn", "Beef", "Lithium"],
    topPartners: [
      { name: "Brazil", share: 15 },
      { name: "EU",     share: 10 },
      { name: "China",  share: 9  },
      { name: "USA",    share: 8  }
    ],
    gdpHistory: [35,28,32,30,25,22,28,20,24,30,38,48],
    summary: "Argentina is undergoing a radical economic restructuring under President Milei's libertarian reform program, which achieved the first trade surplus since 2006 and dramatically slashed the fiscal deficit. Inflation, while still extreme at ~120%, has fallen sharply from a 2024 peak exceeding 200%. Oil and gas production from the Vaca Muerta shale formation and growing lithium exports are structural tailwinds. However, the social cost of austerity is significant, and long-term success depends on restoring market confidence and rebuilding foreign reserves."
  },

  chile: {
    name: "Chile", flag: "🇨🇱", region: "South America",
    status: "stable", statusLabel: "Stable",
    gdp: "$330B", gdpDelta: "+2.4%", gdpPos: true,
    inflation: "4.5%", inflationDelta: "-7.5%", inflationPos: true,
    unemployment: "8.0%", unemploymentDelta: "-0.5%", unemploymentPos: true,
    tradeBalance: "+$16B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-3.2%", caPos: false,
    fdi: "+$18B",
    topExports: ["Copper", "Lithium", "Salmon & Trout", "Fruit"],
    topPartners: [
      { name: "China",  share: 39 },
      { name: "USA",    share: 15 },
      { name: "Japan",  share: 8  },
      { name: "Brazil", share: 6  }
    ],
    gdpHistory: [58,55,60,64,62,66,68,65,63,66,68,70],
    summary: "Chile is the world's largest copper producer — accounting for roughly a quarter of global supply — and the second-largest lithium producer, positioning it centrally in global clean energy supply chains. GDP growth of 2.4% in 2025 was driven by resilient domestic demand, mining investment, and strong fruit exports. Inflation fell sharply from a 2023 peak of 12% and is converging toward the 3% central bank target. A new conservative government taking office in 2026 has signalled significant fiscal consolidation and greater private-sector involvement in the lithium industry."
  },
 
  costarica: {
    name: "Costa Rica", flag: "🇨🇷", region: "Central America",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$102B", gdpDelta: "+3.8%", gdpPos: true,
    inflation: "1.2%", inflationDelta: "-0.9%", inflationPos: true,
    unemployment: "7.8%", unemploymentDelta: "-0.6%", unemploymentPos: true,
    tradeBalance: "+$8B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-2.1%", caPos: false,
    fdi: "+$4B",
    topExports: ["Medical Devices", "Pineapples", "Bananas", "Electronics"],
    topPartners: [
      { name: "USA",    share: 38 },
      { name: "EU",     share: 18 },
      { name: "China",  share: 6  },
      { name: "Panama", share: 4  }
    ],
    gdpHistory: [48,50,53,56,54,58,61,63,65,67,69,71],
    summary: "Costa Rica is a remarkable development success story in Central America, having transformed from a banana-and-coffee economy into a high-tech medical device and services exporter. It is now the world's largest per-capita exporter of medical devices. Strong FDI from U.S. multinationals in life sciences and semiconductors underpins the export base. Inflation is among the lowest in the Americas. Fiscal consolidation has significantly reduced the debt-to-GDP ratio from dangerous levels in 2020. Tourism is a major growth driver alongside the tech sector."
  },
 
  thailand: {
    name: "Thailand", flag: "🇹🇭", region: "Southeast Asia",
    status: "stable", statusLabel: "Stable",
    gdp: "$575B", gdpDelta: "+2.6%", gdpPos: true,
    inflation: "1.4%", inflationDelta: "+0.6%", inflationPos: false,
    unemployment: "1.1%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "+$35B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+2.8%", caPos: true,
    fdi: "+$12B",
    topExports: ["Electronics", "Vehicles", "Machinery", "Rubber"],
    topPartners: [
      { name: "USA",   share: 18 },
      { name: "China", share: 14 },
      { name: "Japan", share: 10 },
      { name: "ASEAN", share: 22 }
    ],
    gdpHistory: [55,52,58,61,59,63,65,64,67,68,67,69],
    summary: "Thailand's economy is growing at a modest pace, underperforming regional peers despite strong tourism recovery and electronics exports. Structural headwinds include an ageing population, high household debt, and the automotive sector's slow transition from combustion to electric vehicles — a risk as Chinese EV makers displace traditional Japanese manufacturers in Thai factories. Tourism contributed significantly to 2025 growth. The OECD projects surpluses to persist as the current account strengthens, driven by services and goods exports."
  },
 
  turkey: {
    name: "Turkey", flag: "🇹🇷", region: "Central Asia",
    status: "mixed", statusLabel: "Rebalancing",
    gdp: "$1.1T", gdpDelta: "+3.2%", gdpPos: true,
    inflation: "42%", inflationDelta: "-28%", inflationPos: true,
    unemployment: "8.6%", unemploymentDelta: "-0.8%", unemploymentPos: true,
    tradeBalance: "-$110B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-1.8%", caPos: false,
    fdi: "+$11B",
    topExports: ["Vehicles", "Machinery", "Textiles", "Steel"],
    topPartners: [
      { name: "Germany", share: 9  },
      { name: "USA",     share: 7  },
      { name: "UK",      share: 6  },
      { name: "Iraq",    share: 5  }
    ],
    gdpHistory: [40,38,45,50,48,44,40,45,52,58,62,66],
    summary: "Turkey is in a painful but necessary macroeconomic stabilisation after years of unorthodox low-rate policy drove inflation above 80%. The return to conventional monetary policy — with interest rates raised sharply to 45% and then gradually cut as inflation fell — is working: inflation declined from over 70% in 2024 to around 42% in 2025, with the OECD projecting further decline. Growth remains positive at 3.2%, supported by manufacturing exports and tourism. The current account deficit, while still significant, is narrowing. Geopolitical positioning between NATO and Russia gives Turkey outsized strategic leverage."
  },
 
  russia: {
    name: "Russia", flag: "🇷🇺", region: "Eastern Europe",
    status: "mixed", statusLabel: "War Economy",
    gdp: "$2.1T", gdpDelta: "+2.8%", gdpPos: true,
    inflation: "9.5%", inflationDelta: "+2.1%", inflationPos: false,
    unemployment: "2.4%", unemploymentDelta: "-0.3%", unemploymentPos: true,
    tradeBalance: "+$145B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+4.0%", caPos: true,
    fdi: "-$13B", 
    topExports: ["Petroleum", "Natural Gas", "Metals", "Wheat"],
    topPartners: [
      { name: "China",  share: 33 },
      { name: "India",  share: 13 },
      { name: "Turkey", share: 7  },
      { name: "UAE",    share: 4  }
    ],
    gdpHistory: [60,58,55,62,65,60,58,52,55,60,62,64],
    summary: "Russia's economy has defied Western expectations of collapse following 2022 sanctions, largely due to redirected energy exports to China, India, and the Middle East, and a massive fiscal stimulus through war-related defence spending. However, the costs are accumulating: inflation has risen to nearly 10% as labour shortages tighten and military expenditure crowds out civilian investment. The ruble has depreciated significantly. Western sanctions have curtailed access to technology and financial markets. Long-term structural damage from capital flight, brain drain, and severed European trade ties is expected to compound over time."
  },
 
  netherlands: {
    name: "Netherlands", flag: "🇳🇱", region: "Western Europe",
    status: "stable", statusLabel: "Stable",
    gdp: "$1.1T", gdpDelta: "+1.7%", gdpPos: true,
    inflation: "2.7%", inflationDelta: "-1.1%", inflationPos: true,
    unemployment: "3.7%", unemploymentDelta: "+0.2%", unemploymentPos: false,
    tradeBalance: "+$98B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+9.7%", caPos: true,
    fdi: "+$84B",
    topExports: ["Machinery", "Petroleum Products", "Chemicals", "Food"],
    topPartners: [
      { name: "Germany", share: 24 },
      { name: "Belgium", share: 12 },
      { name: "UK",      share: 9  },
      { name: "France",  share: 8  }
    ],
    gdpHistory: [65,63,68,72,74,71,73,75,74,76,77,78],
    summary: "The Netherlands punches far above its weight as a global trade hub, hosting the Port of Rotterdam — Europe's largest — and functioning as the EU's logistics and distribution gateway. A large current account surplus reflects significant multinational corporate profits booked in the country. ASML, the world's sole producer of extreme ultraviolet lithography machines essential for advanced chip manufacturing, is a Dutch firm of exceptional global strategic importance. The economy is stable and services-oriented, though housing affordability and energy transition costs present domestic policy challenges."
  },
 
  sweden: {
    name: "Sweden", flag: "🇸🇪", region: "Northern Europe",
    status: "stable", statusLabel: "Recovering",
    gdp: "$597B", gdpDelta: "+1.8%", gdpPos: true,
    inflation: "1.8%", inflationDelta: "-3.2%", inflationPos: true,
    unemployment: "8.8%", unemploymentDelta: "+0.6%", unemploymentPos: false,
    tradeBalance: "+$22B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+6.2%", caPos: true,
    fdi: "+$28B",
    topExports: ["Machinery", "Vehicles", "Pharmaceuticals", "Paper"],
    topPartners: [
      { name: "Germany",     share: 11 },
      { name: "Norway",      share: 10 },
      { name: "USA",         share: 9  },
      { name: "Finland",     share: 7  }
    ],
    gdpHistory: [70,68,65,62,60,58,57,59,61,63,65,67],
    summary: "Sweden experienced a technical recession in 2023–24 driven by a sharp correction in its overvalued housing market and high household debt levels. Recovery is underway in 2025, supported by the Riksbank's aggressive rate-cutting cycle that brought inflation from over 10% to below 2%. The OECD projects a persistent current account surplus. Sweden's defence spending has surged following NATO accession. The economy is innovation-driven, home to major multinationals in telecommunications, manufacturing, and pharmaceuticals, with a tradition of export competitiveness."
  },
 
  portugal: {
    name: "Portugal", flag: "🇵🇹", region: "Southern Europe",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$287B", gdpDelta: "+2.8%", gdpPos: true,
    inflation: "2.2%", inflationDelta: "-1.3%", inflationPos: true,
    unemployment: "6.4%", unemploymentDelta: "-0.5%", unemploymentPos: true,
    tradeBalance: "-$18B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "+1.5%", caPos: true,
    fdi: "+$9B",
    topExports: ["Vehicles", "Machinery", "Oil Products", "Wine & Cork"],
    topPartners: [
      { name: "Spain",   share: 26 },
      { name: "France",  share: 12 },
      { name: "Germany", share: 11 },
      { name: "USA",     share: 6  }
    ],
    gdpHistory: [45,42,48,52,55,57,59,61,63,65,67,69],
    summary: "Portugal is one of the eurozone's stronger growth performers, expanding at nearly 3% in 2025. Tourism remains a pillar of the economy, with the country attracting record visitor numbers to Lisbon and Porto. A booming technology and startup scene, driven partly by the NHR tax incentive that attracted digital workers and entrepreneurs, has transformed Lisbon's economic profile. EU cohesion funds are supporting infrastructure modernisation. After years of painful austerity following the 2010–14 sovereign debt crisis, Portugal has rebuilt fiscal credibility with one of the eurozone's lowest debt trajectories."
  },
 
  egypt: {
    name: "Egypt", flag: "🇪🇬", region: "North Africa",
    status: "mixed", statusLabel: "Stabilising",
    gdp: "$347B", gdpDelta: "+3.8%", gdpPos: true,
    inflation: "24%", inflationDelta: "-16%", inflationPos: true,
    unemployment: "6.9%", unemploymentDelta: "-0.4%", unemploymentPos: true,
    tradeBalance: "-$42B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-4.5%", caPos: false,
    fdi: "+$10B",
    topExports: ["Petroleum Products", "Natural Gas", "Textiles", "Fertilisers"],
    topPartners: [
      { name: "USA",   share: 8  },
      { name: "Italy", share: 7  },
      { name: "Saudi Arabia", share: 6 },
      { name: "Turkey", share: 5 }
    ],
    gdpHistory: [42,45,48,50,48,44,40,38,42,47,52,55],
    summary: "Egypt is stabilising after a severe foreign currency crisis in 2023–24 that required a $12 billion IMF bailout and forced a sharp devaluation of the Egyptian pound. Inflation peaked above 40% and has since declined toward 24% in 2025. An IMF-backed reform programme is driving fiscal consolidation and deregulation. Suez Canal revenues — a major source of foreign exchange — have been disrupted by Red Sea shipping tensions but are recovering. The economy's structural challenges include a large youth unemployment problem, heavy energy subsidies, and an oversized public sector. Tourism and Gulf investment inflows are key stabilisers."
  },
 
  indonesia: {
    name: "Indonesia", flag: "🇮🇩", region: "Southeast Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$1.5T", gdpDelta: "+4.8%", gdpPos: true,
    inflation: "2.8%", inflationDelta: "-0.6%", inflationPos: true,
    unemployment: "4.9%", unemploymentDelta: "-0.3%", unemploymentPos: true,
    tradeBalance: "+$37B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-0.7%", caPos: false,
    fdi: "+$22B",
    topExports: ["Palm Oil", "Coal", "Nickel", "Electronics"],
    topPartners: [
      { name: "China",      share: 22 },
      { name: "USA",        share: 10 },
      { name: "Japan",      share: 8  },
      { name: "Singapore",  share: 6  }
    ],
    gdpHistory: [55,57,60,63,61,65,68,70,72,74,76,78],
    summary: "Indonesia is Southeast Asia's largest economy and a growing strategic player in global supply chains. Its dominant nickel reserves — critical for EV batteries — have made it a target of major investment from both Chinese and Western battery manufacturers. Indonesia has leveraged this position to pursue a domestic processing requirement, forcing value-added refining onshore. Growth at nearly 5% is driven by commodity exports, rising domestic consumption, and infrastructure investment. The new Prabowo administration has signalled continuity on economic policy while expanding social spending."
  },
  
  norway: {
    name: "Norway", flag: "🇳🇴", region: "Northern Europe",
    status: "stable", statusLabel: "Stable",
    gdp: "$593B", gdpDelta: "+1.7%", gdpPos: true,
    inflation: "3.1%", inflationDelta: "-1.4%", inflationPos: true,
    unemployment: "4.0%", unemploymentDelta: "+0.3%", unemploymentPos: false,
    tradeBalance: "+$108B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+16.4%", caPos: true,
    fdi: "+$22B",
    topExports: ["Natural Gas", "Crude Oil", "Fish & Seafood", "Machinery"],
    topPartners: [
      { name: "Germany",     share: 18 },
      { name: "UK",          share: 17 },
      { name: "Netherlands", share: 10 },
      { name: "France",      share: 7  }
    ],
    gdpHistory: [68,65,70,74,76,72,74,76,78,79,80,81],
    summary: "Norway is one of the world's wealthiest nations, underpinned by massive sovereign wealth from oil and gas revenues channelled into the Government Pension Fund Global — the world's largest at over $1.7 trillion. Mainland GDP growth is recovering to 1.7% in 2025, supported by rising consumer spending and recovering housing investment as interest rates begin to decline. Inflation remains above the 2% target, keeping Norges Bank cautious on rate cuts. Direct U.S. trade exposure is minimal at around 3% of exports, making Norway relatively insulated from tariff shocks, though weaker European growth does weigh indirectly."
  },
 
  denmark: {
    name: "Denmark", flag: "🇩🇰", region: "Northern Europe",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$418B", gdpDelta: "+2.4%", gdpPos: true,
    inflation: "2.1%", inflationDelta: "-1.4%", inflationPos: true,
    unemployment: "4.9%", unemploymentDelta: "+0.2%", unemploymentPos: false,
    tradeBalance: "+$38B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+9.6%", caPos: true,
    fdi: "+$20B",
    topExports: ["Pharmaceuticals", "Machinery", "Food & Meat", "Chemicals"],
    topPartners: [
      { name: "Germany", share: 16 },
      { name: "Sweden",  share: 11 },
      { name: "USA",     share: 10 },
      { name: "Norway",  share: 8  }
    ],
    gdpHistory: [62,60,65,68,70,68,70,72,74,75,76,78],
    summary: "Denmark is outperforming most of the EU, driven overwhelmingly by the pharmaceutical sector — Novo Nordisk alone accounts for a remarkable share of national GDP, propelled by global GLP-1 weight loss drug demand. This concentration is a source of both strength and vulnerability. The broader economy is well-run, with sound fiscal management, low unemployment, and one of the highest living standards globally. The current account surplus is very large relative to GDP. Strong pharma exports have offset weakness in manufacturing and construction. Denmark's defence spending is rising sharply in line with NATO commitments."
  },
 
  kenya: {
    name: "Kenya", flag: "🇰🇪", region: "East Africa",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$118B", gdpDelta: "+5.0%", gdpPos: true,
    inflation: "4.1%", inflationDelta: "-1.6%", inflationPos: true,
    unemployment: "13.9%", unemploymentDelta: "-0.5%", unemploymentPos: true,
    tradeBalance: "-$14B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-4.5%", caPos: false,
    fdi: "+$6B",
    topExports: ["Tea", "Horticulture", "Coffee", "Manufactured Goods"],
    topPartners: [
      { name: "Uganda",  share: 10 },
      { name: "USA",     share: 9  },
      { name: "Netherlands", share: 8 },
      { name: "Pakistan", share: 6 }
    ],
    gdpHistory: [42,44,46,48,45,50,52,54,55,57,58,60],
    summary: "Kenya is East Africa's largest economy and a regional hub for finance, technology, and logistics. GDP growth momentum has strengthened through 2025, with Q1 and Q2 growth both at 5%, driven by easing monetary conditions, agricultural recovery, and a rebound in private credit. Inflation is under control at 4.1%, within the central bank's target band, and the exchange rate has stabilised. Fiscal pressures remain the key vulnerability — the deficit widened to 5.9% of GDP in FY2025, driven by revenue shortfalls and high debt servicing costs. Kenya is Africa's largest start-up ecosystem by funding and is increasingly attracting tech-sector FDI."
  },
 
  nigeria: {
    name: "Nigeria", flag: "🇳🇬", region: "West Africa",
    status: "mixed", statusLabel: "Reforming",
    gdp: "$362B", gdpDelta: "+3.4%", gdpPos: true,
    inflation: "33%", inflationDelta: "-2.5%", inflationPos: true,
    unemployment: "33.3%", unemploymentDelta: "-1.0%", unemploymentPos: true,
    tradeBalance: "+$4B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-1.5%", caPos: false,
    fdi: "+$5B",
    topExports: ["Crude Oil", "Natural Gas", "Cocoa", "Rubber"],
    topPartners: [
      { name: "India",  share: 17 },
      { name: "Spain",  share: 10 },
      { name: "USA",    share: 8  },
      { name: "France", share: 7  }
    ],
    gdpHistory: [48,45,50,53,50,48,52,54,52,55,56,58],
    summary: "Nigeria is Africa's most populous nation and a major oil producer undergoing painful but necessary macroeconomic reform. The removal of costly fuel subsidies and the unification of the foreign exchange market in 2023 were the most significant policy changes in decades, causing a sharp naira depreciation and a spike in inflation that remains above 33%. Growth is holding at 3.4%, driven by oil production recovery and a services sector rebound. Unemployment and underemployment remain structural challenges for Africa's largest labour force. The Dangote Refinery — the world's largest single-train refinery — began operations in 2024, with the potential to transform Nigeria's trade balance from crude exporter to refined products exporter."
  },
 
  ecuador: {
    name: "Ecuador", flag: "🇪🇨", region: "South America",
    status: "mixed", statusLabel: "Fragile",
    gdp: "$121B", gdpDelta: "+1.5%", gdpPos: true,
    inflation: "1.8%", inflationDelta: "+0.5%", inflationPos: false,
    unemployment: "4.2%", unemploymentDelta: "+0.4%", unemploymentPos: false,
    tradeBalance: "+$2B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-0.8%", caPos: false,
    fdi: "+$3B",
    topExports: ["Petroleum", "Bananas", "Shrimp", "Cacao"],
    topPartners: [
      { name: "USA",   share: 26 },
      { name: "China", share: 15 },
      { name: "Chile", share: 8  },
      { name: "Panama", share: 6 }
    ],
    gdpHistory: [48,45,50,52,50,48,52,53,50,52,53,54],
    summary: "Ecuador is a fully dollarised economy — it uses the U.S. dollar as its currency — which provides monetary stability but removes exchange rate flexibility as an adjustment tool. Growth is modest at 1.5% in 2025, weighed down by a severe security crisis driven by organised crime and drug trafficking that has damaged investment confidence and tourism. Ecuador is a significant oil exporter and one of the world's top banana and shrimp exporters. Declining oil reserves and fiscal pressures from social spending and security costs present structural challenges. An IMF programme is supporting macroeconomic stabilisation efforts."
  },
 
  bahamas: {
    name: "Bahamas", flag: "🇧🇸", region: "Central America",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$14B", gdpDelta: "+3.2%", gdpPos: true,
    inflation: "3.5%", inflationDelta: "-1.2%", inflationPos: true,
    unemployment: "9.8%", unemploymentDelta: "-0.7%", unemploymentPos: true,
    tradeBalance: "-$3B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-19.0%", caPos: false,
    fdi: "+$1.2B",
    topExports: ["Tourism Services", "Financial Services", "Aragonite", "Rum"],
    topPartners: [
      { name: "USA",   share: 80 },
      { name: "UK",    share: 4  },
      { name: "China", share: 3  },
      { name: "Canada", share: 2 }
    ],
    gdpHistory: [55,60,40,35,55,65,70,72,68,72,74,76],
    summary: "The Bahamas is a high-income small island economy overwhelmingly dependent on tourism and offshore financial services. Over 80% of trade flows are with the United States, creating deep economic linkages. Tourism accounts for roughly 50% of GDP, making it extremely sensitive to U.S. consumer sentiment and weather events. Hurricane recovery investment drives periodic construction booms. The offshore financial sector, while under increased international regulatory pressure, remains significant. The very large current account deficit reflects structural goods import dependency, offset by services export revenues from tourism and finance."
  },
 
  guatemala: {
    name: "Guatemala", flag: "🇬🇹", region: "Central America",
    status: "stable", statusLabel: "Stable",
    gdp: "$102B", gdpDelta: "+3.6%", gdpPos: true,
    inflation: "3.7%", inflationDelta: "-0.9%", inflationPos: true,
    unemployment: "2.7%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "-$8B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "+3.2%", caPos: true,
    fdi: "+$3B",
    topExports: ["Coffee", "Sugar", "Bananas", "Palm Oil"],
    topPartners: [
      { name: "USA",    share: 34 },
      { name: "El Salvador", share: 12 },
      { name: "Honduras", share: 9 },
      { name: "Mexico", share: 7 }
    ],
    gdpHistory: [45,47,46,50,52,54,55,57,58,59,61,62],
    summary: "Guatemala is Central America's largest economy and among the region's most stable, with consistent GDP growth around 3–4% and inflation well-controlled. Remittances from Guatemalans working in the United States are a critical economic pillar, exceeding FDI and representing around 18% of GDP — one of the highest remittance-to-GDP ratios in the world. Coffee, sugar, and banana exports underpin the trade account. Despite macroeconomic stability, Guatemala faces significant structural challenges in poverty, inequality, and institutional governance that constrain broader development and contribute to emigration pressures."
  },
 
  philippines: {
    name: "Philippines", flag: "🇵🇭", region: "Southeast Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$437B", gdpDelta: "+5.8%", gdpPos: true,
    inflation: "3.2%", inflationDelta: "-2.3%", inflationPos: true,
    unemployment: "3.9%", unemploymentDelta: "-0.4%", unemploymentPos: true,
    tradeBalance: "-$55B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-2.8%", caPos: false,
    fdi: "+$9B",
    topExports: ["Electronics", "Machinery", "Coconut Products", "Garments"],
    topPartners: [
      { name: "USA",         share: 15 },
      { name: "Japan",       share: 14 },
      { name: "China",       share: 13 },
      { name: "South Korea", share: 6  }
    ],
    gdpHistory: [52,55,48,54,58,62,64,66,68,70,72,74],
    summary: "The Philippines is one of Southeast Asia's most dynamic economies, growing at nearly 6% in 2025 on the back of strong domestic consumption, robust remittances, and expanding business process outsourcing (BPO) services. Remittances from overseas Filipino workers — nearly 10 million Filipinos work abroad — are a structural pillar, contributing around 9% of GDP. Inflation has returned to within target after a sharp spike in 2023. The country is benefitting from supply chain diversification away from China, particularly in electronics manufacturing. Infrastructure investment under the 'Build, Better, More' programme is a key growth driver."
  },
 
  nepal: {
    name: "Nepal", flag: "🇳🇵", region: "South Asia",
    status: "stable", statusLabel: "Recovering",
    gdp: "$43B", gdpDelta: "+4.1%", gdpPos: true,
    inflation: "5.4%", inflationDelta: "-1.8%", inflationPos: true,
    unemployment: "11.4%", unemploymentDelta: "-0.6%", unemploymentPos: true,
    tradeBalance: "-$12B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-6.9%", caPos: false,
    fdi: "+$0.2B",
    topExports: ["Textiles", "Carpets", "Tea", "Hydroelectric Power"],
    topPartners: [
      { name: "India",  share: 65 },
      { name: "China",  share: 12 },
      { name: "USA",    share: 6  },
      { name: "Germany", share: 3 }
    ],
    gdpHistory: [38,36,34,38,42,40,44,46,43,45,47,49],
    summary: "Nepal is a landlocked, low-income economy sandwiched between India and China, with an extraordinary dependence on remittances — Nepalis working abroad, primarily in the Gulf states and Malaysia, send home remittances equivalent to roughly 25% of GDP. This creates a consumption-driven economy with limited domestic production. India dominates trade, accounting for over 65% of imports and exports. Hydropower is Nepal's most significant development asset, with vast untapped potential to export electricity to India. Tourism, centred on Himalayan trekking and mountaineering, is recovering post-COVID. Economic vulnerability to natural disasters — particularly earthquakes — is a persistent risk."
  },
 
  qatar: {
    name: "Qatar", flag: "🇶🇦", region: "Middle East",
    status: "stable", statusLabel: "Stable",
    gdp: "$236B", gdpDelta: "+2.4%", gdpPos: true,
    inflation: "1.8%", inflationDelta: "-0.4%", inflationPos: true,
    unemployment: "0.1%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "+$78B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+16.5%", caPos: true,
    fdi: "+$5B",
    topExports: ["LNG", "Crude Oil", "Petrochemicals", "Fertilisers"],
    topPartners: [
      { name: "China",       share: 18 },
      { name: "Japan",       share: 14 },
      { name: "South Korea", share: 11 },
      { name: "India",       share: 9  }
    ],
    gdpHistory: [65,60,68,72,75,70,72,74,75,76,77,78],
    summary: "Qatar holds the world's third-largest natural gas reserves and is the leading global LNG exporter, giving it extraordinary geopolitical and economic leverage relative to its small population of under 3 million citizens. GDP per capita is among the highest in the world. The current account surplus is very large. Qatar is investing heavily in non-hydrocarbon diversification through its sovereign wealth fund and infrastructure development. The country successfully hosted the 2022 FIFA World Cup. Geopolitically, Qatar serves as a crucial diplomatic intermediary — hosting both U.S. military facilities and maintaining relations with Iran, Hamas, and the Taliban."
  },
 
  morocco: {
    name: "Morocco", flag: "🇲🇦", region: "North Africa",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$151B", gdpDelta: "+3.6%", gdpPos: true,
    inflation: "2.1%", inflationDelta: "-3.4%", inflationPos: true,
    unemployment: "13.1%", unemploymentDelta: "-0.5%", unemploymentPos: true,
    tradeBalance: "-$24B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-1.8%", caPos: false,
    fdi: "+$4B",
    topExports: ["Phosphates & Fertilisers", "Vehicles", "Electronics", "Fish"],
    topPartners: [
      { name: "Spain",  share: 22 },
      { name: "France", share: 20 },
      { name: "India",  share: 6  },
      { name: "USA",    share: 5  }
    ],
    gdpHistory: [42,44,40,46,48,50,52,53,55,56,57,59],
    summary: "Morocco is one of Africa's most diversified and reform-oriented economies, and a key hub linking Europe and sub-Saharan Africa. The country controls over 70% of global phosphate reserves — a critical input for fertilisers — giving it enormous long-term strategic value in global food security. Morocco has built a significant automotive manufacturing sector attracting investment from Renault and Stellantis, and is expanding aerospace and electronics exports. Infrastructure is world-class for the region, with a high-speed rail network and major port facilities. Co-hosting the 2030 FIFA World Cup with Spain and Portugal is catalysing further investment. Inflation has fallen sharply from 2023 peaks."
  },
 
  greece: {
    name: "Greece", flag: "🇬🇷", region: "Southern Europe",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$254B", gdpDelta: "+2.5%", gdpPos: true,
    inflation: "2.8%", inflationDelta: "-1.7%", inflationPos: true,
    unemployment: "10.4%", unemploymentDelta: "-1.2%", unemploymentPos: true,
    tradeBalance: "-$32B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-6.2%", caPos: false,
    fdi: "+$7B",
    topExports: ["Petroleum Products", "Pharmaceuticals", "Aluminium", "Food"],
    topPartners: [
      { name: "Italy",   share: 11 },
      { name: "Germany", share: 8  },
      { name: "Turkey",  share: 7  },
      { name: "Cyprus",  share: 6  }
    ],
    gdpHistory: [30,28,32,38,42,45,48,52,56,58,60,62],
    summary: "Greece has achieved a remarkable economic comeback after the most severe sovereign debt crisis in modern European history. A decade of austerity, structural reforms, and primary budget surpluses restored fiscal credibility and led to credit rating upgrades back to investment grade in 2023. GDP growth of 2.5% continues the outperformance trend relative to EU peers. Tourism is the backbone of the economy, reaching record arrivals. Unemployment, while still elevated at 10.4%, has fallen dramatically from a 2013 peak of 28%. Shipping is a globally significant industry for Greece. Long-term challenges include brain drain, demographic decline, and an oversized public sector."
  },
 
  switzerland: {
    name: "Switzerland", flag: "🇨🇭", region: "Western Europe",
    status: "stable", statusLabel: "Stable",
    gdp: "$942B", gdpDelta: "+1.5%", gdpPos: true,
    inflation: "0.8%", inflationDelta: "-1.5%", inflationPos: true,
    unemployment: "2.9%", unemploymentDelta: "+0.1%", unemploymentPos: false,
    tradeBalance: "+$62B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+7.3%", caPos: true,
    fdi: "+$42B",
    topExports: ["Pharmaceuticals", "Watches", "Machinery", "Chemicals"],
    topPartners: [
      { name: "Germany", share: 15 },
      { name: "USA",     share: 14 },
      { name: "China",   share: 9  },
      { name: "France",  share: 7  }
    ],
    gdpHistory: [68,65,70,72,74,72,73,75,76,77,78,79],
    summary: "Switzerland is one of the world's most competitive economies, combining high-value pharmaceutical and chemical exports, a world-leading financial sector, and precision manufacturing in watches and machinery. Inflation has fallen to a remarkably low 0.8%, the lowest in Europe, giving the Swiss National Bank significant policy flexibility. The Swiss franc's traditional safe-haven status creates persistent upward pressure on the currency, which weighs on export competitiveness. Switzerland is not an EU member but is deeply integrated through bilateral agreements. Basel III financial regulations — authored in large part by Swiss regulators — underpin global banking resilience standards."
  },
 
  cuba: {
    name: "Cuba", flag: "🇨🇺", region: "Central America",
    status: "contracting", statusLabel: "Crisis",
    gdp: "$90B", gdpDelta: "-1.5%", gdpPos: false,
    inflation: "30%", inflationDelta: "+6%", inflationPos: false,
    unemployment: "1.3%", unemploymentDelta: "+0.2%", unemploymentPos: false,
    tradeBalance: "-$8B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-5.0%", caPos: false,
    fdi: "+$0.3B",
    topExports: ["Pharmaceuticals", "Nickel", "Tobacco & Cigars", "Sugar"],
    topPartners: [
      { name: "Russia", share: 20 },
      { name: "China",  share: 17 },
      { name: "Spain",  share: 10 },
      { name: "Canada", share: 8  }
    ],
    gdpHistory: [60,55,45,38,42,40,36,32,30,28,26,24],
    summary: "Cuba is in a prolonged economic crisis driven by a toxic combination of a tightened U.S. embargo, severe energy shortages, the collapse of Venezuelan oil subsidies, and the failures of state-led economic management. GDP contracted 1.5% in 2025 — the fifth consecutive year of economic decline or stagnation. Tourism arrivals fell 26.6% in early 2025 year-on-year, and 60% below 2019 levels. Inflation runs near 30% and the informal exchange rate has collapsed. Russia pledged $1 billion in aid through 2030 and resumed oil shipments, providing a partial lifeline. The government has expanded private-sector authorisation to over 1,800 occupations, but structural reform remains tentative."
  },
 
  tanzania: {
    name: "Tanzania", flag: "🇹🇿", region: "East Africa",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$80B", gdpDelta: "+5.6%", gdpPos: true,
    inflation: "3.3%", inflationDelta: "-0.1%", inflationPos: true,
    unemployment: "9.3%", unemploymentDelta: "-0.5%", unemploymentPos: true,
    tradeBalance: "-$6B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-4.2%", caPos: false,
    fdi: "+$1.5B",
    topExports: ["Gold", "Coffee", "Tea", "Cashews"],
    topPartners: [
      { name: "India",  share: 18 },
      { name: "UAE",    share: 10 },
      { name: "China",  share: 9  },
      { name: "Kenya",  share: 7  }
    ],
    gdpHistory: [40,42,43,46,44,48,50,52,53,55,57,59],
    summary: "Tanzania is one of Africa's most consistent growth stories, expanding at 5.6% in 2025 driven by agriculture, infrastructure investment, and natural resource development. Inflation is among the lowest in East Africa at 3.3%, demonstrating effective monetary management. Gold is the dominant export, followed by agricultural commodities. A major natural gas find off the coast, with reserves exceeding 57 trillion cubic feet, positions Tanzania as a future LNG exporter — though infrastructure development has been slow. Tourism centred on Serengeti, Kilimanjaro, and Zanzibar is a growing economic pillar. The country benefits from political stability relative to regional peers."
  },

  srilanka: {
    name: "Sri Lanka", flag: "🇱🇰", region: "South Asia",
    status: "expanding", statusLabel: "Recovering",
    gdp: "$97B", gdpDelta: "+4.8%", gdpPos: true,
    inflation: "4.0%", inflationDelta: "-65%", inflationPos: true,
    unemployment: "4.6%", unemploymentDelta: "-0.4%", unemploymentPos: true,
    tradeBalance: "-$6B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "+0.8%", caPos: true,
    fdi: "+$1.2B",
    topExports: ["Textiles & Apparel", "Tea", "Rubber", "Gems & Jewellery"],
    topPartners: [
      { name: "USA",          share: 24 },
      { name: "UK",           share: 8  },
      { name: "India",        share: 7  },
      { name: "Germany",      share: 5  }
    ],
    gdpHistory: [60,55,45,30,25,32,40,50,58,62,65,68],
    summary: "Sri Lanka achieved one of the most remarkable economic recoveries in recent memory after its catastrophic 2022 sovereign debt default — the worst in the country's post-independence history — wiped out foreign reserves and triggered hyperinflation exceeding 69%. IMF-backed reforms under an Extended Fund Facility stabilised the currency, rebuilt reserves, and restored fiscal discipline. Real GDP rebounded 5% in 2024 and grew 4.8% in the first three quarters of 2025 before a cyclone struck in late 2025, creating new near-term headwinds. External debt restructuring is nearly complete. Tourism and remittances are key drivers of the current account surplus, which is a notable achievement for a country that was in default just three years ago."
  },
 
  saudiarabia: {
    name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East",
    status: "expanding", statusLabel: "Diversifying",
    gdp: "$1.1T", gdpDelta: "+2.6%", gdpPos: true,
    inflation: "2.1%", inflationDelta: "+0.1%", inflationPos: false,
    unemployment: "6.3%", unemploymentDelta: "-1.3%", unemploymentPos: true,
    tradeBalance: "+$98B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-0.5%", caPos: false,
    fdi: "+$29B",
    topExports: ["Crude Oil", "Petrochemicals", "Plastics", "Metals"],
    topPartners: [
      { name: "China",  share: 13 },
      { name: "Japan",  share: 12 },
      { name: "India",  share: 11 },
      { name: "South Korea", share: 9 }
    ],
    gdpHistory: [70,65,72,78,74,76,75,78,80,79,80,82],
    summary: "Saudi Arabia is executing the most ambitious economic transformation in its history under Vision 2030, seeking to reduce dependence on oil revenues through diversification into tourism, entertainment, financial services, and manufacturing. Non-oil GDP grew 4.5% in 2024, driven by retail, hospitality, and construction, while OPEC+ production cuts constrained oil output and moderated overall growth. Unemployment among Saudi nationals hit a record low, with youth and female unemployment both halved over four years — a significant social and economic achievement. The current account shifted into deficit as investment-linked imports surge. Mega-projects including NEOM and Red Sea tourism developments represent extraordinary capital commitments to the diversification agenda."
  },
 
  malaysia: {
    name: "Malaysia", flag: "🇲🇾", region: "Southeast Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$430B", gdpDelta: "+4.8%", gdpPos: true,
    inflation: "1.8%", inflationDelta: "-0.3%", inflationPos: true,
    unemployment: "3.3%", unemploymentDelta: "-0.1%", unemploymentPos: true,
    tradeBalance: "+$42B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+2.6%", caPos: true,
    fdi: "+$17B",
    topExports: ["Electronics", "Palm Oil", "Petroleum", "Rubber"],
    topPartners: [
      { name: "China",      share: 14 },
      { name: "Singapore",  share: 13 },
      { name: "USA",        share: 11 },
      { name: "Japan",      share: 7  }
    ],
    gdpHistory: [58,55,60,63,58,65,68,70,72,74,75,77],
    summary: "Malaysia is a significant beneficiary of global supply chain restructuring, attracting record FDI in semiconductors, data centres, and electronics manufacturing as companies diversify away from China. Growth of 4.8% in 2025 is among the strongest in ASEAN. Inflation is remarkably well-controlled at 1.8%, aided by government fuel subsidies and competitive domestic pricing. The electronics and electrical sector alone accounts for over 40% of exports. Malaysia is also a major palm oil producer and LNG exporter. The Ringgit has recovered from multi-decade lows seen in 2024, reflecting improved investor confidence and narrowing rate differentials with the US dollar."
  },
 
  uruguay: {
    name: "Uruguay", flag: "🇺🇾", region: "South America",
    status: "stable", statusLabel: "Stable",
    gdp: "$77B", gdpDelta: "+3.2%", gdpPos: true,
    inflation: "5.2%", inflationDelta: "-2.3%", inflationPos: true,
    unemployment: "7.8%", unemploymentDelta: "-0.4%", unemploymentPos: true,
    tradeBalance: "+$2B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-1.2%", caPos: false,
    fdi: "+$3B",
    topExports: ["Beef", "Soybeans", "Cellulose", "Dairy"],
    topPartners: [
      { name: "China",    share: 29 },
      { name: "Brazil",   share: 14 },
      { name: "USA",      share: 7  },
      { name: "Argentina", share: 6 }
    ],
    gdpHistory: [58,55,60,62,60,63,65,66,68,69,70,72],
    summary: "Uruguay is South America's most stable and transparent economy — it holds investment-grade sovereign credit ratings from all three major agencies, a distinction shared by very few Latin American nations. Strong institutions, low corruption, and prudent fiscal management underpin the country's resilience. Beef, soybeans, and cellulose are the main exports, with China now the dominant trade partner. A new UPM pulp mill has significantly boosted cellulose export capacity. Inflation has declined substantially from 2022 peaks toward the central bank target. Uruguay's small size and openness make it sensitive to Argentine and Brazilian economic volatility, its two largest neighbours."
  },
 
  czechrepublic: {
    name: "Czech Republic", flag: "🇨🇿", region: "Western Europe",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$352B", gdpDelta: "+2.8%", gdpPos: true,
    inflation: "2.6%", inflationDelta: "-9.4%", inflationPos: true,
    unemployment: "2.6%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "+$12B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+0.8%", caPos: true,
    fdi: "+$9B",
    topExports: ["Vehicles", "Machinery", "Electronics", "Pharmaceuticals"],
    topPartners: [
      { name: "Germany", share: 32 },
      { name: "Slovakia", share: 8 },
      { name: "Poland",   share: 7 },
      { name: "France",   share: 5 }
    ],
    gdpHistory: [55,50,56,60,62,58,55,58,62,65,67,69],
    summary: "The Czech Republic is one of Central Europe's most industrialised economies, deeply integrated into German and European automotive supply chains. Volkswagen, Skoda, and other automakers anchor the manufacturing base. After a painful inflation shock that peaked above 17% in 2022 — the highest in the EU — disinflation has been rapid and growth has rebounded to 2.8%. Unemployment at 2.6% is among the lowest in the EU. The economy faces a structural challenge: the automotive transition to EVs threatens its existing combustion engine component factories. The Czech koruna is one of Europe's more stable currencies, and the country maintains sound public finances."
  },
 
  ireland: {
    name: "Ireland", flag: "🇮🇪", region: "Northern Europe",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$594B", gdpDelta: "+3.5%", gdpPos: true,
    inflation: "1.8%", inflationDelta: "-2.4%", inflationPos: true,
    unemployment: "4.3%", unemploymentDelta: "-0.2%", unemploymentPos: true,
    tradeBalance: "+$112B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+10.6%", caPos: true,
    fdi: "+$48B",
    topExports: ["Pharmaceuticals", "Medical Devices", "Software", "Chemicals"],
    topPartners: [
      { name: "USA",     share: 28 },
      { name: "Belgium", share: 11 },
      { name: "Germany", share: 8  },
      { name: "UK",      share: 7  }
    ],
    gdpHistory: [65,62,70,75,78,80,82,84,85,86,87,88],
    summary: "Ireland's headline GDP figures are heavily distorted by the activities of multinational corporations — particularly U.S. pharma and tech giants including Apple, Google, Pfizer, and Meta — that book profits and assets in Ireland due to favourable tax arrangements. Modified GNI, a better measure of the domestic economy, is roughly half of GDP. That said, underlying domestic growth is genuinely strong, fuelled by employment, construction, and tourism. The U.S.-Ireland trade deficit of $114B in 2025 has made Ireland a focus of U.S. tariff discussions. Ireland's enormous current account surplus reflects multinational profit repatriation rather than true trade competitiveness."
  },
 
  botswana: {
    name: "Botswana", flag: "🇧🇼", region: "Southern Africa",
    status: "contracting", statusLabel: "Under Pressure",
    gdp: "$20B", gdpDelta: "-3.0%", gdpPos: false,
    inflation: "2.2%", inflationDelta: "-2.1%", inflationPos: true,
    unemployment: "21.0%", unemploymentDelta: "+2.0%", unemploymentPos: false,
    tradeBalance: "-$2B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-6.0%", caPos: false,
    fdi: "+$0.5B",
    topExports: ["Diamonds", "Copper & Nickel", "Beef", "Tourism Services"],
    topPartners: [
      { name: "EU",           share: 72 },
      { name: "South Africa", share: 11 },
      { name: "UAE",          share: 4  },
      { name: "India",        share: 3  }
    ],
    gdpHistory: [65,62,68,70,72,70,68,65,60,55,48,42],
    summary: "Botswana is facing its most serious economic challenge in decades, driven by a sharp collapse in diamond demand as lab-grown diamonds displace natural stones globally. Diamonds account for around 80% of export earnings and a third of GDP, making this structural shift an existential economic threat. The IMF projects a 3% GDP contraction and an 11% fiscal deficit in 2025. Botswana has nonetheless earned a reputation as one of Africa's best-governed economies — it holds investment-grade credit ratings alongside Mauritius and Morocco, and maintains strong institutions. Government-led diversification into tourism, financial services, and manufacturing is urgent but faces a long timeline. Despite current pressures, Botswana's democratic track record and institutional quality are real strengths."
  },
 
  ethiopia: {
    name: "Ethiopia", flag: "🇪🇹", region: "East Africa",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$117B", gdpDelta: "+6.8%", gdpPos: true,
    inflation: "22%", inflationDelta: "-8%", inflationPos: true,
    unemployment: "3.5%", unemploymentDelta: "-0.3%", unemploymentPos: true,
    tradeBalance: "-$16B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-4.8%", caPos: false,
    fdi: "+$3.5B",
    topExports: ["Coffee", "Gold", "Oilseeds", "Leather"],
    topPartners: [
      { name: "China",  share: 17 },
      { name: "USA",    share: 10 },
      { name: "UAE",    share: 8  },
      { name: "Saudi Arabia", share: 6 }
    ],
    gdpHistory: [30,32,35,38,40,42,45,48,50,52,54,57],
    summary: "Ethiopia is Africa's second most populous nation and one of the continent's fastest-growing economies, expanding nearly 7% in 2025. The government's industrial park strategy has attracted significant Chinese and other foreign investment in textiles and manufacturing. The Grand Ethiopian Renaissance Dam (GERD) on the Blue Nile is now operational and will significantly boost domestic electricity generation. However, serious challenges persist: inflation remains elevated at 22%, a post-civil war reconstruction burden is ongoing, and the Tigray conflict's economic scars are still healing. Foreign exchange shortages constrain imports. Ethiopia's enormous demographic base — 130 million people — represents both a development challenge and a long-term economic opportunity."
  },
 
  kazakhstan: {
    name: "Kazakhstan", flag: "🇰🇿", region: "Central Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$272B", gdpDelta: "+4.8%", gdpPos: true,
    inflation: "8.6%", inflationDelta: "-5.4%", inflationPos: true,
    unemployment: "4.7%", unemploymentDelta: "-0.2%", unemploymentPos: true,
    tradeBalance: "+$22B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+1.5%", caPos: true,
    fdi: "+$28B",
    topExports: ["Crude Oil", "Copper", "Uranium", "Wheat"],
    topPartners: [
      { name: "China",   share: 16 },
      { name: "Italy",   share: 12 },
      { name: "Russia",  share: 10 },
      { name: "Netherlands", share: 8 }
    ],
    gdpHistory: [55,52,58,62,60,63,65,67,68,70,72,74],
    summary: "Kazakhstan is Central Asia's largest economy and a major energy and minerals exporter, holding the world's largest uranium reserves and significant oil and gas resources. GDP growth of 4.8% in 2025 is supported by high commodity prices and strong non-oil sector development. The country is strategically positioned as a transit corridor between China and Europe via the Trans-Caspian route, gaining significance as Russian sanctions have redirected trade flows. Inflation has been brought down sharply from 2022 peaks through aggressive monetary tightening. Kazakhstan is also deepening economic relations with the Gulf, EU, and China simultaneously — a careful balancing act as Russia's geopolitical isolation creates both risks and opportunities."
  },
 
  taiwan: {
    name: "Taiwan", flag: "🇹🇼", region: "East Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$756B", gdpDelta: "+4.3%", gdpPos: true,
    inflation: "2.1%", inflationDelta: "+0.3%", inflationPos: false,
    unemployment: "3.4%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "+$147B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+14.2%", caPos: true,
    fdi: "+$12B",
    topExports: ["Semiconductors", "Electronics", "Machinery", "Petrochemicals"],
    topPartners: [
      { name: "China",       share: 22 },
      { name: "USA",         share: 15 },
      { name: "Japan",       share: 7  },
      { name: "Singapore",   share: 6  }
    ],
    gdpHistory: [60,62,68,75,72,78,82,80,85,86,87,88],
    summary: "Taiwan occupies one of the most strategically significant positions in the global economy: it produces the overwhelming majority of the world's most advanced semiconductors through TSMC, making it indispensable to the global electronics supply chain and a critical variable in U.S.-China geopolitical competition. The U.S. ran a $146.8 billion trade deficit with Taiwan in 2025, driven almost entirely by chip imports. GDP growth of 4.3% is fuelled by surging AI-related semiconductor demand. Taiwan's extraordinary current account surplus of 14.2% of GDP reflects its export dominance. Cross-strait tensions with China represent the defining geopolitical risk for the global technology sector — TSMC's fabs cannot be quickly replicated elsewhere."
  },
 
  algeria: {
    name: "Algeria", flag: "🇩🇿", region: "North Africa",
    status: "stable", statusLabel: "Stable",
    gdp: "$270B", gdpDelta: "+3.8%", gdpPos: true,
    inflation: "4.2%", inflationDelta: "-1.6%", inflationPos: true,
    unemployment: "11.4%", unemploymentDelta: "-0.6%", unemploymentPos: true,
    tradeBalance: "+$14B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+2.1%", caPos: true,
    fdi: "+$1.5B",
    topExports: ["Natural Gas", "Crude Oil", "Petroleum Products", "Fertilisers"],
    topPartners: [
      { name: "Italy",   share: 17 },
      { name: "Spain",   share: 13 },
      { name: "France",  share: 11 },
      { name: "Germany", share: 7  }
    ],
    gdpHistory: [50,48,52,55,53,56,58,57,59,60,62,63],
    summary: "Algeria is Africa's largest country by area and a major natural gas supplier to Europe, a position significantly elevated by Russia's invasion of Ukraine which prompted EU countries to urgently diversify away from Russian gas. Italy is Algeria's top export destination and the two countries signed a major energy partnership. Algeria holds over $90 billion in foreign reserves, providing significant macroeconomic stability. However, the economy remains heavily dependent on hydrocarbons which account for around 95% of export earnings, and economic diversification has been slow. Private sector development is constrained by bureaucratic barriers and limited openness to foreign investment outside the energy sector. Youth unemployment and a large informal economy are structural challenges."
  },

  poland: {
    name: "Poland", flag: "🇵🇱", region: "Eastern Europe",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$842B", gdpDelta: "+3.2%", gdpPos: true,
    inflation: "3.4%", inflationDelta: "-8.9%", inflationPos: true,
    unemployment: "3.1%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "-$8B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-2.1%", caPos: false,
    fdi: "+$22B",
    topExports: ["Machinery", "Vehicles", "Electronics", "Food & Beverages"],
    topPartners: [
      { name: "Germany", share: 28 },
      { name: "Czech Republic", share: 7 },
      { name: "UK",      share: 6  },
      { name: "France",  share: 6  }
    ],
    gdpHistory: [48,45,52,56,58,55,58,62,64,66,68,70],
    summary: "Poland is Central Europe's largest economy and one of the EU's most consistent growth performers — the only EU member to avoid recession during the 2008–09 financial crisis. Growth of 3.2% in 2025 is driven by strong private consumption as real wages rise sharply, and by accelerating EU-funded public investment. Inflation has fallen dramatically from a 2023 peak of 18%, though it remains above the ECB's 2% target. Defence spending is among the highest in NATO as a share of GDP, reflecting Poland's frontline position and the Ukraine war. The labour market is historically tight. Poland is a manufacturing hub deeply embedded in German supply chains, making it sensitive to German industrial weakness — a growing structural risk."
  },
 
  belgium: {
    name: "Belgium", flag: "🇧🇪", region: "Western Europe",
    status: "stable", statusLabel: "Stable",
    gdp: "$632B", gdpDelta: "+1.0%", gdpPos: true,
    inflation: "2.8%", inflationDelta: "-1.5%", inflationPos: true,
    unemployment: "6.0%", unemploymentDelta: "+0.4%", unemploymentPos: false,
    tradeBalance: "+$14B", tradeBalancDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-1.2%", caPos: false,
    fdi: "+$31B",
    topExports: ["Pharmaceuticals", "Chemicals", "Vehicles", "Food & Beverages"],
    topPartners: [
      { name: "Germany",     share: 17 },
      { name: "France",      share: 15 },
      { name: "Netherlands", share: 13 },
      { name: "UK",          share: 8  }
    ],
    gdpHistory: [62,60,65,68,70,68,66,67,68,69,69,70],
    summary: "Belgium is a small, highly open economy at the heart of the EU, hosting NATO and EU institutions and serving as a major logistics and pharmaceutical hub. GDP growth is projected at 1.0% in 2025, slowing due to high global uncertainty and decreased exports, with unemployment rising to 6.0% as a short-term consequence of labour market and pension reforms. Belgium's pharmaceutical sector — anchored by companies like UCB and Solvay — is a global strength. A persistent fiscal deficit of 5.3% of GDP and rising public debt are the central economic challenges, compounded by ageing-related spending pressures and mounting defence commitments under NATO targets."
  },
 
  singapore: {
    name: "Singapore", flag: "🇸🇬", region: "Southeast Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$501B", gdpDelta: "+5.0%", gdpPos: true,
    inflation: "0.8%", inflationDelta: "-2.4%", inflationPos: true,
    unemployment: "2.0%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "+$68B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "+17.0%", caPos: true,
    fdi: "+$160B",
    topExports: ["Electronics", "Petroleum Products", "Chemicals", "Machinery"],
    topPartners: [
      { name: "China",   share: 14 },
      { name: "Malaysia", share: 12 },
      { name: "USA",     share: 9  },
      { name: "Hong Kong", share: 8 }
    ],
    gdpHistory: [62,58,65,70,72,74,75,76,78,80,82,84],
    summary: "Singapore's economy expanded 5% in 2025, exceeding the Ministry of Trade and Industry's advance estimate, driven primarily by manufacturing, wholesale trade and finance, with robust AI-related electronics demand providing a key lift. Singapore is one of the world's most competitive and open economies, functioning as Southeast Asia's premier financial centre, logistics hub, and tech gateway. Consumer price inflation remained muted at 0.8%, among the lowest globally. Its extraordinary FDI inflows relative to GDP size reflect its status as the preferred Asian base for multinationals. The U.S.-Singapore trade surplus is a rare bright spot in U.S. trade accounts, reflecting Singapore's consumption of American services and financial products."
  },
 
  dominicanrepublic: {
    name: "Dominican Republic", flag: "🇩🇴", region: "Central America",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$121B", gdpDelta: "+5.5%", gdpPos: true,
    inflation: "3.8%", inflationDelta: "-1.1%", inflationPos: true,
    unemployment: "5.1%", unemploymentDelta: "-0.5%", unemploymentPos: true,
    tradeBalance: "-$14B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-3.2%", caPos: false,
    fdi: "+$4.5B",
    topExports: ["Medical Devices", "Gold", "Cigars", "Cacao"],
    topPartners: [
      { name: "USA",    share: 52 },
      { name: "Haiti",  share: 7  },
      { name: "Canada", share: 4  },
      { name: "India",  share: 3  }
    ],
    gdpHistory: [48,50,40,52,58,60,62,64,65,67,68,70],
    summary: "The Dominican Republic is the Caribbean's largest economy and one of Latin America's fastest-growing, expanding 5.5% in 2025. Tourism is a dominant sector, with the country hosting more visitors than any other Caribbean nation — over 10 million in 2025. Free trade zones have made the DR a significant medical device exporter and manufacturer, with the USA absorbing over half of all exports. Remittances from the large diaspora in the U.S. are a key income source. Growth is broad-based across services, construction, and manufacturing. Sound macroeconomic management and political stability relative to neighbours have made the DR one of the region's most investor-friendly destinations."
  },
 
  panama: {
    name: "Panama", flag: "🇵🇦", region: "Central America",
    status: "mixed", statusLabel: "Recovering",
    gdp: "$77B", gdpDelta: "+2.9%", gdpPos: true,
    inflation: "1.2%", inflationDelta: "-0.8%", inflationPos: true,
    unemployment: "7.2%", unemploymentDelta: "-0.6%", unemploymentPos: true,
    tradeBalance: "-$8B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-4.8%", caPos: false,
    fdi: "+$3.8B",
    topExports: ["Canal Services", "Gold", "Bananas", "Shrimp"],
    topPartners: [
      { name: "USA",   share: 21 },
      { name: "China", share: 10 },
      { name: "Ecuador", share: 6 },
      { name: "Costa Rica", share: 5 }
    ],
    gdpHistory: [65,62,50,60,66,68,70,72,65,60,62,64],
    summary: "Panama is recovering from a sharp 2023–24 slowdown caused by the closure of First Quantum Minerals' Cobre Panama copper mine — one of the world's largest — following protests over its environmental licence. The mine's closure cut GDP growth by several percentage points and triggered a sovereign credit rating downgrade. The Panama Canal remains the economy's anchor, generating vital transit fee revenues and underpinning Panama City's status as a regional financial and logistics hub. The canal's competitiveness is under scrutiny amid U.S. concerns about Chinese port operator influence on its Atlantic and Pacific terminal facilities. Growth of 2.9% in 2025 marks a tentative stabilisation."
  },
 
  uganda: {
    name: "Uganda", flag: "🇺🇬", region: "East Africa",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$49B", gdpDelta: "+5.8%", gdpPos: true,
    inflation: "3.8%", inflationDelta: "-1.2%", inflationPos: true,
    unemployment: "2.8%", unemploymentDelta: "0.0%", unemploymentPos: true,
    tradeBalance: "-$4B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-8.2%", caPos: false,
    fdi: "+$1.5B",
    topExports: ["Coffee", "Gold", "Fish", "Maize"],
    topPartners: [
      { name: "UAE",          share: 19 },
      { name: "Kenya",        share: 11 },
      { name: "South Sudan",  share: 9  },
      { name: "China",        share: 8  }
    ],
    gdpHistory: [35,36,37,39,38,41,43,44,45,46,47,49],
    summary: "Uganda is one of East Africa's more consistent growth performers, expanding nearly 6% in 2025 on the back of agriculture, services, and rising oil sector investment. Uganda holds significant oil reserves in the Albertine Rift — the East Africa Crude Oil Pipeline (EACOP) project, connecting fields to Tanzania's coast, is progressing despite controversy over environmental and human rights concerns from Western investors and governments. Coffee is the dominant export. The large current account deficit reflects infrastructure import needs. Uganda faces significant development challenges including rapid population growth, limited industrialisation, and institutional governance pressures, but its youthful demographic base is a long-run growth asset."
  },
 
  namibia: {
    name: "Namibia", flag: "🇳🇦", region: "Southern Africa",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$13B", gdpDelta: "+4.2%", gdpPos: true,
    inflation: "4.5%", inflationDelta: "-0.8%", inflationPos: true,
    unemployment: "19.4%", unemploymentDelta: "-0.8%", unemploymentPos: true,
    tradeBalance: "+$1B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-9.1%", caPos: false,
    fdi: "+$0.8B",
    topExports: ["Diamonds", "Uranium", "Gold", "Fish"],
    topPartners: [
      { name: "South Africa", share: 33 },
      { name: "China",        share: 12 },
      { name: "EU",           share: 20 },
      { name: "Botswana",     share: 5  }
    ],
    gdpHistory: [40,38,42,45,43,47,50,52,50,53,55,57],
    summary: "Namibia is emerging as one of Africa's most exciting frontier energy stories. A massive offshore oil discovery — the Orange Basin fields off the southern coast — is estimated at over 11 billion barrels, potentially making Namibia a significant oil producer by the late 2020s. TotalEnergies and Shell are leading development. This prospective oil wealth is transforming Namibia's development outlook. Beyond energy, Namibia is a top diamond, uranium, and green hydrogen prospect. The country is also a potential green hydrogen exporter given its vast land area and solar irradiation. Despite strong natural resource endowments, high unemployment and inequality remain persistent structural challenges. Namibia is a politically stable democracy with sound institutions for its region."
  },
 
  ghana: {
    name: "Ghana", flag: "🇬🇭", region: "West Africa",
    status: "expanding", statusLabel: "Recovering",
    gdp: "$76B", gdpDelta: "+5.9%", gdpPos: true,
    inflation: "18.4%", inflationDelta: "-35%", inflationPos: true,
    unemployment: "3.6%", unemploymentDelta: "-0.3%", unemploymentPos: true,
    tradeBalance: "+$2B", tradeBalanceDelta: "Surplus", tradeBalancePos: true,
    currentAccount: "-2.4%", caPos: false,
    fdi: "+$2.8B",
    topExports: ["Gold", "Cocoa", "Petroleum", "Timber"],
    topPartners: [
      { name: "UAE",   share: 26 },
      { name: "China", share: 14 },
      { name: "India", share: 9  },
      { name: "EU",    share: 15 }
    ],
    gdpHistory: [52,55,58,55,48,42,38,45,55,62,66,68],
    summary: "Ghana is executing one of the most dramatic economic recoveries in recent African history. After defaulting on its external debt in 2022 — the first African sovereign default since Zambia in 2020 — and suffering inflation exceeding 50% and a currency collapse, Ghana secured IMF support and completed a landmark domestic debt restructuring in 2024. GDP growth rebounded strongly to 5.9% in 2025, fuelled by oil production, gold exports, and recovering consumer confidence. Inflation, while still elevated at 18.4%, has fallen sharply from its peak. The cedi has stabilised. Ghana's success in navigating its crisis is closely watched across West Africa as a model for debt resolution and fiscal reform."
  },
 
  croatia: {
    name: "Croatia", flag: "🇭🇷", region: "Southern Europe",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$85B", gdpDelta: "+3.2%", gdpPos: true,
    inflation: "3.4%", inflationDelta: "-2.8%", inflationPos: true,
    unemployment: "5.5%", unemploymentDelta: "-0.4%", unemploymentPos: true,
    tradeBalance: "-$7B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "+2.8%", caPos: true,
    fdi: "+$2B",
    topExports: ["Petroleum Products", "Machinery", "Pharmaceuticals", "Ships"],
    topPartners: [
      { name: "Italy",     share: 14 },
      { name: "Germany",   share: 12 },
      { name: "Slovenia",  share: 10 },
      { name: "Bosnia",    share: 8  }
    ],
    gdpHistory: [48,45,40,50,55,58,60,62,64,66,67,68],
    summary: "Croatia is a eurozone and Schengen Area member since 2023, marking a significant milestone in its European integration. Growth of 3.2% in 2025 is underpinned by record tourism revenues — Croatia's Adriatic coastline attracts over 20 million visitors annually — alongside strong EU fund absorption and construction activity. Inflation has declined sharply from 2022–23 peaks. The current account surplus is bolstered by tourism services receipts. Unemployment has fallen steadily, though labour shortages in tourism and construction are becoming a constraint, partly addressed by migrant worker inflows. Croatia's EU membership has significantly improved its investment climate and credit rating trajectory."
  },
 
  bhutan: {
    name: "Bhutan", flag: "🇧🇹", region: "South Asia",
    status: "expanding", statusLabel: "Expanding",
    gdp: "$3.0B", gdpDelta: "+5.0%", gdpPos: true,
    inflation: "4.0%", inflationDelta: "-1.5%", inflationPos: true,
    unemployment: "5.2%", unemploymentDelta: "-0.4%", unemploymentPos: true,
    tradeBalance: "-$0.9B", tradeBalanceDelta: "Deficit", tradeBalancePos: false,
    currentAccount: "-23.0%", caPos: false,
    fdi: "+$0.1B",
    topExports: ["Hydroelectric Power", "Ferro-silicon", "Cement", "Cardamom"],
    topPartners: [
      { name: "India", share: 85 },
      { name: "Bangladesh", share: 7 },
      { name: "Nepal",  share: 3  },
      { name: "Japan",  share: 2  }
    ],
    gdpHistory: [30,32,34,36,33,38,40,42,44,45,47,49],
    summary: "Bhutan is a small Himalayan kingdom pursuing a unique development philosophy centred on Gross National Happiness rather than GDP maximisation — measuring progress through well-being, cultural preservation, environmental sustainability, and good governance alongside economic growth. Hydropower exported to India is the dominant revenue source, accounting for over 80% of export earnings. The economy is heavily dependent on India — for trade, currency peg, and development assistance — making it one of the world's most asymmetric bilateral economic relationships. An unprecedented brain-drain emigration wave, particularly to Australia and the Gulf, has become a pressing policy concern. Bhutan remains one of the world's most pristine environments, protected by a 'high value, low impact' tourism model with strict visitor limits."
};
