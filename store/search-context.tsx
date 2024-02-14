import { createContext, useState } from "react";

export const SearchContext = createContext<{
  searchValue: string;
  handleSearch: (value: string) => void;
}>({
  searchValue: "",
  handleSearch: () => {},
});

export default function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchValue, setSearchValue] = useState<string>("");

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  const searchContextValue = {
    searchValue,
    handleSearch,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
}
