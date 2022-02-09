export const getTypes = (hours) => {
  return [
    {
      name: "SNP 500",
      value: "_SP",
      info: "Exploring the relationship between\nSNP500 Index Price and BTC Price. Here\nAll Prices are in USD denomination.",
      infoCorr:
        "Exchange rate of SNP 500 Index on a\nBTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit SNP 500 Index.",
      title: `${hours} Hour SNP 500 vs BTC Correlation Scatter`,
      titleCorr: ` ${hours} Hour SNP 500 Substitution Rate `,
      titleY: "SNP 500",
      titleYCorr: "SNP 500 / BTC",
      legendCorr: "𝑆𝑁𝑃 500\n/ 𝐵𝑇C",
    },
    {
      name: "DXY",
      value: "DXY",
      info: "Exploring the relationship between DXY\nIndex Price and BTC Price. Here All Prices\nare in USD denomination.",
      infoCorr:
        "Exchange rate of DXY Index on a BTC\nunit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit DXY Index.",
      title: `${hours} Hour DXY vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour DXY Substitution Rate`,
      titleY: "DXY",
      titleYCorr: "DXY / BTC",
      legendCorr: "𝐷𝑋𝑌\n /𝐵𝑇C",
    },
    {
      name: "Gold",
      value: "_MGC",
      info: "Exploring the relationship between Gold\nFutures Index Price and BTC Price. Here All\nPrices are in USD denomination. ",
      infoCorr:
        "Exchange rate of Gold Futures Index\non a BTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit Gold Futures Index.",
      title: `${hours} Hour Gold vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour Gold Substitution Rate`,
      titleY: "Gold",
      titleYCorr: "Gold / BTC",
      legendCorr: "𝐺𝑜𝑙𝑑\n/ 𝐵𝑇C",
    },
    {
      name: "Dow Jones",
      value: "_YM",
      info: "Exploring the relationship between Dow\nJones Industrial Index Price and BTC Price.\nHere All Prices are in USD denomination.",
      infoCorr:
        "Exchange rate of Dow Jones\nIndustrial Index on a BTC unit\ndenomination. The Substitutional\nRate represents the purchasing\npower of BTC to acquire 1 Unit Dow\nJones Industrial Index.",
      title: `${hours} Hour Dow Jones vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour Dow Jones Substitution Rate`,
      titleY: "Dow Jones",
      titleYCorr: "Dow Jones / BTC",
      legendCorr: "𝐷𝑂𝑊\n/ 𝐵𝑇C",
    },
    {
      name: "Crude Oil",
      value: "_BZ",
      info: "Exploring the relationship between Crude\nOil Index Price and BTC Price. Here All\nPrices are in USD denomination.",
      infoCorr:
        "Exchange rate of Crude Oil Index on\na BTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit Crude Oil Index.",
      title: `${hours} Hour Crude Oil vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour Crude Oil Substitution Rate `,
      titleY: "Crude Oil",
      titleYCorr: "Crude Oil / BTC",
      legendCorr: "𝑂𝐼𝐿\n/ 𝐵𝑇C",
    },
    {
      name: "GDAX",
      value: "GDAXI",
      info: "Exploring the relationship between GDAX\nIndex Price and BTC Price. Here All Prices\nare in USD denomination.",
      infoCorr:
        "Exchange rate of GDAX Index on a\nBTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit GDAX Index.",
      title: `${hours} Hour GDAX vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour GDAX Substitution Rate`,
      titleY: "GDAX",
      titleYCorr: "GDAX / BTC",
      legendCorr: "𝐺𝐷𝐴𝑋\n/ 𝐵𝑇C",
    },
    {
      name: "FTSE",
      value: "FTSE",
      info: "Exploring the relationship between FTSE\nIndex Price and BTC Price. Here All Prices\nare in USD denomination.",
      infoCorr:
        "Exchange rate of FTSE Index on a\nBTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit FTSE Index.",
      title: `${hours} Hour FTSE vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour FTSE Substitution Rate `,
      titleY: "FTSE",
      titleYCorr: "FTSE / BTC",
      legendCorr: "𝐹𝑇𝑆𝐸\n/ 𝐵𝑇C",
    },
    {
      name: "NIKKEI",
      value: "_NIY",
      info: "Exploring the relationship between NIKKEI\nIndex Price and BTC Price. Here All Prices\nare in USD denomination.",
      infoCorr:
        "Exchange rate of NIKKEI Index on a\nBTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit NIKKEI Index.",
      title: `${hours} Hour NIKKEI vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour NIKKEI Substitution Rate`,
      titleY: "NIKKEI",
      titleYCorr: "NIKKEI / BTC",
      legendCorr: "𝑁𝐼𝐾𝐾𝐸𝐼\n/ 𝐵𝑇C",
    },
    {
      name: "Natural Gas",
      value: "_NG",
      info: "Exploring the relationship between\nNatural Gas Index Price and BTC Price.\nHere All Prices are in USD denomination.",
      infoCorr:
        "Exchange rate of Natural Gas Index\non a BTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit Natural Gas Index.",
      title: `${hours} Hour Natural Gas vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour Natural Gas Substitution Rate`,
      titleY: "Natural Gas",
      titleYCorr: "Natural Gas / BTC",
      legendCorr: "𝐺𝐴𝑆\n/ 𝐵𝑇C",
    },
    {
      name: "Platinum",
      value: "_PL",
      info: "Exploring the relationship between\nPlatinum Index Price and BTC Price. Here\nAll Prices are in USD denomination.",
      infoCorr:
        "Exchange rate of Platinum Index on\na BTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit Platinum Index.",
      title: `${hours} Hour Platinum vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour Platinum Substitution Rate`,
      titleY: "Platinum",
      titleYCorr: "Platinum / BTC",
      legendCorr: "𝑃𝐿𝐴𝑇𝐼𝑁𝑈𝑀\n/ 𝐵𝑇C",
    },
    {
      name: "Silver",
      value: "_SI",
      info: "Exploring the relationship between Silver\nIndex Price and BTC Price. Here All Prices\nare in USD denomination",
      infoCorr:
        "Exchange rate of Silver Index on a\nBTC unit denomination. The\nSubstitutional Rate represents the\npurchasing power of BTC to acquire\n1 Unit Silver Index.",
      title: `${hours} Hour Silver vs BTC Correlation Scatter`,
      titleCorr: `${hours} Hour Silver Substitution Rate`,
      titleY: "Silver",
      titleYCorr: "Silver / BTC",
      legendCorr: "𝑆𝐼𝐿𝑉𝐸𝑅\n/ 𝐵𝑇C",
    },
  ];
};
export const getDefault = (hours) => {
  return getTypes(hours)[0];
};
