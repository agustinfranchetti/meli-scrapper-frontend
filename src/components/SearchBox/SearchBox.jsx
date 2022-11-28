import { useState } from "react";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { getSearchResults } from "./searchBoxUtils";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Box
      bg="white"
      width="30%"
      height="200px%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
    >
      <InputGroup>
        <Input
          placeholder="Search for a movie"
          width="100%"
          height="50px"
          borderRadius="10px"
          fontSize="20px"
          color="gray.500"
          _placeholder={{ color: "gray.500" }}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <InputRightElement
          width="50px"
          height="50px"
          borderRadius="10px"
          color="gray.500"
          children={<BiSearchAlt2 size="30px" />}
          onClick={() => console.log(getSearchResults(searchTerm))}
        />
      </InputGroup>
    </Box>
  );
};
