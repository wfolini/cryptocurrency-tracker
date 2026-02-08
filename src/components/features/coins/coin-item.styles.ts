import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    gap: 15,
  },
  simple: {
    height: 60,
  },
  leftContent: {
    flex: 1,
    gap: 2,
  },
  rightContent: {
    marginLeft: "auto",
    alignItems: "flex-end",
    gap: 2,
  },
  rightContentText: {
    textAlign: "right",
  },
});
