import { StyleSheet } from "react-native";

import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    gap: 30,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },
  headerGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  graphSection: {
    height: 200,
  },
  infoSection: {
    marginHorizontal: 20,
    gap: 10,
  },
  statisticList: {
    height: 223,
  },
  statisticSeparator: {
    height: 1,
    backgroundColor: colors.lightGray,
    marginVertical: 10,
  },
});
