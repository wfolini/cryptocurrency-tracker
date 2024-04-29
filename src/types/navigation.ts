import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import type { MaterialBottomTabScreenProps } from "react-native-paper/react-navigation";

export type HomeTabParamList = {
  Home: undefined;
  Market: undefined;
};
export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  FavoriteCoins: undefined;
  CoinSearch: undefined;
  CoinDetail: { coinId: string; coinName: string };
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    MaterialBottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
