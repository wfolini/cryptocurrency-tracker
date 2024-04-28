import { DEFAULT_CURRENCY } from "@/constants/coins";
import { api } from "@/core/api";
import type {
  CoinDetail,
  CoinMarket,
  CoinMarketChart,
  CoinSearch,
} from "@/types/coins";

// Function only for testing purposes
export function sleep(ms = 2000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function coinsListWithMarketData({
  page = 1,
  perPage = 10,
  ids,
}: {
  page?: number;
  perPage?: number;
  ids?: string;
}) {
  return api.get<CoinMarket[]>("/coins/markets", {
    params: {
      vs_currency: DEFAULT_CURRENCY,
      ids,
      price_change_percentage: "7d",
      precision: "full",
      page,
      per_page: perPage,
    },
  });
}

export function coinDataByID(id: string) {
  return api.get<CoinDetail>(`/coins/${id}`, {
    params: {
      market_data: true,
      localization: false,
      tickers: false,
      community_data: false,
      developer_data: false,
      sparkline: false,
    },
  });
}

export function coinHistoricalChartDataByID(
  id: string,
  currency = DEFAULT_CURRENCY,
  days = 30
) {
  return api.get<CoinMarketChart>(`/coins/${id}/market_chart`, {
    params: {
      vs_currency: currency,
      days,
      precision: "full",
    },
  });
}

export function coinSearch(query: string) {
  return api.get<CoinSearch>("/search", {
    params: { query },
  });
}
