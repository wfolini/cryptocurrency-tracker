import type { Theme } from "@/core/theme";
import { ActivityIndicator as NativeActivityIndicator } from "react-native";
import { useTheme } from "react-native-paper";

export default function ActivityIndicator() {
	const theme = useTheme<Theme>();

	return <NativeActivityIndicator color={theme.colors.primary} />;
}
