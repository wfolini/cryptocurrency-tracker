import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import type { ThemeProp } from "react-native-paper/lib/typescript/types";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import { theme } from "@/core/theme";
import CoinDetailScreen from "@/screens/CoinDetail/CoinDetailScreen";
import CoinSearch from "@/screens/CoinSearch/CoinSearchScreen";
import FavoriteCoinsScreen from "@/screens/FavoriteCoins/FavoriteCoinsScreen";
import type { HomeTabParamList, RootStackParamList } from "@/types/navigation";

const Tab = createMaterialBottomTabNavigator<HomeTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Poppins_600SemiBold",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="FavoriteCoins"
        options={{
          title: "",
          headerShown: false,
        }}
        component={FavoriteCoinsScreen}
      />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetailScreen}
        options={({ route }) => ({
          title: route.params.coinName,
        })}
      />
    </Stack.Navigator>
  );
}

function MarketStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Poppins_600SemiBold",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="CoinSearch"
        component={CoinSearch}
        options={{
          title: "",
          headerShown: false,
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
  );
}

export default function Navigator() {
  return (
    <PaperProvider theme={theme as ThemeProp}>
      <NavigationContainer theme={theme}>
        <StatusBar style="dark" />
        <Tab.Navigator
          barStyle={{ backgroundColor: theme.colors.background }}
          activeColor={theme.colors.primary}
          inactiveColor={theme.colors.accent}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: (props) => (
                <Feather name="home" size={22} {...props} />
              ),
            }}
          />
          <Tab.Screen
            name="Market"
            component={MarketStack}
            options={{
              tabBarIcon: (props) => (
                <Feather name="bar-chart-2" size={22} {...props} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
