import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

import { Text } from "@/core/components";

import { styles } from "./PriceChangeLabel.styles";

type PriceChangeLabelProps = {
  priceChange?: number;
  timeFrame: string;
};

export default function PriceChangeLabel({
  priceChange,
  timeFrame,
}: PriceChangeLabelProps) {
  const isBullish = !!priceChange && priceChange > 0;
  const isBearish = !!priceChange && priceChange < 0;

  return priceChange ? (
    <View style={styles.container}>
      <Text>{`${timeFrame}`}</Text>
      <Text>
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
