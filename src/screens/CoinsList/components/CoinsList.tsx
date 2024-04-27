import { FlashList } from "@shopify/flash-list";
import React from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";

import { Text } from "@/core/components";
import type { CoinMarket } from "@/types/coins";

import CoinItem from "./CoinItem";
import { styles } from "./CoinsList.styles";

type CoinsListProps = {
  coins?: CoinMarket[];
  style?: StyleProp<ViewStyle>;
};

export default function CoinsList({ coins, style }: CoinsListProps) {
  return (
    <View style={style}>
      <Text variant="title" style={styles.title}>
        Market
      </Text>
      <FlashList
        data={coins}
        renderItem={({ item }) => <CoinItem coin={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        estimatedItemSize={75}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}
