import { useMemo } from "react";
import { View } from "react-native";
import { LineGraph } from "react-native-graph";
import { Text } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";

import colors from "@/constants/colors";
import { useCoinPriceHistory } from "@/hooks/coins/useCoinPriceHistory";
import type { CoinCurrentPrice } from "@/types/coins";
import { formatCurrency } from "@/utils/coins";

import { styles } from "./CoinGraph.styles";

type CoinGraphProps = {
  coinId: string;
  currency: string;
  currentPrice?: CoinCurrentPrice;
};

export default function CoinGraph({
  coinId,
  currency,
  currentPrice,
}: CoinGraphProps) {
  const { isFetching, coinPriceHistory } = useCoinPriceHistory({
    id: coinId,
    currency,
  });

  const isBullish =
    coinPriceHistory[0]?.value <
    coinPriceHistory[coinPriceHistory.length - 1]?.value;

  const graphGradientColors = useMemo(() => {
    return isBullish
      ? [colors.green, colors.lightGreen, colors.white]
      : [colors.red, colors.white];
  }, [isBullish]);

  return (
    <>
      <Text variant="headlineSmall" style={styles.priceHeading}>
        {formatCurrency(currentPrice?.[currency], currency)}
      </Text>
      <View style={styles.graphContainer}>
        {isFetching ? (
          <ActivityIndicator animating={true} color={colors.black} />
        ) : (
          <LineGraph
            style={styles.graph}
            points={coinPriceHistory}
            animated={true}
            color={isBullish ? colors.green : colors.red}
            enablePanGesture
            gradientFillColors={graphGradientColors}
            verticalPadding={30}
          />
        )}
      </View>
    </>
  );
}
