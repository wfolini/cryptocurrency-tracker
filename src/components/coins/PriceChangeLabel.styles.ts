import { StyleSheet } from "react-native";

import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 2,
  },
  label: {
    width: 60,
    textAlign: "right",
  },
  arrow: {
    fontSize: 14,
  },
  bullish: {
    color: colors.green,
  },
  bearish: {
    color: colors.red,
  },
});
