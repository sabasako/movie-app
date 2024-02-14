import { createContext, useState } from "react";

type SearchContextType = {
  searchValue: string;
  handleSearch: (value: string) => void;
};

export const SearchContext = createContext<SearchContextType>({
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
