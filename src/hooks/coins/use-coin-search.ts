import { useQuery } from "@tanstack/react-query";

import { coinSearch } from "@/api/coins";

export function useCoinSearch(query: string) {
  const { data, ...queryResult } = useQuery({
    queryKey: ["coinDetail", query],
    queryFn: () => coinSearch(query),
    enabled: !!query,
    select: (data) => data?.data?.coins?.map(({ id }) => id).join(","),
  });

  return {
    ...queryResult,
    coinsIDsSearchResult: query ? data : null,
  };
}
