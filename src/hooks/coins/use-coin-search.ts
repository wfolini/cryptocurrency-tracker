import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { coinSearch } from "@/api/coins";

export function useCoinSearch(query: string) {
  const { data, ...queryResult } = useQuery({
    queryKey: ["coinSearch", query],
    queryFn: ({ signal }) => coinSearch(query, signal),
    enabled: !!query,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    select: (data) => data?.data?.coins?.map(({ id }) => id).join(","),
  });

  return {
    ...queryResult,
    coinsIDsSearchResult: query ? data : null,
  };
}
