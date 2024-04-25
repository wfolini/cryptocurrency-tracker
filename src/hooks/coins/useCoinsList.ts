import { useQuery } from "@tanstack/react-query";

import { coinsListWithMarketData } from "@/api/coins";

export function useCoinsList({
  page = 1,
  perPage = 10,
}: { page?: number; perPage?: number } = {}) {
  const { data, ...queryResult } = useQuery({
    queryKey: ["coinsList", { page, perPage }],
    queryFn: () => coinsListWithMarketData({ page, perPage }),
  });

  return {
    ...queryResult,
    coins: data?.data ?? [],
  };
}
