import type { FlashListRef } from "@shopify/flash-list";
import React, { useRef } from "react";
import { RefreshControl, View } from "react-native";
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import {
  ActivityIndicator,
  EmptyState,
  ErrorEmptyState,
  Text,
} from "@/components";
import { CoinsList } from "@/components/features/coins";
import { useCoinsList } from "@/hooks/coins/use-coins-list";
import { useFavoriteCoinsStore } from "@/hooks/coins/use-favorite-coins-store";

import type { CoinMarket } from "@/types/coins";
import Header, { MAX_HEIGHT, MIN_HEIGHT, THRESHOLD } from "./components/header";
import { styles } from "./favorite-coins-screen.styles";

export default function FavoriteCoinsScreen() {
  const { getFavoriteCoinsStringQuery } = useFavoriteCoinsStore();
  const {
    coins,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
    isError,
  } = useCoinsList({ coinIds: getFavoriteCoinsStringQuery() });
  const emptyFavCoinsList = !getFavoriteCoinsStringQuery();

  const offsetY = useSharedValue(0);
  const scrollViewRef = useRef<FlashListRef<CoinMarket>>(null);

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: (event) => {
        offsetY.value = event.contentOffset.y;
      },
      onEndDrag: (event) => {
        if (offsetY.value < THRESHOLD && offsetY.value > -MAX_HEIGHT) {
          // offsetY.value = withTiming(0);
          // runOnJS({ animated: true, offset: 0 })(scrollViewRef?.current?.scrollToOffset)
          // scrollViewRef?.current?.scrollToOffset({ offset: 0 });
        } else if (offsetY.value >= THRESHOLD && offsetY.value < -MIN_HEIGHT) {
          // offsetY.value = withTiming(MAX_HEIGHT);
          // scrollViewRef?.current?.scrollToEnd();
        }
      },
    },
    [],
  );

  return (
    <View style={styles.container}>
      <Header offsetY={offsetY} />
      <CoinsList
        ref={scrollViewRef}
        simpleItem
        data={coins}
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={() => <Text variant="title">Favorites</Text>}
        scrollEventThrottle={16}
        ListEmptyComponent={
          isError ? (
            ErrorEmptyState
          ) : emptyFavCoinsList ? (
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
            ? () => fetchNextPage()
            : null
        }
        refreshControl={
          !emptyFavCoinsList ? (
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          ) : undefined
        }
        onScroll={scrollHandler}
        contentInset={{ top: MAX_HEIGHT }}
        scrollIndicatorInsets={{ top: MAX_HEIGHT }}
        contentInsetAdjustmentBehavior="automatic"
      />
    </View>
  );
}
