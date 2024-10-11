import type { Text as DefaultText, StyleProp, TextStyle } from "react-native";
import { Text as PaperText, useTheme } from "react-native-paper";

import type { FontVariant, Theme } from "@/core/theme";
import { withAnimated } from "./withAnimated";

const AnimatedText = withAnimated(PaperText);

type TextProps = React.ComponentProps<typeof DefaultText> & {
  style?: StyleProp<TextStyle>;
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
