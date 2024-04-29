import { Text } from "@/core/components";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { styles } from "./EmptyFavoriteCoinsState.styles";

export function EmptyFavoriteCoinsState() {
  return (
    <View style={styles.container}>
      <Feather name="heart" size={30} />
      <Text variant="subheading">No favorite cryptocurrency saved</Text>
      <Text variant="caption" style={styles.captionText}>
        Click on the Heart button at the top of the detail screen of any
        cryptocurrency to start adding favorites
      </Text>
    </View>
  );
}
