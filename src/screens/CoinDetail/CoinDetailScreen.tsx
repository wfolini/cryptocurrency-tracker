import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { ScrollView, View } from "react-native";

import { ErrorEmptyState, Text } from "@/components";
import { CoinImage } from "@/components/coins";
import { DEFAULT_CURRENCY } from "@/constants/coins";
import { useCoinDetail } from "@/hooks/coins/useCoinDetail";
import type { Currency } from "@/types/coins";
import type { RootStackScreenProps } from "@/types/navigation";
import { removeHTMLTags } from "@/utils/coins";

import { styles } from "./CoinDetailScreen.styles";
import CoinActionButtons from "./components/CoinActionButtons";
import CoinGraph from "./components/CoinGraph";
import { CoinStatistic } from "./components/CoinStatistic";
import { useCoinStatisticData } from "./hooks/useCoinStatisticData";

export default function CoinDetailScreen({
  route
}: RootStackScreenProps<"CoinDetail">) {
  const { coinId, coinName } = route.params;

  const [currency, setCurrency] = useState<Currency>(DEFAULT_CURRENCY);
  const { coinData, isError } = useCoinDetail(coinId);
  const coinStatisticData = useCoinStatisticData(
    coinData?.market_data,
    currency
  );

  const handleCurrencyChange = (currency: Currency) => {
    setCurrency(currency);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.headerGroup}>
          <CoinImage source={coinData?.image?.large} />
          <Text variant="title">{coinData?.symbol?.toUpperCase()}</Text>
        </View>
        <CoinActionButtons
          coinId={coinId}
          selectedCurrency={currency}
          onCurrencyChange={handleCurrencyChange}
          style={styles.headerGroup}
        />
      </View>
      <View style={styles.graphSection}>
        {isError ? (
          <ErrorEmptyState />
        ) : (
          <CoinGraph
            coinId={coinId}
            currentPrice={coinData?.market_data?.current_price}
            currency={currency}
            priceChange30d={coinData?.market_data?.price_change_percentage_30d}
          />
        )}
      </View>
      <View style={styles.infoSection}>
        <Text variant="title">Statistic</Text>
        <View style={styles.statisticList}>
          <FlashList
            data={coinStatisticData}
            renderItem={CoinStatistic}
            keyExtractor={(item) => item.label}
            ItemSeparatorComponent={() => (
              <View style={styles.statisticSeparator} />
            )}
            scrollEnabled={false}
          />
        </View>
      </View>
      {coinData?.description?.en ? (
        <View style={styles.infoSection}>
          <Text variant="title">{`About ${coinName}`}</Text>
          <Text>{removeHTMLTags(coinData?.description?.en)}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}
