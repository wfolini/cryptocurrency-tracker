import { FlashList, type FlashListProps } from "@shopify/flash-list";
import React from "react";
import { View } from "react-native";

import type { CoinMarket } from "@/types/coins";

import CoinItem from "./CoinItem";
import { styles } from "./CoinsList.styles";

type CoinsListProps = Omit<FlashListProps<CoinMarket>, "renderItem">;

export default function CoinsList(props: CoinsListProps) {
  return (
    <FlashList
      {...props}
      contentContainerStyle={styles.listContent}
      onEndReachedThreshold={0.3}
      renderItem={({ item }) => <CoinItem coin={item} />}
      ItemSeparatorComponent={() => <View style={styles.coinItemSeparator} />}
      keyExtractor={({ id }) => id}
      ListFooterComponentStyle={styles.listFooter}
      estimatedItemSize={70}
    />
  );
}
