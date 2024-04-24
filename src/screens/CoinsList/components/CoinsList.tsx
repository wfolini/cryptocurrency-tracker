import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View, type ViewStyle, type StyleProp } from "react-native";
import { Text } from "react-native-paper";

import mockCoinsData from "@/mocks/coinsData.json";
import type { Coin } from "@/types/coin";

import CoinItem from "./CoinItem";
import { styles } from "./CoinsList.styles";

const DATA: Coin[] = mockCoinsData;

type CoinsListProps = {
  style?: StyleProp<ViewStyle>;
};

export default function CoinsList({ style }: CoinsListProps) {
  return (
    <View style={style}>
      <Text variant="titleLarge" style={styles.title}>
        Market
      </Text>
      <FlashList
        data={DATA}
        renderItem={({ item }) => <CoinItem coin={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        estimatedItemSize={10}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}
