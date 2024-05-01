import { Image } from "expo-image";
import React from "react";
import { ActivityIndicator, RefreshControl, View } from "react-native";
import { useTheme } from "react-native-paper";

import { EmptyState, Text } from "@/components";
import { CoinsList } from "@/components/coins";
import type { Theme } from "@/core/theme";
import { useCoinsList } from "@/hooks/coins/useCoinsList";
import { useFavoriteCoinsStore } from "@/hooks/coins/useFavoriteCoinsStore";

import { styles } from "./FavoriteCoinsScreen.styles";

export default function FavoriteCoinsScreen() {
  const theme = useTheme<Theme>();
  const { getFavoriteCoinsStringQuery } = useFavoriteCoinsStore();
  const {
    coins,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useCoinsList({ coinIds: getFavoriteCoinsStringQuery() });

  const emptyFavCoinsList = !getFavoriteCoinsStringQuery();
  return (
    <View style={styles.container}>
      <View
        style={[styles.topSection, { backgroundColor: theme.colors.onSurface }]}
      >
        <Image
          style={styles.avatar}
          source={"https://github.com/wfolini.png"}
          contentFit="cover"
          transition={300}
        />
        <Text variant="display">Hi, Walter</Text>
        <Text>Welcome back</Text>
      </View>
      <CoinsList
        simpleItem
        data={coins}
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={() => <Text variant="title">Favorites</Text>}
        ListEmptyComponent={
          emptyFavCoinsList ? (
            <EmptyState
              icon="heart"
              title="No favorite cryptocurrency saved"
              caption="Click on the Heart button at the top of the detail screen of any
        cryptocurrency to start adding favorites"
            />
          ) : null
        }
        ListFooterComponent={isFetchingNextPage ? ActivityIndicator : null}
        onEndReached={
          !emptyFavCoinsList && !isFetching && hasNextPage
            ? fetchNextPage
            : null
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
