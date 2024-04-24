import { FlashList } from "@shopify/flash-list";
import React from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";
import { Text } from "react-native-paper";

import type { Coin } from "@/types/coin";

import CoinItem from "./CoinItem";
import { styles } from "./CoinsList.styles";

type CoinsListProps = {
  coins?: Coin[];
  style?: StyleProp<ViewStyle>;
};

export default function CoinsList({ coins, style }: CoinsListProps) {
  return (
    <View style={style}>
      <Text variant="titleLarge" style={styles.title}>
        Market
      </Text>
      <FlashList
        data={coins}
        renderItem={({ item }) => <CoinItem coin={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        estimatedItemSize={10}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}
