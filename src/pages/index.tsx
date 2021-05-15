
import { Box, Flex, Heading } from "@chakra-ui/react";

import Head from "next/head";

import { Header } from "../components/Header";
import { Hero } from '../components/Hero';
import {TravelTypes} from '../components/TravelTypes';
import {Slider} from '../components/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - worldtrip</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Hero />
        <TravelTypes />
        <Box
          w={["60px", "90px"]}
          mx="auto"
          h="2px"
          bg="gray.700"
          my={["9", "20"]}
        />
        
        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa? <br /> Então escolha o seu continente
        </Heading>
        <Slider />
      </Flex>
    </>
  );
};