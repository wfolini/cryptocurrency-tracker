import type { MarketData } from "@/types/coins";
import { formatCurrency } from "@/utils/coins";
import { useMemo } from "react";

export type CoinStatisticData = {
  label: string;
  value: string;
};

function buildCoinStatisticData(
  coinMarketData: MarketData | undefined,
  currency: string
): CoinStatisticData[] {
  return coinMarketData
    ? [
        {
          label: "Market Cap",
          value: formatCurrency(
            coinMarketData?.market_cap?.[currency],
            currency
          ),
        },
        {
          label: "Volume 24h",
          value: formatCurrency(
            coinMarketData?.total_volume?.[currency],
            currency
          ),
        },
        {
          label: "Circulating Supply",
          value: formatCurrency(coinMarketData?.circulating_supply, currency),
        },
        {
          label: "Total Supply",
          value: formatCurrency(coinMarketData?.total_supply, currency),
        },
        {
          label: "All Time High Price",
          value: formatCurrency(coinMarketData?.ath?.[currency], currency),
        },
        {
          label: "All Time Low Price",
          value: formatCurrency(coinMarketData?.atl?.[currency], currency),
        },
      ]
    : [];
}

export function useCoinStatisticData(
  coinMarketData: MarketData | undefined,
  currency: string
) {
  const coinStatisticData = useMemo(
    () => buildCoinStatisticData(coinMarketData, currency),
    [coinMarketData, currency]
  );

  return coinStatisticData;
}
