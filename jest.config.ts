import type { Config } from "jest";

const config: Config = {
	preset: "jest-expo",
	setupFiles: [
		"@shopify/react-native-skia/jestSetup.js",
		"./node_modules/react-native-gesture-handler/jestSetup.js",
	],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	transformIgnorePatterns: [
		"node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|until-async|headers-polyfill|strict-event-emitter|@mswjs)",
	],
};

export default config;
