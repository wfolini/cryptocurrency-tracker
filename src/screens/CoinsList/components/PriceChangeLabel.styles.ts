import { StyleSheet } from "react-native";

import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 80,
    justifyContent: "space-between",
  },
  bullish: {
    color: colors.green,
  },
  bearish: {
    color: colors.red,
  },
});
