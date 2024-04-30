import "@testing-library/react-native/extend-expect";

import { server } from "@/mocks/api/node";

require("react-native-reanimated").setUpTests();

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
