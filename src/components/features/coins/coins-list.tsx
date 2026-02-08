import type { CoinMarket } from "@/types/coins";
import {
  FlashList,
  type FlashListRef,
  type ListRenderItem,
} from "@shopify/flash-list";
import { type ForwardedRef, forwardRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

import CoinItem from "./coin-item";
import { styles } from "./coins-list.styles";

type CoinsListProps = {
  simpleItem?: boolean;
  data?: CoinMarket[] | null;
} & Record<string, unknown>;

const isTestEnv = process.env.NODE_ENV === "test";

function CoinsListInner(
  { simpleItem, data, ...props }: CoinsListProps,
  ref: ForwardedRef<FlashListRef<CoinMarket>>,
) {
  const renderItem: ListRenderItem<CoinMarket> = ({ item }) => (
    <CoinItem simple={simpleItem} coin={item} />
  );

  if (isTestEnv) {
    return (
      <FlatList
        ref={ref as ForwardedRef<FlatList<CoinMarket>>}
        data={data || []}
        renderItem={({ item }) => <CoinItem simple={simpleItem} coin={item} />}
        keyExtractor={(item, index) => `${index}-${item.id}`}
        onEndReachedThreshold={0.3}
        ItemSeparatorComponent={() => <View style={styles.coinItemSeparator} />}
        ListFooterComponentStyle={styles.listFooter}
        contentContainerStyle={styles.listContent}
        {...props}
      />
    );
  }

  const AnimatedFlashList = Animated.createAnimatedComponent(
    FlashList,
  ) as typeof FlashList;

  return (
    <AnimatedFlashList<CoinMarket>
      ref={ref}
      data={data || []}
      renderItem={renderItem}
      keyExtractor={(item: CoinMarket, index: number) => `${index}-${item.id}`}
      onEndReachedThreshold={0.3}
      ItemSeparatorComponent={() => <View style={styles.coinItemSeparator} />}
      ListFooterComponentStyle={styles.listFooter}
      contentContainerStyle={styles.listContent}
      {...props}
    />
  );
}

const CoinsList = forwardRef(CoinsListInner);

export default CoinsList;
