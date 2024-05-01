import { render } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: Number.POSITIVE_INFINITY,
      },
    },
  });

const Wrapper = ({
  children,
  client,
}: {
  children: React.ReactNode;
  client: QueryClient;
}) => (
  <QueryClientProvider client={client}>
    <NavigationContainer>{children}</NavigationContainer>
  </QueryClientProvider>
);

export function renderWithWrapper(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <Wrapper client={testQueryClient}>{ui}</Wrapper>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(<Wrapper client={testQueryClient}>{rerenderUi}</Wrapper>),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <Wrapper client={testQueryClient}>{children}</Wrapper>
  );
}
