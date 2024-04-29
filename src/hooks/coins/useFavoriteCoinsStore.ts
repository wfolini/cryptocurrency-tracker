import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FavoriteCoinsState = {
  coinsIds: string[];
  addFavoriteCoin: (coinId: string) => void;
  removeFavoriteCoin: (coinId: string) => void;
  getFavoriteCoinsStringQuery: () => string | undefined;
  isCoinFavorite: (coinId: string) => boolean;
  toggleFavoriteCoin: (coinId: string) => void;
};

export const useFavoriteCoinsStore = create(
  persist<FavoriteCoinsState>(
    (set, get) => ({
      coinsIds: [],
      addFavoriteCoin: (coinId: string) =>
        set({ coinsIds: get().coinsIds.concat(coinId) }),
      removeFavoriteCoin: (coinId: string) =>
        set({ coinsIds: get().coinsIds.filter((id) => id !== coinId) }),
      toggleFavoriteCoin: (coinId: string) =>
        get().isCoinFavorite(coinId)
          ? get().removeFavoriteCoin(coinId)
          : get().addFavoriteCoin(coinId),
      getFavoriteCoinsStringQuery: () => get().coinsIds.join(",") || undefined,
      isCoinFavorite: (coinId: string) => get().coinsIds.includes(coinId),
    }),
    {
      name: "fav-coins",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
