import { renderHook, waitFor } from "@testing-library/react-native";

import { createWrapper } from "@/test/utils";

import { useCoinsList } from "./useCoinsList";

describe("useCoinsList hook", () => {
  test("returns bitcoin market data with id equal to 'bitcoin'", async () => {
    const { result } = renderHook(() => useCoinsList({ coinIds: "bitcoin" }), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.coins?.length).toBe(1);
    expect(result.current.coins?.some((coin) => coin.id === "bitcoin")).toBe(
      true
    );
  });
  test("returns bitcoin and ethereum market data", async () => {
    const { result } = renderHook(
      () => useCoinsList({ coinIds: "bitcoin,ethereum" }),
      {
        wrapper: createWrapper(),
      }
    );
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.coins?.length).toBe(2);
    expect(result.current.coins?.some((coin) => coin.id === "bitcoin")).toBe(
      true
    );
    expect(result.current.coins?.some((coin) => coin.id === "ethereum")).toBe(
      true
    );
  });
  test("returns all coins if coinIds query is null", async () => {
    const { result } = renderHook(() => useCoinsList({ coinIds: null }), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.coins?.length).toBe(2);
  });

  test("returns undefined when using an empty string as invalid query", async () => {
    const { result } = renderHook(() => useCoinsList({ coinIds: "" }), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(false));
    expect(result.current.coins?.length).toBe(undefined);
  });
});
