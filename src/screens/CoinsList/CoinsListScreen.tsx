import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useCoinsList } from "@/hooks/coins/useCoinsList";
import { styles } from "./CoinListScreen.styles";
import CoinsList from "./components/CoinsList";

export default function CoinsListScreen() {
  const insets = useSafeAreaInsets();
  const { coins } = useCoinsList();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <Text variant="headlineLarge">Hi, Walter</Text>
        <Text variant="titleSmall">Welcome back</Text>
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
