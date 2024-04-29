import React from "react";
import { ActivityIndicator, RefreshControl, View } from "react-native";

import { Text } from "@/core/components";
import CoinsList from "@/core/components/CoinsList";
import { useCoinsList } from "@/hooks/coins/useCoinsList";
import { useFavoriteCoinsStore } from "@/hooks/coins/useFavoriteCoinsStore";

import { styles } from "./FavoriteCoinsScreen.styles";
import { EmptyFavoriteCoinsState } from "./components/EmptyFavoriteCoinsState";

export default function FavoriteCoinsScreen() {
  const { getFavoriteCoinsStringQuery } = useFavoriteCoinsStore();
  const { coins, fetchNextPage, isFetching, isFetchingNextPage, refetch } =
    useCoinsList({ coinIds: getFavoriteCoinsStringQuery() });

  const emptyFavCoinsList = !getFavoriteCoinsStringQuery();
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text variant="headline">Hi, Walter</Text>
        <Text variant="caption">Welcome back</Text>
      </View>
      <CoinsList
        data={coins}
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={() => <Text variant="title">Favorites</Text>}
        ListEmptyComponent={emptyFavCoinsList ? EmptyFavoriteCoinsState : null}
        ListFooterComponent={isFetchingNextPage ? ActivityIndicator : null}
        onEndReached={
          !emptyFavCoinsList && !isFetching ? fetchNextPage : undefined
        }
        refreshControl={
          !emptyFavCoinsList ? (
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          ) : undefined
        }
      />
    </View>
  );
}
