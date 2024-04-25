import { StyleSheet } from "react-native";

import colors from "@/constants/colors";

const IMAGE_SIZE = 44;

const imageSizeStyle = {
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  borderRadius: IMAGE_SIZE / 2,
  borderColor: colors.lightGray,
  borderWidth: 1,
};

export const styles = StyleSheet.create({
  defaultCoinContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    ...imageSizeStyle,
  },
  defaultCoin: {
    color: colors.darkGray,
  },
  coinImage: {
    ...imageSizeStyle,
  },
});
