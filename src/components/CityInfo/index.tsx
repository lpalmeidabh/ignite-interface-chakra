import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/layout'
import {CityData} from '../../utils/continents'
import {CityItem} from './CityItem'

interface CityInfoProps {
  cities: CityData[]
}
export function CityInfo({cities}: CityInfoProps){
  return(
    <Flex maxW={1120} mx="auto" alignItems="center" mt={["2","40"]} direction="column" >
      
      <Heading w={["100vw","100%"]}  ml={[5, 0]} fontWeight="500" fontSize={["2xl", "4xl"]} mb={["5", "10"]}>
        Cidades +100
      </Heading>
      
      <SimpleGrid
        flex="1"        
        columns={[1, null, 2, 4]}
        spacing={10}    
      >
        {cities.map(city => (
          <CityItem key={city.name} name={city.name} country={city.country} flag={city.flag} image={city.image}/>
        ))}
        
      </SimpleGrid>
    </Flex>
  )
}