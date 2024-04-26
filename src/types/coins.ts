import type { CURRENCIES } from "@/constants/coins";

export interface BasicCoin {
  id: string;
  name: string;
  symbol: string;
}

export interface CoinMarket extends BasicCoin {
  image?: string;
  current_price?: number;
  market_cap?: number;
  market_cap_rank?: number;
  fully_diluted_valuation?: null;
  total_volume?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_24h?: number;
  price_change_percentage_24h?: number;
  price_change_percentage_7d_in_currency?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  circulating_supply?: number;
  total_supply?: number;
  max_supply?: null;
  ath?: number;
  ath_change_percentage?: number;
  ath_date?: Date;
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: Date;
  roi?: null;
  last_updated?: Date;
}

export interface ReposURL {
  github?: string[];
  bitbucket?: unknown[];
}

export interface Links {
  homepage?: string[];
  blockchain_site?: string[];
  official_forum_url?: string[];
  chat_url?: string[];
  announcement_url?: string[];
  twitter_screen_name?: string;
  facebook_username?: string;
  bitcointalk_thread_identifier?: number;
  telegram_channel_identifier?: string;
  subreddit_url?: string;
  repos_url?: ReposURL;
}

export type Currency = (typeof CURRENCIES)[number];

export type CoinCurrentPrice = {
  [key in Currency]: number;
};

export interface MarketData {
  current_price?: CoinCurrentPrice;
  total_value_locked?: null;
  mcap_to_tvl_ratio?: null;
  fdv_to_tvl_ratio?: null;
  roi?: null;
  ath?: { [key: string]: number };
  ath_change_percentage?: { [key: string]: number };
  ath_date?: { [key: string]: Date };
  atl?: { [key: string]: number };
  atl_change_percentage?: { [key: string]: number };
  atl_date?: { [key: string]: Date };
  market_cap?: { [key: string]: number };
  market_cap_rank?: number;
  fully_diluted_valuation?: unknown;
  total_volume?: { [key: string]: number };
  high_24h?: { [key: string]: number };
  low_24h?: { [key: string]: number };
  price_change_24h?: number;
  price_change_percentage_24h?: number;
  price_change_percentage_7d?: number;
  price_change_percentage_14d?: number;
  price_change_percentage_30d?: number;
  price_change_percentage_60d?: number;
  price_change_percentage_200d?: number;
  price_change_percentage_1y?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  price_change_24h_in_currency?: { [key: string]: number };
  price_change_percentage_1h_in_currency?: { [key: string]: number };
  price_change_percentage_24h_in_currency?: { [key: string]: number };
  price_change_percentage_7d_in_currency?: { [key: string]: number };
  price_change_percentage_14d_in_currency?: { [key: string]: number };
  price_change_percentage_30d_in_currency?: { [key: string]: number };
  price_change_percentage_60d_in_currency?: { [key: string]: number };
  price_change_percentage_200d_in_currency?: { [key: string]: number };
  price_change_percentage_1y_in_currency?: { [key: string]: number };
  market_cap_change_24h_in_currency?: { [key: string]: number };
  market_cap_change_percentage_24h_in_currency?: { [key: string]: number };
  total_supply?: number;
  max_supply?: null;
  circulating_supply?: number;
  last_updated?: Date;
}
export interface Image {
  thumb?: string;
  small?: string;
  large?: string;
}

export interface CoinDetail {
  id?: string;
  symbol?: string;
  name?: string;
  asset_platform_id?: null;
  block_time_in_minutes?: number;
  hashing_algorithm?: string;
  categories?: string[];
  public_notice?: null;
  additional_notices?: unknown[];
  localization?: { [x: string]: string };
  description?: { [x: string]: string };
  links?: Links;
  image?: Image;
  country_origin?: string;
  genesis_date?: null;
  sentiment_votes_up_percentage?: null;
  sentiment_votes_down_percentage?: null;
  market_cap_rank?: number;
  coingecko_rank?: number;
  coingecko_score?: number;
  developer_score?: number;
  community_score?: number;
  liquidity_score?: number;
  public_interest_score?: number;
  market_data?: MarketData;
  status_updates?: unknown[];
  last_updated?: Date;
}
export interface CoinMarketChart {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}