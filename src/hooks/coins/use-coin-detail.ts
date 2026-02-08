import { useQuery } from "@tanstack/react-query";

import { coinDataByID } from "@/api/coins";

export function useCoinDetail(id: string) {
  const { data, ...queryResult } = useQuery({
    queryKey: ["coinDetail", id],
    queryFn: () => coinDataByID(id),
  });

  return {
    ...queryResult,
    coinData: data?.data,
  };
}
