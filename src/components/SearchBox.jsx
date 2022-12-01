import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";

export const SearchBox = ({ searchTerm, setSearchTerm, setIsSearching }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSetIsSearching = () => {
    setIsSearching(false);
  };

  return (
    <Box
      width="40%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
    >
      <Box>
        <InputGroup>
          <Input
            placeholder="Search for a product"
            width="100%"
            height="50px"
            borderRadius="10px"
            fontSize="20px"
            color="gray.500"
            _placeholder={{ color: "gray.500" }}
            onChange={handleInputChange}
            value={searchTerm}
            pr="10px"
          />
          <InputRightElement
            width="50px"
            height="50px"
            borderRadius="10px"
            color="gray.500"
            children={<BiSearchAlt2 size="30px" />}
            onClick={handleSetIsSearching}
          />
        </InputGroup>
      </Box>
    </Box>
  );
};
