import { useState } from "react";
import { type StyleProp, View, type ViewStyle } from "react-native";
import { Button, Menu } from "react-native-paper";

import { CURRENCIES } from "@/constants/coins";
import type { Currency } from "@/types/coins";

type CurrencySelector = {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  style?: StyleProp<ViewStyle>;
};

export function CurrencySelector({
  selectedCurrency,
  onCurrencyChange,
  style,
}: CurrencySelector) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onChange = (currency: Currency) => {
    onCurrencyChange(currency);
    closeMenu();
  };
  return (
    <View style={style}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            icon="chevron-down"
            onPress={openMenu}
            uppercase
            compact
            contentStyle={{ flexDirection: "row-reverse" }}
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
