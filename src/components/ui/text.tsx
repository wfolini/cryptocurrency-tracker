import type { Text as DefaultText, StyleProp, TextStyle } from "react-native";
import { Text as PaperText, useTheme } from "react-native-paper";
import type { AnimatedStyle } from "react-native-reanimated";

import type { FontVariant, Theme } from "@/core/theme";
import { withAnimated } from "./with-animated";

const AnimatedText = withAnimated(PaperText);

type TextProps = React.ComponentProps<typeof DefaultText> & {
  style?: StyleProp<AnimatedStyle<TextStyle>>;
  children: React.ReactNode;
  variant?: FontVariant;
};

function Text({ children, style, variant = "regular", ...props }: TextProps) {
  const theme = useTheme<Theme>();

  return (
    <AnimatedText style={[theme.fonts?.[variant], style]} {...props}>
      {children}
    </AnimatedText>
  );
}

export default Text;
