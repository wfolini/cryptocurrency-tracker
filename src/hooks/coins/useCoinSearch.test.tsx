import { renderHook, waitFor } from "@testing-library/react-native";

import { createWrapper } from "@/test/utils";

import { useCoinSearch } from "./useCoinSearch";

describe("useCoinSearch hook", () => {
  test("returns cryptocurrency ids matching 'bitcoin' separated by commas", async () => {
    const { result } = renderHook(() => useCoinSearch("bitcoin"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.coinsIDsSearchResult).toStrictEqual(
      "bitcoin,bitcoin-cash"
    );
  });

  test("returns an empty string for not matching any cryptocurrency", async () => {
    const { result } = renderHook(() => useCoinSearch("someWeirdText"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.coinsIDsSearchResult).toStrictEqual("");
  });

  test("returns null when using an empty query", async () => {
    const { result } = renderHook(() => useCoinSearch(""), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(false));
    expect(result.current.coinsIDsSearchResult).toStrictEqual(null);
  });
});
