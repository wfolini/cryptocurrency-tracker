import { StyleSheet } from "react-native";

import colors from "@/constants/colors";

const IMAGE_SIZE = 50;

export const styles = StyleSheet.create({
  topSectionOld: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    gap: 5,
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
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
});
