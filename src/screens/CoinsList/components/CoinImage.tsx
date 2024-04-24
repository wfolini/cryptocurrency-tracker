import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { View } from "react-native";

import { styles } from "./CoinImage.styles";

type CoinImageProps = {
  source?: string;
};

export default function CoinImage({ source }: CoinImageProps) {
  return source ? (
    <Image
      style={styles.coinImage}
      source={source}
      contentFit="cover"
      transition={300}
    />
  ) : (
    <View style={styles.defaultCoinContainer}>
      <FontAwesome
        name="usd"
        size={24}
        color="black"
        style={styles.defaultCoin}
      />
    </View>
  );
}
