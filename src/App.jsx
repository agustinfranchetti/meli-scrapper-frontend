import { Box } from "@chakra-ui/react";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      <Box
        bg="gray.900"
        height={"100vh"}
        alignItems="center"
        justifyContent={"center"}
        display="flex"
      >
        <SearchBox />
      </Box>
    </ChakraProvider>
  );
};
