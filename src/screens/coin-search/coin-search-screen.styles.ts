import { StyleSheet } from "react-native";

import colors from "@/constants/colors";

export const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: colors.white,
	},
	searchContainer: {
		gap: 20,
		marginHorizontal: 20,
		marginVertical: 10,
	},
	searchInput: {
		borderRadius: 4,
		height: 50,
	},
	searchInputUnderline: {
		height: 0,
	},
	listHeader: {
		marginBottom: 10,
	},
});
