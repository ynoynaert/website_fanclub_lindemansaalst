import {
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center" w="100%" p={4}>
      <Flex
        direction="column"
        w={{ lg: "55%", md: "90%", base: "90%" }}
        align="center"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            direction={{ base: "column", md: "row" }} // Stacks vertically on mobile and horizontally on desktop
            overflow="hidden"
            variant="outline"
            m={2} // Margin between cards
          >
            <Image
              src={card.image}
              alt={card.title}
              mx={{ base: "auto", md: "initial" }}
              w={card.imgWidth} // Use responsive width
              borderRadius="md"
            />
            <Stack spacing={4} align="start" p={4}>
              <CardBody>
                <Heading size="lg">{card.title}</Heading>
                <Text mt={2}>{card.description}</Text>
                <Button
                  as="a"
                  href={card.link}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  mt={4}
                  background="#f08515"
                  color="white"
                  _hover={{ background: "white", color: "#f08515" }}
                >
                  {card.but}
                </Button>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}

const cards = [
  // {
  //   image: "/images/home/levensloop2024.jpg",
  //   title: "Levensloop 2024",
  //   description:
  //     "Op zaterdag 28 en zondag 29 gaat Levensloop door in het stadspark van Aalst. Ook met de (fan)club nemen we hieraan deel.",
  //   link: "/levensloop",
  //   imgWidth: { base: "100%", md: "45%" },
  //   but: "Meer info",
  // },
  {
    image: "/images/home/gouden-kriekskes-afbeelding.jpg",
    title: "Gouden Kriekskes 2025",
    description:
      "Jaarlijks sluiten we het seizoen af met de uitreiking van prijzen voor beste speler, beste jongere, meest enthousiaste speler en Lifetime Achievement Award.",
    link: "/goudenkriekskes",
    imgWidth: { base: "100%", md: "45%" },
    but: "Stem nu!",
  },
  {
    image: "/images/blocknotjen/023-2024-december.jpg",
    title: "'t Blocknotjen",
    description:
      "We hebben ook een eigen ledenblad: 't Blocknotjen. Tijdens het seizoen verschijnt dit 1 keer per maand.",
    link: "/blocknotjen",
    imgWidth: { base: "50%", md: "25%" },
    but: "Lees online",
  },
  {
    image: "/images/home/website-lindemans-aalst.png",
    title: "Website Lindemans Aalst",
    description: "Meer informatie over onze club vind je op deze website.",
    link: "https://www.lindemansaalst.be",
    isExternal: true,
    imgWidth: { base: "50%", md: "25%" },
    but: "Meer info",
  },
  {
    image: "/images/home/website-volley-league.png",
    title: "Website Lotto Volley League",
    description:
      "Lindemans Aalst speelt in de Lotto Volley League. Meer informatie over deze competitie kan je hier vinden.",
    link: "https://lottovolleyleague.be/nl/",
    isExternal: true,
    imgWidth: { base: "50%", md: "25%" },
    but: "Meer info",
  },
  {
    image: "/images/home/website-cev.png",
    title: "Website CEV",
    description:
      "Informatie over de Europese wedstrijden kan je hier terugvinden.",
    link: "https://www.cev.eu/club/volleyball-cup/2025/men/#competition",
    isExternal: true,
    imgWidth: { base: "50%", md: "25%" },
    but: "Meer info",
  },
  {
    image: "/images/home/clubgeschiedenis.jpg",
    title: "Clubgeschiedenis",
    description: "Lindemans Aalst is een club met een rijke geschiedenis.",
    link: "/clubgeschiedenis",
    imgWidth: { base: "100%", md: "45%" },
    but: "Lees de geschiedenis",
  },
];
