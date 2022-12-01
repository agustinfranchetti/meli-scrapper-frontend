import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";

export const MainScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(true);

  const props = {
    searchTerm,
    setSearchTerm,
    setIsSearching,
  };

  return isSearching ? <SearchBox {...props} /> : <SearchResults {...props} />;
};
