import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "@/constants/colors";
import CoinsListScreen from "@/screens/CoinsList/CoinsListScreen";

const Stack = createNativeStackNavigator();

// TODO: Add custom theme
const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

function Navigator() {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator initialRouteName="CoinList">
        <Stack.Screen
          name="CoinsList"
          component={CoinsListScreen}
          options={{
            title: "",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
