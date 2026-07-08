import { NativeTabs } from "expo-router/unstable-native-tabs";

import { theme } from "@/core/theme";

export default function TabLayout() {
  return (
    <NativeTabs
      tintColor={theme.colors.primary}
      backgroundColor={theme.colors.background}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="coin-search">
        <NativeTabs.Trigger.Icon sf="chart.bar.fill" md="bar_chart" />
        <NativeTabs.Trigger.Label>Market</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
