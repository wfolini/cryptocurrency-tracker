import { useRef, useState } from "react";
import {
  ActivityIndicator,
  type TextInput as RNTextInput,
  RefreshControl,
  View,
} from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { EmptyState, Text, ErrorEmptyState } from "@/components";
import { CoinsList } from "@/components/coins";
import type { Theme } from "@/core/theme";
import { useCoinSearch } from "@/hooks/coins/useCoinSearch";
import { useCoinsList } from "@/hooks/coins/useCoinsList";
import { useDebounce } from "@/hooks/useDebounce";

import { styles } from "./CoinSearchScreen.styles";

export default function CoinSearchScreen() {
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();
  const searchInputRef = useRef<RNTextInput>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery);
  const { coinsIDsSearchResult } = useCoinSearch(debouncedSearchQuery);
  const {
    coins,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    isError,
  } = useCoinsList({ coinIds: coinsIDsSearchResult, perPage: 20 });

  const handleClearSearch = () => {
    searchInputRef.current?.clear();
    searchInputRef.current?.blur();
    setSearchQuery("");
  };

  const isValidQuery = coinsIDsSearchResult !== undefined;
  const isAllCoins = coinsIDsSearchResult === null;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.searchContainer}>
        <TextInput
          value={searchQuery}
          ref={searchInputRef}
          left={<TextInput.Icon icon="magnify" color={theme.colors.accent} />}
          right={
            searchQuery ? (
              <TextInput.Icon
                icon="close"
                color={theme.colors.accent}
                onPress={handleClearSearch}
              />
            ) : null
          }
          style={styles.searchInput}
          underlineStyle={styles.searchInputUnderline}
          onChangeText={setSearchQuery}
          placeholder="Search cryptocurrency"
          inputMode="search"
          returnKeyType="done"
          spellCheck={false}
          autoCorrect={false}
        />
      </View>
      <CoinsList
        ListHeaderComponentStyle={styles.listHeader}
        data={coins}
        onEndReached={
          !isFetching && hasNextPage && coins?.length ? fetchNextPage : null
        }
        ListFooterComponent={isFetchingNextPage ? ActivityIndicator : null}
        ListEmptyComponent={
          isError ? (
            ErrorEmptyState
          ) : isValidQuery && !isFetching ? (
            <EmptyState
              icon="search"
              title="No matches found"
              caption="Please, check your spelling and try again"
            />
          ) : null
        }
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
        ListHeaderComponent={() => (
          <Text variant="title">
            {isAllCoins ? "Cryptocurrencies" : "Results"}
          </Text>
        )}
      />
    </View>
  );
}
