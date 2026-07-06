import { useInfiniteQuery } from "@tanstack/react-query";

import { coinsListWithMarketData } from "@/api/coins";

export function useCoinsList({
  coinIds,
  perPage = 10,
}: {
  coinIds: string | null | undefined;
  perPage?: number;
}) {
  // coinIds = null -> Fetch all coins
  // coinIds = "someid" -> Fetch coins with id "someid"
  // coinIds = "" || undefined -> Query with no results. Don't fetch anything, returns empty array
  const validQuery = !(coinIds === "" || coinIds === undefined);

  const { data, ...queryResult } = useInfiniteQuery({
    queryKey: ["coinsList", coinIds, perPage],
    queryFn: ({ pageParam }) =>
      coinsListWithMarketData({
        page: pageParam,
        ids: coinIds || undefined,
        perPage,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.data.length === perPage
        ? lastPage.config.params.page + 1
        : undefined,
    initialPageParam: 1,
    select: (data) =>
      validQuery ? data?.pages.flatMap((page) => page.data) : [],
    enabled: validQuery,
  });

  return {
    coins: data,
    ...queryResult,
  };
}
