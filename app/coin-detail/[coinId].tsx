import { GestureHandlerRootView } from "react-native-gesture-handler";

import CoinDetailScreen from "@/screens/coin-detail";

export default function CoinDetailRoute() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<CoinDetailScreen />
		</GestureHandlerRootView>
	);
}
