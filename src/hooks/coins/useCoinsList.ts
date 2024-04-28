import { useInfiniteQuery } from "@tanstack/react-query";

import { coinsListWithMarketData } from "@/api/coins";

export function useCoinsList({
  coinIds,
  perPage,
}: {
  coinIds: string | null | undefined;
  perPage?: number;
}) {
  // coinIds = null -> fetch all coins
  // coinIds = "someid" -> fetch coins with id "someid"
  // coinIds = "" || undefined -> don't fetch anything, returns empty array
  const validQuery = coinIds !== "" && coinIds !== undefined;

  const { data, ...queryResult } = useInfiniteQuery({
    queryKey: ["coinsList", perPage, coinIds],
    queryFn: ({ pageParam }) =>
      coinsListWithMarketData({
        page: pageParam,
        ids: coinIds || undefined,
        perPage,
      }),
    getNextPageParam: (lastPage, allPages, lastPageParam) =>
      lastPage.data.length === 0 ? undefined : lastPageParam + 1,
    initialPageParam: 1,
    select: (data) => data?.pages.flatMap((page) => page.data) ?? [],
    enabled: validQuery,
  });

  return {
    coins: validQuery ? data : [],
    ...queryResult,
  };
}
