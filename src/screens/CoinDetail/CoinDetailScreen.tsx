import { FlashList, type ListRenderItemInfo } from "@shopify/flash-list";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

import CoinImage from "@/core/components/CoinImage";
import { useCoinDetail } from "@/hooks/coins/useCoinDetail";
import type { RootStackScreenProps } from "@/types/navigation";
import { styles } from "./CoinDetailScreen.styles";
import CoinGraph from "./components/CoinGraph";
import {
  type CoinStatisticData,
  useCoinStatisticData,
} from "./hooks/useCoinStatisticData";

function CoinStatistic({
  item: { label, value },
}: ListRenderItemInfo<CoinStatisticData>) {
  return (
    <View style={styles.statisticRow}>
      <Text variant="bodyLarge">{label}</Text>
      <Text variant="titleMedium">{value}</Text>
    </View>
  );
}

export default function CoinDetailScreen({
  route,
}: RootStackScreenProps<"CoinDetail">) {
  const { coinId } = route.params;
  const currency = "usd";

  const { isFetching, coinData } = useCoinDetail(coinId);
  const coinStatisticData = useCoinStatisticData(
    coinData?.market_data,
    currency
  );

  //  TODO: Improve loading state UI
  return isFetching ? null : (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerSection}>
        <CoinImage source={coinData?.image?.large} />
        <Text variant="headlineSmall">{coinData?.symbol?.toUpperCase()}</Text>
      </View>
      <CoinGraph
        coinId={coinId}
        currentPrice={coinData?.market_data?.current_price}
        currency={currency}
      />
      <View style={styles.statisticSection}>
        <Text variant="titleMedium">Statistic</Text>
        <FlashList
          data={coinStatisticData}
          renderItem={CoinStatistic}
          keyExtractor={(item) => item.label}
          ItemSeparatorComponent={() => (
            <View style={styles.statisticSeparator} />
          )}
          estimatedItemSize={coinStatisticData.length}
        />
      </View>
    </ScrollView>
  );
}
