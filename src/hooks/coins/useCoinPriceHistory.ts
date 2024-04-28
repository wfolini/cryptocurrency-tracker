import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { GraphPoint } from "react-native-graph";

import { coinHistoricalChartDataByID } from "@/api/coins";
import type { Currency } from "@/types/coins";

export function useCoinPriceHistory({
  id,
  currency,
  days,
}: {
  id: string;
  currency?: Currency;
  days?: number;
}) {
  const { data, ...queryResult } = useQuery({
    queryKey: ["coinMarketChart", { id, currency, days }],
    queryFn: () => coinHistoricalChartDataByID(id, currency, days),
  });

  const coinPriceHistory: GraphPoint[] = useMemo(
    () =>
      data?.data?.prices.map(([unixTimestamp, price]) => ({
        value: price,
        date: new Date(unixTimestamp),
      })) ?? [],
    [data]
  );

  return {
    ...queryResult,
    coinPriceHistory,
  };
}
