import type { Text as DefaultText, StyleProp, TextStyle } from "react-native";
import { Text as PaperText, useTheme } from "react-native-paper";

import type { FontVariant, Theme } from "@/core/theme";

type TextProps = React.ComponentProps<typeof DefaultText> & {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  variant?: FontVariant;
};

function Text({ children, style, variant = "regular", ...props }: TextProps) {
  const theme = useTheme<Theme>();

  return (
    <PaperText style={[theme.fonts?.[variant], style]} {...props}>
      {children}
    </PaperText>
  );
}

export default Text;
