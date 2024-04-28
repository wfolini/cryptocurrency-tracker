import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text } from "@/core/components";
import CoinsList from "@/core/components/CoinsList";
import { useCoinsList } from "@/hooks/coins/useCoinsList";

import { styles } from "./CoinListScreen.styles";

export default function CoinsListScreen() {
  const insets = useSafeAreaInsets();
  const { coins } = useCoinsList({ coinIds: null });

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.topSection}>
        <Text variant="headline">Hi, Walter</Text>
        <Text variant="caption">Welcome back</Text>
      </View>
      <CoinsList data={coins} style={styles.coinsListSection} />
    </ScrollView>
  );
}
