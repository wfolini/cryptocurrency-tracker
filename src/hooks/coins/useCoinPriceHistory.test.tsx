import { renderHook, waitFor } from "@testing-library/react-native";

import { createWrapper } from "@/test/utils";

import { useCoinPriceHistory } from "./useCoinPriceHistory";

describe("useCoinPriceHistory hook", () => {
  test("returns bitcoin price history in usd in GraphPoint format", async () => {
    const { result } = renderHook(
      () =>
        useCoinPriceHistory({
          id: "bitcoin",
          currency: "usd",
        }),
      { wrapper: createWrapper() }
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.coinPriceHistory).toStrictEqual([
      { value: 71246, date: new Date(1711929600000) },
      { value: 59614, date: new Date(1714509600000) },
    ]);
  });
});
