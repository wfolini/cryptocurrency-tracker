import { FontAwesome } from "@expo/vector-icons";
import { View, type ViewStyle } from "react-native";

import { Text } from "@/components";

import { styles } from "./PriceChangeLabel.styles";

type PriceChangeLabelProps = {
  priceChange?: number;
  timeFrame?: string;
  style?: ViewStyle;
};

export default function PriceChangeLabel({
  priceChange,
  timeFrame,
  style,
}: PriceChangeLabelProps) {
  const isBullish = !!priceChange && priceChange > 0;
  const isBearish = !!priceChange && priceChange < 0;
  const price = priceChange ? `${Math.abs(priceChange).toFixed(2)}%` : "-";

  return (
    <View style={[styles.container, style]}>
      {timeFrame ? <Text variant="caption">{timeFrame}</Text> : null}
      <Text style={styles.label}>
        {isBullish || isBearish ? (
          <FontAwesome
            style={[
              styles.arrow,
              isBullish && styles.bullish,
              isBearish && styles.bearish,
            ]}
            name={isBullish ? "caret-up" : "caret-down"}
          />
        ) : null}
        <Text>{` ${price}`}</Text>
      </Text>
    </View>
  );
}
