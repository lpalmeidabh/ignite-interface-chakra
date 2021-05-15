import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Avatar, Text } from '@chakra-ui/react';
import {CityData} from '../../utils/continents';

export function CityItem({name, country, image, flag}: CityData){
  return(
    <Box minW={256} borderRadius="4px" justifyContent="center" overflow="hidden">
    <Image src={image} h="170px" w="100%" />
    <Flex
      p="6"
      align="center"
      justify="space-between"
      bg="white"
      border="1px"
      borderColor="yellow.300"
      borderTop="0"
    >
      <Flex direction="column" alignItems="flex-start">
        <Heading fontSize="xl" fontWeight="500">
          {name}
        </Heading>
        <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
          {country}
        </Text>
      </Flex>
      <Avatar src={flag} w={30} h={30} />
      
    </Flex>
  </Box>
  )}