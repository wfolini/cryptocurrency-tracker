import { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { LineGraph } from "react-native-graph";

import { ActivityIndicator, Text } from "@/components";
import { PriceChangeLabel } from "@/components/coins";
import colors from "@/constants/colors";
import { useCoinPriceHistory } from "@/hooks/coins/useCoinPriceHistory";
import type { CoinCurrentPrice, Currency } from "@/types/coins";
import { formatCurrency } from "@/utils/coins";

import { styles } from "./CoinGraph.styles";

type CoinGraphProps = {
  coinId: string;
  currency: Currency;
  currentPrice?: CoinCurrentPrice;
  priceChange30d?: number;
};

export default function CoinGraph({
  coinId,
  currency,
  currentPrice,
  priceChange30d,
}: CoinGraphProps) {
  const [price, setPrice] = useState<number | undefined>(
    currentPrice?.[currency]
  );

  useEffect(() => {
    setPrice(currentPrice?.[currency]);
  }, [currentPrice, currency]);

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
      <View style={styles.header}>
        <Text variant="headline">{formatCurrency(price, currency)}</Text>
        <PriceChangeLabel
          priceChange={priceChange30d}
          timeFrame="30d"
          style={styles.priceChangeLabel}
        />
      </View>
      <View style={styles.graphContainer}>
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <LineGraph
            style={styles.graph}
            points={coinPriceHistory}
            animated={true}
            color={isBullish ? colors.green : colors.red}
            enablePanGesture
            gradientFillColors={graphGradientColors}
            verticalPadding={30}
            onPointSelected={(price) => setPrice(price.value)}
            onGestureEnd={() => setPrice(currentPrice?.[currency])}
          />
        )}
      </View>
    </>
  );
}
