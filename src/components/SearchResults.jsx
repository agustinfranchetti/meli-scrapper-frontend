import { useQuery } from "react-query";
import axios from "axios";
import { Box, Text, Spinner, SimpleGrid } from "@chakra-ui/react";
import { SearchResultCard } from "./SearchResultCard";
export const SearchResults = ({ searchTerm }) => {
  const { isLoading, data, isFetched } = useQuery("searchResults", () => {
    return axios.get(`http://localhost:8000/search/${searchTerm}`);
  });

  const searchResults = data?.data;
  const finishedLoading = !isLoading && isFetched && searchResults;
  return finishedLoading ? (
    <Box p={4} scrollBehavior="smooth" height="inherit" width="inherit">
      <SimpleGrid columns={3} spacing={10}>
        {searchResults.map((searchResult, index) => (
          <SearchResultCard key={index} searchResult={searchResult} />
        ))}
      </SimpleGrid>
    </Box>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner size={"xl"} color={"blue.500"} />
    </Box>
  );
};
