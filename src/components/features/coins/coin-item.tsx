import { Link } from "expo-router";
import { Pressable, View } from "react-native";

import { Text } from "@/components";
import type { CoinMarket } from "@/types/coins";
import { formatCurrency } from "@/utils/coins";

import CoinImage from "./coin-image";
import { styles } from "./coin-item.styles";
import PriceChangeLabel from "./price-change-label";

type CoinItemProps = {
  coin: CoinMarket;
  simple?: boolean;
};

export default function CoinItem({ coin, simple }: CoinItemProps) {
  const href = {
    pathname: "/coin-detail/[coinId]" as const,
    params: {
      coinId: coin.id,
      coinName: coin.name,
    },
  };

  return (
    <Link href={href} asChild style={styles.container}>
      <Pressable style={[simple && styles.simple]}>
        <CoinImage source={coin.image} />
        <View style={styles.leftContent}>
          <Text variant="subheading" ellipsizeMode="tail" numberOfLines={1}>
            {coin.name}
          </Text>
          <Text variant="caption">{coin.symbol.toUpperCase()}</Text>
          {!simple && coin.market_cap_rank ? (
            <Text variant="caption">{`Rank #${coin.market_cap_rank}`}</Text>
          ) : null}
        </View>
        <View style={styles.rightContent}>
          <Text variant="subheading" style={styles.rightContentText}>
            {formatCurrency(coin.current_price)}
          </Text>
          <PriceChangeLabel
            priceChange={coin.market_cap_change_percentage_24h}
            timeFrame={!simple ? "24h" : undefined}
          />
          {!simple ? (
            <PriceChangeLabel
              priceChange={coin.price_change_percentage_7d_in_currency}
              timeFrame="7d"
            />
          ) : null}
        </View>
      </Pressable>
    </Link>
  );
}
