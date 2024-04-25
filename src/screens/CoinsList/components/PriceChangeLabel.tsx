import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { styles } from "./PriceChangeLabel.styles";

type PriceChangeLabelProps = {
  priceChange?: number;
  timeFrame: string;
};

export function PriceChangeLabel({
  priceChange,
  timeFrame,
}: PriceChangeLabelProps) {
  const isBullish = !!priceChange && priceChange > 0;
  const isBearish = !!priceChange && priceChange < 0;

  return priceChange ? (
    <View style={styles.container}>
      <Text variant="labelSmall">{`${timeFrame}`}</Text>
      <Text variant="labelSmall">
        {isBullish || isBearish ? (
          <FontAwesome
            style={[isBullish && styles.bullish, isBearish && styles.bearish]}
            name={isBullish ? "caret-up" : "caret-down"}
          />
        ) : null}
        <Text>{` ${priceChange?.toFixed(2)}%`}</Text>
      </Text>
    </View>
  ) : null;
}
