import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <div>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
      {/* <Box width="100%" height={32} /> */}
      {/* <Box w="100%" h="32px" /> */}
      {/* <Box boxSize="sm" /> */}
      <Box w={256} bgGradient="linear(to-l, #7928CA, #FF0080)">
        // width `'40px'`
      </Box>
      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
      <Stack direction="row">
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Stack>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Box color="gray.50" />
      // raw CSS color value
      <Box color="#f00" />
      // background colors
      <Box bg="tomato" />
      // verbose prop
      <Box boxSize="sm" backgroundColor="tomato" />
    </div>
  );
};

export default Hero;
