import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text } from "@/core/components";
import { useCoinsList } from "@/hooks/coins/useCoinsList";

import { styles } from "./CoinListScreen.styles";
import CoinsList from "./components/CoinsList";

export default function CoinsListScreen() {
  const insets = useSafeAreaInsets();
  const { coins } = useCoinsList();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <Text variant="headline">Hi, Walter</Text>
        <Text variant="caption">Welcome back</Text>
      </View>
      <CoinsList
        coins={coins}
        style={[
          styles.coinsListSection,
          {
            paddingBottom: insets.bottom,
          },
        ]}
      />
    </ScrollView>
  );
}
