import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_COIN_MARKET_AUTH_TOKEN;

export const api = axios.create({
  baseURL:
    process.env.EXPO_PUBLIC_COIN_MARKET_PUBLIC_API_URL ||
    "https://api.coingecko.com/api/v3",
  timeout: 5000,
  headers: {
    accept: "application/json",
    ...(apiKey && { "x-cg-demo-api-key": apiKey }),
  },
});
