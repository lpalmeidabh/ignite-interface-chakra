import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypeItemProperties {
  image: string;
  title: string;
};

export function TypeItem({ image, title }: TypeItemProperties) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex direction={["row", "column"]}  align="center" >
      {isWideVersion ? (
        <Image src={`/images/${image}.svg`} mb="6" w="85px" h="85px" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
        {title}
      </Text>
    </Flex>
  );
};