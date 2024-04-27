import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { PaperProvider } from "react-native-paper";

import { theme } from "@/core/theme";
import CoinDetailScreen from "@/screens/CoinDetail/CoinDetailScreen";
import CoinsListScreen from "@/screens/CoinsList/CoinsListScreen";
import type { RootStackParamList } from "@/types/navigation";
import type { ThemeProp } from "react-native-paper/lib/typescript/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  // TODO: Improve it with splash screen
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PaperProvider theme={theme as ThemeProp}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="CoinsList">
          <Stack.Screen
            name="CoinsList"
            component={CoinsListScreen}
            options={{
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="CoinDetail"
            component={CoinDetailScreen}
            options={({ route }) => ({
              title: route.params.coinName,
              headerShadowVisible: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
