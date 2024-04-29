import { DefaultTheme as reactNavigationDefaultTheme } from "@react-navigation/native";
import { Platform, type StyleProp, type TextStyle } from "react-native";
import { MD2LightTheme } from "react-native-paper";

import colors from "@/constants/colors";

const paperFontFamilyStyles = {
  regular: {
    fontFamily: "Poppins_400Regular",
    fontWeight: "400",
  },
  medium: {
    fontFamily: "Poppins_500Medium",
    fontWeight: "500",
  },
  light: {
    fontFamily: "Poppins_300Light",
    fontWeight: "300",
  },
  thin: {
    fontFamily: "Poppins_100Thin",
    fontWeight: "100",
  },
};

const customFontVariantsStyles = {
  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "Poppins_600SemiBold",
    fontWeight: "600",
  },
  title: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Poppins_600SemiBold",
    fontWeight: "600",
  },
  subheading: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Poppins_600SemiBold",
    fontWeight: "600",
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    fontWeight: "500",
  },
  caption: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    fontWeight: "400",
    color: colors.darkGray,
  },
};

const fontStyles = {
  ...paperFontFamilyStyles,
  ...customFontVariantsStyles,
} as const;

export type FontVariant = keyof typeof fontStyles;

const paperTheme = {
  ...MD2LightTheme,
  fonts: Platform.select({
    ios: fontStyles,
    android: fontStyles,
  }) as Record<FontVariant, StyleProp<TextStyle>>,
  colors: {
    ...MD2LightTheme.colors,
    primary: colors.black,
    accent: colors.darkGray,
    background: colors.white,
    surface: colors.white,
    error: colors.red,
    favorite: colors.red,
    text: colors.black,
    onSurface: colors.lightGray,
    notification: colors.green,
    bullish: colors.green,
    bearish: colors.red,
  },
};

export type Theme = typeof paperTheme;

export const theme = {
  ...reactNavigationDefaultTheme,
  ...paperTheme,
  colors: {
    ...reactNavigationDefaultTheme.colors,
    ...paperTheme.colors,
  },
};
