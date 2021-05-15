export type CityData= {
      name: string, 
      country: string, 
      image: string, 
      flag: string
    
}
export interface ContinentProps {
  link: string;
  name: string;
  excerpt: string;
  description: string;
  image: string;
  countries: number,
  lang: number,
  cities: number,
  city_list: CityData[]
  
}

export const continents:ContinentProps[] = [
  {
    link: "europa",
    name: "Europe",
    excerpt: "Lorem ipsum dolor sit amet",
    description: "A Europa é um continente que está localizado no hemisfério norte do globo terrestre. Compreende uma área total de 10.498.000 km2 e possui uma população de 744,7 milhões de habitantes.",
    image: "url('/images/europe_slider.jpg')",
    countries: 10,
    lang: 60,
    cities: 199,
    city_list: [
      {
        name: "Londres",
        country: "Reino Unido",
        image: "/images/londres.png",
        flag: "/images/reino_unido_flag.png",
      },
      {
        name: "Paris",
        country: "França",
        image: "/images/paris.png",
        flag: "/images/franca_flag.png",
      },
      {
        name: "Roma",
        country: "Itália",
        image: "/images/roma.png",
        flag: "/images/italia_flag.png",
      },
      {
        name: "Praga",
        country: "Rep. Tcheca",
        image: "/images/praga.png",
        flag: "/images/rep_tcheca_flag.png",
      },
      {
        name: "Amsterdã",
        country: "Holanda",
        image: "/images/amsterdam.png",
        flag: "/images/holanda_flag.png",
      },
    ]
  },
  {
    link: "america-do-norte",
    name: "América do Norte",
    excerpt: "Lorem ipsum dolor sit amet",
    description: "A América do Norte abrange a porção setentrional do continente americano, apesar desse “subcontinente” estar firmado em sua própria placa tectônica. O subcontinente da América do Norte compreende o Canadá, México, Groenlândia e os Estados Unidos da América (EUA).",
    image: "url('/images/north_america_slider.jpg')",
    countries: 10,
    lang: 60,
    cities: 199,
    city_list: [
      {
        name: "Londres",
        country: "Reino Unido",
        image: "/images/londres.png",
        flag: "/images/reino_unido_flag.png",
      },
      {
        name: "Paris",
        country: "França",
        image: "/images/paris.png",
        flag: "/images/franca_flag.png",
      },
      {
        name: "Roma",
        country: "Itália",
        image: "/images/roma.png",
        flag: "/images/italia_flag.png",
      },
      {
        name: "Praga",
        country: "Rep. Tcheca",
        image: "/images/praga.png",
        flag: "/images/rep_tcheca_flag.png",
      },
      {
        name: "Amsterdã",
        country: "Holanda",
        image: "/images/amsterdam.png",
        flag: "/images/holanda_flag.png",
      },
    ]
  },
  {
    link: "america-do-sul",
    name: "América do Sul",
    excerpt: "Lorem ipsum dolor sit amet",
    description: "A América do Sul é um subcontinente que envolve a parcela meridional da América (continente americano). Com extensão de 17 819 100 km2, possui pouco menos de 12% da superfície terrestre e 6% da população mundial.",
    image: "url('/images/south_america_slider.jpg')",
    countries: 10,
    lang: 60,
    cities: 199,
    city_list: [
      {
        name: "Londres",
        country: "Reino Unido",
        image: "/images/londres.png",
        flag: "/images/reino_unido_flag.png",
      },
      {
        name: "Paris",
        country: "França",
        image: "/images/paris.png",
        flag: "/images/franca_flag.png",
      },
      {
        name: "Roma",
        country: "Itália",
        image: "/images/roma.png",
        flag: "/images/italia_flag.png",
      },
      {
        name: "Praga",
        country: "Rep. Tcheca",
        image: "/images/praga.png",
        flag: "/images/rep_tcheca_flag.png",
      },
      {
        name: "Amsterdã",
        country: "Holanda",
        image: "/images/amsterdam.png",
        flag: "/images/holanda_flag.png",
      },
    ]
  },
  {
    link: "africa",
    name: "África",
    excerpt: "Lorem ipsum dolor sit amet",
    description: "A África é banhada pelo oceano Atlântico na sua costa ocidental e pelo oceano Índico do lado oriental. Ao norte, pelos mares Mediterrâneo e Vermelho e ao sul, pelo Mar Antártico.",
    image: "url('/images/africa_slider.jpg')",
    countries: 10,
    lang: 60,
    cities: 199,
    city_list: [
      {
        name: "Londres",
        country: "Reino Unido",
        image: "/images/londres.png",
        flag: "/images/reino_unido_flag.png",
      },
      {
        name: "Paris",
        country: "França",
        image: "/images/paris.png",
        flag: "/images/franca_flag.png",
      },
      {
        name: "Roma",
        country: "Itália",
        image: "/images/roma.png",
        flag: "/images/italia_flag.png",
      },
      {
        name: "Praga",
        country: "Rep. Tcheca",
        image: "/images/praga.png",
        flag: "/images/rep_tcheca_flag.png",
      },
      {
        name: "Amsterdã",
        country: "Holanda",
        image: "/images/amsterdam.png",
        flag: "/images/holanda_flag.png",
      },
    ]
  },
  {
    link: "asia",
    name: "Ásia",
    excerpt: "Lorem ipsum dolor sit amet",
    description: "A Ásia é o maior continente, tanto em área (chega a quase um terço de todas as terras emersas do nosso planeta) como em população, onde habitam aproximadamente 4,5 bilhões de habitantes.",
    image: "url('/images/asia_slider.jpg')",
    countries: 10,
    lang: 60,
    cities: 199,
    city_list: [
      {
        name: "Londres",
        country: "Reino Unido",
        image: "/images/londres.png",
        flag: "/images/reino_unido_flag.png",
      },
      {
        name: "Paris",
        country: "França",
        image: "/images/paris.png",
        flag: "/images/franca_flag.png",
      },
      {
        name: "Roma",
        country: "Itália",
        image: "/images/roma.png",
        flag: "/images/italia_flag.png",
      },
      {
        name: "Praga",
        country: "Rep. Tcheca",
        image: "/images/praga.png",
        flag: "/images/rep_tcheca_flag.png",
      },
      {
        name: "Amsterdã",
        country: "Holanda",
        image: "/images/amsterdam.png",
        flag: "/images/holanda_flag.png",
      },
    ]
  },
  {
    link: "oceania",
    name: "Oceania",
    excerpt: "Lorem ipsum dolor sit amet",
    description: "A Oceania é o menor continente do mundo. Localizado no hemisfério sul, é composto pela Austrália e pelas Ilhas do Pacífico (Polinésia, Melanésia e Micronésia). Em termo operacionais, busca-se dividir o planeta em agrupamentos continentais e, por isso, associam-se todas as ilhas com o continente da Austrália ou com a Australásia.",
    image: "url('/images/oceania_slider.jpg')",
    countries: 10,
    lang: 60,
    cities: 199,
    city_list: [
      {
        name: "Londres",
        country: "Reino Unido",
        image: "/images/londres.png",
        flag: "/images/reino_unido_flag.png",
      },
      {
        name: "Paris",
        country: "França",
        image: "/images/paris.png",
        flag: "/images/franca_flag.png",
      },
      {
        name: "Roma",
        country: "Itália",
        image: "/images/roma.png",
        flag: "/images/italia_flag.png",
      },
      {
        name: "Praga",
        country: "Rep. Tcheca",
        image: "/images/praga.png",
        flag: "/images/rep_tcheca_flag.png",
      },
      {
        name: "Amsterdã",
        country: "Holanda",
        image: "/images/amsterdam.png",
        flag: "/images/holanda_flag.png",
      },
    ]
  },
]