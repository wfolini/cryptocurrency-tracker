import { useTheme } from "react-native-paper";
import { ActivityIndicator as NativeActivityIndicator } from "react-native";

import type { Theme } from "@/core/theme";

export default function ActivityIndicator() {
  const theme = useTheme<Theme>();

  return <NativeActivityIndicator color={theme.colors.primary} />;
}
