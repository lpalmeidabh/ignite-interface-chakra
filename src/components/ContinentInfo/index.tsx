import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";


interface ContinentInfoProps {
  description: string;
  countries: number;
  lang: number;
  cities: number;
}
export function ContinentInfo({description, countries, lang, cities}: ContinentInfoProps){
  return(
    <Flex mx="auto" maxW="1170" direction={["column", null, null, null, "row"]} p={[5, 0]} mt={["0", "20"]} align="center">
      <Text fontSize={["14", "16", "18", null, "24"]} align="justify" fontWeight={400}  maxW={600}>{description}</Text>
      <SimpleGrid
      w={["100%", "auto"]}
      flex="1"
      flexDirection="row"
      columns={3} 
      gap={[1,10]}      
      px={[0, 70]}
      mt={[5, 0]}      
      >
      <Box >
        <Text fontWeight={600} color="yellow.400" fontSize={[30, 55]}>{countries}</Text>
        <Text fontWeight={600} lineHeight='5' fontSize={[18, 24]}>países</Text>
      </Box>
      <Box>
        <Text fontWeight={600} color="yellow.400" fontSize={[30, 55]}>{lang}</Text>
        <Text fontWeight={600} lineHeight='5' fontSize={[18, 24]}>línguas</Text>
      </Box>
      <Box>
        <Text fontWeight={600} color="yellow.400" fontSize={[30, 55]}>{cities}</Text>
        <Text fontWeight={600} lineHeight='5' fontSize={[18, 24]}>cidades +100</Text>
      </Box>
      
      
    </SimpleGrid>
  
</Flex>  )}