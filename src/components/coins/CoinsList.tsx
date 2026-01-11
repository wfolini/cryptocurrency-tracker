import { forwardRef, type ForwardedRef } from "react";
import { View, FlatList, type FlatListProps } from "react-native";
import Animated from "react-native-reanimated";

import type { CoinMarket } from "@/types/coins";

import CoinItem from "./CoinItem";
import { styles } from "./CoinsList.styles";

const AnimatedFlashList =
  Animated.createAnimatedComponent<FlatListProps<CoinMarket>>(FlatList);

type CoinsListProps = Omit<FlatListProps<CoinMarket>, "renderItem"> & {
  simpleItem?: boolean;
};

export default forwardRef(function CoinsList(
  { simpleItem, contentContainerStyle, ...props }: CoinsListProps,
  ref: ForwardedRef<FlatList<CoinMarket>>
) {
  return (
    <AnimatedFlashList
      contentContainerStyle={[styles.listContent, contentContainerStyle]}
      onEndReachedThreshold={0.3}
      renderItem={({ item }) => <CoinItem simple={simpleItem} coin={item} />}
      ItemSeparatorComponent={() => <View style={styles.coinItemSeparator} />}
      keyExtractor={({ id }, index) => `${index}-${id}`}
      ListFooterComponentStyle={styles.listFooter}
      ref={ref}
      // estimatedItemSize={simpleItem ? 60 : 70}
      {...props}
    />
  );
});
