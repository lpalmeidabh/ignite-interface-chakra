import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { ContinentInfo} from '../../components/ContinentInfo'
import {ContinentProps, continents} from '../../utils/continents'
import {CityInfo} from '../../components/CityInfo'

export default function Continent() {
  const router = useRouter();
  
  
  const [selectedContinent, setSelectedContinent] = useState<ContinentProps>();
  
  useEffect(() => {
    const continent = router.query.continent
    const idx = continents.findIndex(item => item.link === continent)
    setSelectedContinent(continents[idx]);
  },[router.query.continent])

  if(!!selectedContinent){
    return (
      <Flex direction="column">
        <Header />
        <ContinentBanner image={selectedContinent.image} name={selectedContinent.name} />
        <ContinentInfo description={selectedContinent.description} countries={selectedContinent.countries} lang={selectedContinent.lang} cities={selectedContinent.cities} />
        <CityInfo cities={selectedContinent.city_list} />        
      </Flex>
    );
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      >
        <h2>Carregando...</h2>
      </Flex>
  );
};