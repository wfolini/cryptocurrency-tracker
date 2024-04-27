import { StyleSheet } from "react-native";

import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 95,
    justifyContent: "space-between",
  },
  bullish: {
    color: colors.green,
  },
  bearish: {
    color: colors.red,
  },
});
