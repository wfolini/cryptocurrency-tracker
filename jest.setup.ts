import "@testing-library/react-native/extend-expect";

require("react-native-reanimated").setUpTests();

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";
jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);

require("@shopify/flash-list/jestSetup");

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

import { server } from "@/mocks/api/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
