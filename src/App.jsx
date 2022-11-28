import { Box } from "@chakra-ui/react";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      <Box bg="lightblue" height={"98vh"}>
        <SearchBox />
      </Box>
    </ChakraProvider>
  );
};
