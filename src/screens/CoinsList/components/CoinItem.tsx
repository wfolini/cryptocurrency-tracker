import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "@/core/components";

import type { CoinMarket } from "@/types/coins";
import type { RootStackNavigationProp } from "@/types/navigation";

import { formatCurrency } from "@/utils/coins";
import CoinImage from "../../../core/components/CoinImage";
import { styles } from "./CoinItem.styles";
import { PriceChangeLabel } from "./PriceChangeLabel";

type CoinItemProps = {
  coin: CoinMarket;
};

export default function CoinItem({ coin }: CoinItemProps) {
  const navigation = useNavigation<RootStackNavigationProp<"CoinDetail">>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("CoinDetail", {
          coinId: coin.id,
          coinName: coin.name,
        })
      }
    >
      <>
        <CoinImage source={coin.image} />
        <View style={styles.leftContent}>
          <Text variant="subheading">{coin.name}</Text>
          <Text variant="caption">{coin.symbol.toUpperCase()}</Text>
          <Text variant="caption">{`Rank #${coin.market_cap_rank}`}</Text>
        </View>
        <View style={styles.rightContent}>
          <Text variant="subheading" style={styles.rightContentText}>
            {formatCurrency(coin.current_price)}
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
      </>
    </TouchableOpacity>
  );
}
