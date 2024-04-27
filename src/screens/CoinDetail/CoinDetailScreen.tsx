import { FlashList, type ListRenderItemInfo } from "@shopify/flash-list";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "@/core/components";

import { DEFAULT_CURRENCY } from "@/constants/coins";
import CoinImage from "@/core/components/CoinImage";
import { useCoinDetail } from "@/hooks/coins/useCoinDetail";
import type { Currency } from "@/types/coins";
import type { RootStackScreenProps } from "@/types/navigation";

import { styles } from "./CoinDetailScreen.styles";
import CoinGraph from "./components/CoinGraph";
import { CurrencySelector } from "./components/CurrencySelector";
import {
  type CoinStatisticData,
  useCoinStatisticData,
} from "./hooks/useCoinStatisticData";

function CoinStatistic({
  item: { label, value },
}: ListRenderItemInfo<CoinStatisticData>) {
  return (
    <View style={styles.statisticRow}>
      <Text>{label}</Text>
      <Text variant="label">{value}</Text>
    </View>
  );
}

export default function CoinDetailScreen({
  route,
}: RootStackScreenProps<"CoinDetail">) {
  const { coinId } = route.params;

  const [currency, setCurrency] = useState<Currency>(DEFAULT_CURRENCY);

  const { isFetching, coinData } = useCoinDetail(coinId);
  const coinStatisticData = useCoinStatisticData(
    coinData?.market_data,
    currency
  );

  const handleCurrencyChange = (currency: Currency) => {
    setCurrency(currency);
  };

  //  TODO: Improve loading state UI
  return isFetching ? null : (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerSection}>
        <CoinImage source={coinData?.image?.large} />
        <Text variant="title">{coinData?.symbol?.toUpperCase()}</Text>
        <CurrencySelector
          selectedCurrency={currency}
          onCurrencyChange={handleCurrencyChange}
          style={{ marginLeft: "auto" }}
        />
      </View>
      <CoinGraph
        coinId={coinId}
        currentPrice={coinData?.market_data?.current_price}
        currency={currency}
      />
      <View style={styles.statisticSection}>
        <Text variant="title">Statistic</Text>
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
