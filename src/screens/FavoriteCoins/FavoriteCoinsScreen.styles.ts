import { StyleSheet } from "react-native";

import colors from "@/constants/colors";

const IMAGE_SIZE = 50;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  topSection: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    gap: 5,
  },
  avatar: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    borderColor: colors.white,
    borderWidth: 1,
    marginBottom: 20,
  },
  coinsListSection: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  listHeader: {
    marginBottom: 10,
  },
});
