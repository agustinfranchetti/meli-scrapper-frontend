import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";

export const SearchResultCard = ({ searchResult }) => {
  console.log(searchResult);
  const { title, description, image_url, price, url, extras, free_shipping } =
    searchResult;
  return (
    <Card
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      background={"white"}
    >
      <CardBody>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={5}
        >
          <Image
            src={image_url}
            alt={`${title}`}
            borderRadius="lg"
            boxSize="100px"
            objectFit="contain"
          />
          <Heading size="md">{title}</Heading>
        </Flex>
        <Stack mt="6" spacing="3">
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {price}
          </Text>
          {extras.map((extra, index) => (
            <Text key={index}>{extra}</Text>
          ))}
          {free_shipping && <Text>Free Shipping</Text>}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => window.open(url)}
          >
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to wishlist
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};