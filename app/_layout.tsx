import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppLoader } from "@/components";
import { theme } from "@/core/theme";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppLoader>
        <QueryClientProvider client={queryClient}>
          <PaperProvider theme={theme}>
            <StatusBar style="dark" />
            <Stack
              screenOptions={{
                contentStyle: {
                  backgroundColor: theme.colors.background,
                },
                headerStyle: {
                  backgroundColor: theme.colors.background,
                },
                headerTintColor: theme.colors.primary,
                headerTitleStyle: {
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                },
                headerShadowVisible: false,
              }}
            >
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="coin-detail/[coinId]"
                options={{
                  presentation: "card",
                  headerBackTitle: "Back",
                }}
              />
            </Stack>
          </PaperProvider>
        </QueryClientProvider>
      </AppLoader>
    </SafeAreaProvider>
  );
}
