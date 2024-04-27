import { useState } from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";
import { Button, Menu, useTheme } from "react-native-paper";

import { CURRENCIES } from "@/constants/coins";
import type { Currency } from "@/types/coins";

import { styles } from "./CoinActionButtons.styles";

type CoinActionButtonsProps = {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  style?: StyleProp<ViewStyle>;
};

export function CoinActionButtons({
  selectedCurrency,
  onCurrencyChange,
  style,
}: CoinActionButtonsProps) {
  const theme = useTheme();

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
        icon="heart"
        mode="contained-tonal"
        onPress={() => {}} // TODO: Implement favorite feature
        compact
        labelStyle={styles.labelStyle}
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
