import "@testing-library/react-native/extend-expect";

// Import React Native polyfills for MSW
import "react-native-url-polyfill/auto";
import "fast-text-encoding";

// Setup react-native-worklets mock (required by reanimated 4.x)
jest.mock("react-native-worklets", () =>
	require("react-native-worklets/src/mock"),
);

// Setup react-native-reanimated mock using official mock
jest.mock("react-native-reanimated", () =>
	require("react-native-reanimated/mock"),
);

jest.mock("@react-native-async-storage/async-storage", () =>
	require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";
jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);

require("@shopify/flash-list/jestSetup");

import { server } from "@/mocks/api/node";

beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
