import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "@/constants/colors";
import CoinDetailScreen from "@/screens/CoinDetail/CoinDetailScreen";
import CoinsListScreen from "@/screens/CoinsList/CoinsListScreen";
import type { RootStackParamList } from "@/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

// TODO: Add custom theme
const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    primary: colors.black,
  },
};

function Navigator() {
  return (
    <NavigationContainer theme={defaultTheme}>
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
  );
}

export default Navigator;
