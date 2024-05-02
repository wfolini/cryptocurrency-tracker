# CoinTrack

React Native app built with [Expo](https://github.com/expo/expo) that tracks the prices of various cryptocurrencies and allows users to view detailed information about each one. This project makes use of the [CoinGecko Public API](https://docs.coingecko.com/v3.0.1/reference/introduction).

<img src="https://github.com/wfolini/cryptocurrency-tracker/assets/12822259/5a11846d-4c81-457c-9f0d-5def36464723" height="500"><img src="https://github.com/wfolini/cryptocurrency-tracker/assets/12822259/588509ed-5ce1-4b18-bc2c-0f69ef9c7ad3" height="500"><img src="https://github.com/wfolini/cryptocurrency-tracker/assets/12822259/bc59aaca-98d9-4cee-af5b-ff4b4dada3df" height="500">

## Tech Stack

- [Bun](https://bun.sh/)
- [Biome.js](https://biomejs.dev/linter/)
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://reactnativepaper.com/)
- [React Native Skia](https://shopify.github.io/react-native-skia/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [FlashList](https://shopify.github.io/flash-list/)
- [react-native-graph](https://github.com/margelo/react-native-graph)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

## Before start

Make sure that you already have [Bun](https://bun.sh/docs/installation#installing) and the [Expo](https://docs.expo.io/get-started/installation) environment ready to use on your computer. [About Bun on Expo.](https://docs.expo.dev/guides/using-bun/)

And set the following environment variables in a `.env.local` file on the root folder of this project.

```env
EXPO_PUBLIC_COIN_MARKET_PUBLIC_API_URL=https://api.coingecko.com/api/v3

EXPO_PUBLIC_COIN_MARKET_AUTH_TOKEN=<YOUR_COINGECKO_AUTH_TOKEN>

# Optional, default is "usd"
EXPO_PUBLIC_DEFAULT_CURRENCY=usd
```

To create a new CoinGecko API key, [follow this guide](https://docs.coingecko.com/v3.0.1/reference/setting-up-your-api-key).

## Run the app on development mode

First, install node packages:

```zsh
$ bun install
```

To start the Expo CLI development server, run the following command:

```zsh
$ bun start
```

You can also run any package.json script with `bun run`, for example, to start the client and run the app directly on iOS:

```zsh
$ bun run ios
```

Or for Android:

```zsh
$ bun run android
```

## Testing

This project is using [Jest](https://docs.expo.io/guides/testing-with-jest/) for unit testing. Use the next bun script to run the test cases:

```zsh
$ bun run test
```

_Note: Do not run `bun test` as it will not run the `jest` script, instead it will run the bun test runner._

## Caveats

This project uses CoinGecko's Public API that applies a cache system on its endpoints, so the information between screens may not be consistent. For more information, [see here](https://support.coingecko.com/hc/en-us/articles/4538807536665-How-often-does-data-get-updated-or-refreshed).
