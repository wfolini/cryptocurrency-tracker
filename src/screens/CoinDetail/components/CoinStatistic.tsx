import type { ListRenderItemInfo } from "@shopify/flash-list";
import { View } from "react-native";

import { Text } from "@/components";
import type { CoinStatisticData } from "@/screens/CoinDetail/hooks/useCoinStatisticData";

import { styles } from "./CoinStatistic.styles";

export function CoinStatistic({
  item: { label, value },
}: ListRenderItemInfo<CoinStatisticData>) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Text variant="label">{value}</Text>
    </View>
  );
}
