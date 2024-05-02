import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  act,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react-native";

import { useFavoriteCoinsStore } from "@/hooks/coins/useFavoriteCoinsStore";
import { createWrapper, renderWithWrapper } from "@/test/utils";

import FavoriteCoinsScreen from "./FavoriteCoinsScreen";

describe("FavoriteCoinsScreen", () => {
  test("should render with an empty list of favorites", async () => {
    renderWithWrapper(<FavoriteCoinsScreen />);

    expect(await screen.getByText(/Favorites/)).toBeOnTheScreen();
    expect(
      await screen.getByText(/No favorite cryptocurrency saved/)
    ).toBeOnTheScreen();
  });

  test("should render with a list of one favorite coin, including only bitcoin", async () => {
    const { result } = renderHook(() => useFavoriteCoinsStore(), {
      wrapper: createWrapper(),
    });
    renderWithWrapper(<FavoriteCoinsScreen />);

    await act(() => {
      result.current.toggleFavoriteCoin("bitcoin");
    });

    expect(result.current.getFavoriteCoinsStringQuery()).toBe("bitcoin");
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "fav-coins",
      '{"state":{"coinsIds":["bitcoin"]},"version":0}'
    );

    await waitFor(() => {
      expect(screen.getByText(/Bitcoin/)).toBeOnTheScreen();
    });
  });

  test("should render with a list of one favorite coin, including bitcoin and ethereum", async () => {
    const { result } = renderHook(() => useFavoriteCoinsStore(), {
      wrapper: createWrapper(),
    });
    renderWithWrapper(<FavoriteCoinsScreen />);

    await act(() => {
      result.current.toggleFavoriteCoin("bitcoin");
      result.current.toggleFavoriteCoin("ethereum");
    });

    expect(result.current.getFavoriteCoinsStringQuery()).toBe(
      "bitcoin,ethereum"
    );
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "fav-coins",
      '{"state":{"coinsIds":["bitcoin","ethereum"]},"version":0}'
    );

    await waitFor(() => {
      expect(screen.getByText(/Bitcoin/)).toBeOnTheScreen();
      expect(screen.getByText(/Ethereum/)).toBeOnTheScreen();
    });
  });
});
