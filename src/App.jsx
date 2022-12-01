import { Box, Text } from "@chakra-ui/react";
import { MainScreen } from "./components/MainScreen";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Box
          bg="gray.900"
          // height={"100vh"}
          alignItems="center"
          justifyContent={"center"}
          display="flex"
        >
          <MainScreen />
          <Text
            color="white"
            fontSize="md"
            position="absolute"
            bottom="0"
            right="0"
            mr="5"
            mb="5"
          >
            Made by @agustinfranchetti
          </Text>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
