import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {continents} from '../utils/continents'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


export function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
       
        {continents.map(continent => (
          <SwiperSlide key={continent.name}>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage={continent.image}
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href={`/continents/${continent.link}`} passHref>
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color={["white", "gray.100"]}
                  fontWeight="bold"
                >
                  {continent.name}
                </Heading>
                <Text
                  fontWeight="bold"
                  color={["white", "gray.300"]}
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  {continent.excerpt}
                </Text>
              </a>
            </Link>
          </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};