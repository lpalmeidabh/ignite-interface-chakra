import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      w="100%"
      h={["165px", "250px", "250px", "335px"]}
      bgImage="url('/images/hero_background.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            5 continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </div>

        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/images/airplane.svg"
          alt="Avião amarelo voando"
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
};