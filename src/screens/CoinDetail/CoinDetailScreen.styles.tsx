import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 20,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  statisticSection: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
  },
  statisticRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statisticSeparator: {
    height: 1,
    backgroundColor: colors.lightGray,
    marginVertical: 10,
  },
});
