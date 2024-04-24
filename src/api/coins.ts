import { api } from "@/core/api";
import type { Coin } from "@/types/coin";

export function sleep(ms = 2000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function coinsListWithMarketData({ page = 1, perPage = 10 }) {
  await sleep();
  return api.get<Coin[]>("/coins/markets", {
    params: {
      vs_currency: "usd",
      price_change_percentage: "7d",
      precision: "2",
      page,
      per_page: perPage,
    },
  });
}
