import { useState } from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";
import { Button, Menu, useTheme } from "react-native-paper";

import { CURRENCIES } from "@/constants/coins";
import type { Theme } from "@/core/theme";
import { useFavoriteCoinsStore } from "@/hooks/coins/useFavoriteCoinsStore";
import type { Currency } from "@/types/coins";

import { styles } from "./CoinActionButtons.styles";
import { useNavigation } from "@react-navigation/native";

type CoinActionButtonsProps = {
  coinId: string;
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  style?: StyleProp<ViewStyle>;
};

export default function CoinActionButtons({
  selectedCurrency,
  onCurrencyChange,
  style,
  coinId
}: CoinActionButtonsProps) {
  const theme = useTheme<Theme>();
  const { isCoinFavorite, toggleFavoriteCoin } = useFavoriteCoinsStore();
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onChange = (currency: Currency) => {
    onCurrencyChange(currency);
    closeMenu();
  };
  return (
    <View style={style}>
      <Button
        icon={isCoinFavorite(coinId) ? "heart" : "heart-outline"}
        mode="contained-tonal"
        compact
        onPress={() => toggleFavoriteCoin(coinId)}
        labelStyle={styles.labelStyle}
        textColor={
          isCoinFavorite(coinId) ? theme.colors.favorite : theme.colors.primary
        }
        buttonColor={theme.colors.onSurface}
      >
        {""}
      </Button>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            icon="chevron-down"
            mode="contained-tonal"
            onPress={openMenu}
            compact
            contentStyle={styles.menuButton}
            buttonColor={theme.colors.onSurface}
            labelStyle={styles.labelStyle}
          >
            {selectedCurrency}
          </Button>
        }
      >
        {CURRENCIES.map((currency) => (
          <Menu.Item
            key={currency}
            onPress={() => onChange(currency)}
            title={`${currency.toLocaleUpperCase()}`}
          />
        ))}
      </Menu>
    </View>
  );
}
