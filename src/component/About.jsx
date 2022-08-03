import { Box, Button, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Stack bg="black">
      <Box maxW="600px" mx="auto" w="100%" mt="50" mb="50">
        <Flex textAlign="center" align="center" justify="center">
          <Heading fontSize="48px" color="#00CD08" mr="2">
            About
          </Heading>
          <Heading fontSize="48px" color="white">
            Us
          </Heading>
        </Flex>
        <Text fontSize="16px" textAlign="center" color="white" pt="30" pb="5">
          Interdum cras turpis integer luctus lacus vulputate. Feugiat purus
          varius maecenas lectus platea proin pellentesque imperdiet blandit.
          Nunc lectus nascetur vel arcu nunc. Facilisi vulputate ut ultricies
          hendrerit egestas purus, dignissim congue. Nec in mollis vel, magna.
          Nisi enim, nunc, augue amet.
        </Text>
        <Button
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mx="auto"
        >
          Learn More
        </Button>
      </Box>
    </Stack>
  );
};

export default About;
