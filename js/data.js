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
    name: "Mexico", flag: "🇲🇽", region: "Latin America",
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


};
