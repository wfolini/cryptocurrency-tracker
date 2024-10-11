import { Image } from "expo-image";
import { useTheme } from "react-native-paper";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Text } from "@/components";
import type { Theme } from "@/core/theme";

import { styles } from "./Header.styles";

export const MAX_HEIGHT = 250;
export const MIN_HEIGHT = 120;
export const THRESHOLD = 250;

export default function Header({ offsetY }: { offsetY: SharedValue<number> }) {
  const theme = useTheme<Theme>();

  const headerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          offsetY.value,
          [-MAX_HEIGHT, -MIN_HEIGHT],
          [0, -(MAX_HEIGHT - MIN_HEIGHT)],
          "clamp"
        ),
      },
    ],
  }));

  const avatarAndSubTitleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      offsetY.value,
      [-MAX_HEIGHT, -(MAX_HEIGHT - MIN_HEIGHT)],
      [1, 0],
      "clamp"
    ),
    transform: [
      {
        translateY: interpolate(
          offsetY.value,
          [-MAX_HEIGHT, -MIN_HEIGHT],
          [0, 20],
          "clamp"
        ),
      },
    ],
  }));

  const mainTitleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          offsetY.value,
          [-MAX_HEIGHT, -MIN_HEIGHT],
          [0, 50],
          "clamp"
        ),
      },
    ],
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: theme.colors.onSurface },
        headerStyle,
      ]}
    >
      <Animated.View style={avatarAndSubTitleStyle}>
        <Image
          style={styles.avatar}
          source={"https://github.com/wfolini.png"}
          contentFit="cover"
          transition={300}
        />
      </Animated.View>

      <Text style={mainTitleStyle} variant="display">
        Hi, Walter
      </Text>
      <Animated.View style={avatarAndSubTitleStyle}>
        <Text>Welcome back</Text>
      </Animated.View>
    </Animated.View>
  );
}
