// Diagnóstico para problemas de splash screen
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DiagnosticScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Diagnóstico de App</Text>
			<Text style={styles.text}>
				Si ves esto, el problema no es con expo-router
			</Text>
			<Text style={styles.text}>El problema puede estar en:</Text>
			<Text style={styles.text}>
				1. Configuración de fuentes (Google Fonts)
			</Text>
			<Text style={styles.text}>2. Configuración de tema</Text>
			<Text style={styles.text}>
				3. Componentes que se renderizan al iniciar
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	text: {
		fontSize: 16,
		marginBottom: 10,
		textAlign: "center",
	},
});
