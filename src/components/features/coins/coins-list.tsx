import type { CoinMarket } from "@/types/coins";
import { FlashList, type FlashListRef, type ListRenderItem } from "@shopify/flash-list";
import { forwardRef, type ForwardedRef } from "react";
import { FlatList, View } from "react-native";
import Animated from "react-native-reanimated";

import CoinItem from "./coin-item";
import { styles } from "./coins-list.styles";

// Create animated FlashList for Reanimated worklets
const AnimatedFlashList = Animated.createAnimatedComponent(FlashList) as typeof FlashList;

type CoinsListProps = {
	simpleItem?: boolean;
	data?: CoinMarket[] | null;
} & Record<string, unknown>;

// FlashList no funciona bien en tests, usamos FlatList como fallback
const isTestEnv = process.env.NODE_ENV === "test";

function CoinsListInner(
	{ simpleItem, data, ...props }: CoinsListProps,
	ref: ForwardedRef<FlashListRef<CoinMarket>>,
) {
	if (isTestEnv) {
		return (
			<FlatList
				ref={ref as ForwardedRef<FlatList<CoinMarket>>}
				data={data || []}
				renderItem={({ item }) => <CoinItem simple={simpleItem} coin={item} />}
				keyExtractor={(item, index) => `${index}-${item.id}`}
				onEndReachedThreshold={0.3}
				ItemSeparatorComponent={() => <View style={styles.coinItemSeparator} />}
				ListFooterComponentStyle={styles.listFooter}
				contentContainerStyle={styles.listContent}
				{...props}
			/>
		);
	}

	const renderItem: ListRenderItem<CoinMarket> = ({ item }) => (
		<CoinItem simple={simpleItem} coin={item} />
	);

	return (
		<AnimatedFlashList<CoinMarket>
			ref={ref}
			data={data || []}
			renderItem={renderItem}
			keyExtractor={(item: CoinMarket, index: number) => `${index}-${item.id}`}
			onEndReachedThreshold={0.3}
			ItemSeparatorComponent={() => <View style={styles.coinItemSeparator} />}
			ListFooterComponentStyle={styles.listFooter}
			contentContainerStyle={styles.listContent}
			{...props}
		/>
	);
}

const CoinsList = forwardRef(CoinsListInner);

export default CoinsList;
