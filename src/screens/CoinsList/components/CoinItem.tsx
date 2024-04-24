import { View } from "react-native";
import { Text } from "react-native-paper";

import type { Coin } from "@/types/coin";

import CoinImage from "./CoinImage";
import { styles } from "./CoinItem.styles";
import { PriceChangeLabel } from "./PriceChangeLabel";

type CoinItemProps = {
  coin: Coin;
};

export default function CoinItem({ coin }: CoinItemProps) {
  return (
    <View style={styles.container}>
      <CoinImage source={coin.image} />
      <View style={styles.leftContent}>
        <Text variant="titleMedium">{coin.name}</Text>
        <Text variant="labelSmall">{coin.symbol.toUpperCase()}</Text>
        <Text variant="labelSmall">{`Rank #${coin.market_cap_rank}`}</Text>
      </View>
      <View style={styles.rightContent}>
        <Text variant="titleMedium" style={styles.rightContentText}>
          {`$ ${coin.current_price}`}
        </Text>
        <PriceChangeLabel
          priceChange={coin.market_cap_change_percentage_24h}
          timeFrame="24h"
        />
        <PriceChangeLabel
          priceChange={coin.price_change_percentage_7d_in_currency}
          timeFrame="7d"
        />
      </View>
    </View>
  );
}
