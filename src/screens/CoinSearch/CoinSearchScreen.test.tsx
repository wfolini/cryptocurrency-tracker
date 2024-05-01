import { fireEvent, screen, waitFor } from "@testing-library/react-native";

import { renderWithWrapper } from "@/test/utils";

import CoinSearchScreen from "./CoinSearchScreen";

describe("CoinSearchScreen", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test("display all available currencies in case no search input is entered", async () => {
    renderWithWrapper(<CoinSearchScreen />);

    await waitFor(() => {
      expect(screen.getByText(/Cryptocurrencies/)).toBeOnTheScreen();
      expect(screen.getByText(/Bitcoin/)).toBeOnTheScreen();
      expect(screen.getByText(/Ethereum/)).toBeOnTheScreen();
    });
  });

  test("display currencies that matches with the search input", async () => {
    renderWithWrapper(<CoinSearchScreen />);

    fireEvent.changeText(
      screen.getByPlaceholderText("Search cryptocurrency"),
      "bitcoin"
    );

    await waitFor(() => {
      expect(screen.getByText(/Results/)).toBeOnTheScreen();
      expect(screen.getByText(/Bitcoin/)).toBeOnTheScreen();
      expect(screen.queryByText(/Ethereum/)).not.toBeOnTheScreen();
    });
  });

  test("display not found status when entering a search text that does not match any cryptocurrency", async () => {
    renderWithWrapper(<CoinSearchScreen />);

    fireEvent.changeText(
      screen.getByPlaceholderText("Search cryptocurrency"),
      "Unknown cryptocurrency"
    );

    await waitFor(() => {
      expect(screen.getByText(/Results/)).toBeOnTheScreen();
      expect(screen.getByText(/No matches found/)).toBeOnTheScreen();
    });
  });
});
