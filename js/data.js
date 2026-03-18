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
    name: "Kenya", flag: "🇰🇪", region: "Sub-Saharan Africa",
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
    name: "Tanzania", flag: "🇹🇿", region: "Sub-Saharan Africa",
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

};
