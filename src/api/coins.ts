import { api } from "@/core/api";
import type { CoinDetail, CoinMarket } from "@/types/coins";

// Function only for testing purposes
export function sleep(ms = 2000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function coinsListWithMarketData({ page = 1, perPage = 10 }) {
  return api.get<CoinMarket[]>("/coins/markets", {
    params: {
      vs_currency: "usd",
      price_change_percentage: "7d",
      precision: "2",
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
