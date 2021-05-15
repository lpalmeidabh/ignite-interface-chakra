import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {continents, ContinentProps} from '../../utils/continents'

interface ContinentBannerProps {
  image: string;
  name: string;
}

export function ContinentBanner({image, name}: ContinentBannerProps) {
  console.log(image, name);
  
  
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage={image}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["2rem", "5xl"]}
        color={["white", "gray.100"]}
        fontWeight="500"
      >
        {name}
      </Heading>
    </Flex>
  );
};