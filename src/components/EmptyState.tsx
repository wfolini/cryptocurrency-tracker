import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

import Text from "./Text";
import { styles } from "./EmptyState.styles";

type EmptyStateProps = {
  icon: React.ComponentProps<typeof Feather>["name"];
  title: string;
  caption: string;
};

export default function EmptyState({ icon, title, caption }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={30} />
      <Text variant="subheading">{title}</Text>
      <Text variant="caption" style={styles.captionText}>
        {caption}
      </Text>
    </View>
  );
}
