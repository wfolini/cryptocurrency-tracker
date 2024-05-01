import { http, HttpResponse } from "msw";

import type { CoinMarket, CoinMarketChart, CoinSearch } from "@/types/coins";

export function testBaseURL(path: string) {
  return new URL(path, "http://localhost").toString();
}

export const handlers = [
  http.get<never, never, CoinMarket[]>(
    testBaseURL("/coins/markets"),
    ({ request }) => {
      const url = new URL(request.url);
      const ids = url.searchParams.get("ids");
      const page = url.searchParams.get("page") || 1;
      const coins: CoinMarket[] = [
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
          image:
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
          current_price: 60353,
          market_cap: 1185323770873,
          market_cap_rank: 1,
          fully_diluted_valuation: 1264032357109,
          total_volume: 39406322302,
          high_24h: 64555,
          low_24h: 59131,
          price_change_24h: -3024.1191209508834,
          price_change_percentage_24h: -4.77162,
          market_cap_change_24h: -57073362640.883545,
          market_cap_change_percentage_24h: -4.59381,
          circulating_supply: 19692375,
          total_supply: 21000000,
          max_supply: 21000000,
          ath: 73738,
          ath_change_percentage: -18.42641,
          ath_date: new Date("2024-03-14T07:10:36.635Z"),
          atl: 67.81,
          atl_change_percentage: 88606.04004,
          atl_date: new Date("2013-07-06T00:00:00.000Z"),
          roi: null,
          last_updated: new Date("2024-04-30T22:17:35.155Z"),
        },
        {
          id: "ethereum",
          symbol: "eth",
          name: "Ethereum",
          image:
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
          current_price: 3000.41,
          market_cap: 364602753993,
          market_cap_rank: 2,
          fully_diluted_valuation: 364602753993,
          total_volume: 19249028932,
          high_24h: 3244.68,
          low_24h: 2916.38,
          price_change_24h: -191.31769310745403,
          price_change_percentage_24h: -5.99417,
          market_cap_change_24h: -23031041599.879517,
          market_cap_change_percentage_24h: -5.94144,
          circulating_supply: 122056395.217757,
          total_supply: 122056395.217757,
          max_supply: null,
          ath: 4878.26,
          ath_change_percentage: -38.80647,
          ath_date: new Date("2021-11-10T14:24:19.604Z"),
          atl: 0.432979,
          atl_change_percentage: 689351.57638,
          atl_date: new Date("2015-10-20T00:00:00.000Z"),
          roi: {
            times: 65.47829036268304,
            currency: "btc",
            percentage: 6547.829036268304,
          },
          last_updated: new Date("2024-04-30T22:17:27.884Z"),
        },
      ];
      if (page > "1") {
        return HttpResponse.json([]);
      }
      if (!ids) {
        return HttpResponse.json(coins);
      }
      const idsArray = ids?.split(",") || [];
      const response = coins.filter((coin) => idsArray.includes(coin.id));
      return HttpResponse.json(response);
    }
  ),

  http.get<never, never, CoinSearch>(testBaseURL("/search"), ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("query") || "";

    const response: CoinSearch = {
      bitcoin: {
        coins: [
          {
            id: "bitcoin",
            name: "Bitcoin",
            api_symbol: "bitcoin",
            symbol: "BTC",
            market_cap_rank: 1,
            thumb:
              "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
            large:
              "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
          },
          {
            id: "bitcoin-cash",
            name: "Bitcoin Cash",
            api_symbol: "bitcoin-cash",
            symbol: "BCH",
            market_cap_rank: 16,
            thumb:
              "https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png",
            large:
              "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png",
          },
        ],
      },
    }[query] || { coins: [] };

    return HttpResponse.json(response);
  }),

  http.get<{ coin: string }, never, CoinMarketChart>(
    testBaseURL("/coins/:coin/market_chart"),
    () =>
      HttpResponse.json({
        prices: [
          [1711929600000, 71246],
          [1714509600000, 59614],
        ],
        market_caps: [
          [1711929600000, 1401370211582],
          [1714506854000, 1181418735003],
        ],
        total_volumes: [
          [1711929600000, 19723005998],
          [1714506854000, 36397108204],
        ],
      })
  ),
];
