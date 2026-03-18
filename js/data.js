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
  }
};
