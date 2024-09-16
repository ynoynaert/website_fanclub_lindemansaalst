import CardRow from "../components/CardRow";
import { Flex, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center" w="100%" p={4}>
      {/* Levensloop Card */}
      <Box maxW="60%" width="100%" mb={4}>
        <CardRow
          img={"/images/home/levensloop2024.jpg"}
          imgalt={"Levensloop"}
          imgsize={{ base: "100%", md: "350px" }} // Responsive image size
          title={"Levensloop 2024"}
          desc={
            "Op zaterdag 28 en zondag 29 gaat Levensloop door in het stadspark van Aalst. Ook met de (fan)club nemen we hieraan deel."
          }
          but={"Meer info"}
        />
      </Box>

      {/* Gouden Kriekskes Card */}
      <Box maxW="60%" width="100%" mb={4}>
        <CardRow
          img={"/images/home/gouden-kriekskes-afbeelding.jpg"}
          imgalt={"Gouden Kriekskes"}
          imgsize={{ base: "100%", md: "450px" }} // Responsive image size
          title={"Gouden Kriekskes 2024"}
          desc={
            "Jaarlijks sluiten we het seizoen af met de uitreiking van prijzen beste speler, beste jongere, meest enthousiaste speler en Lifetime Achievement Award."
          }
          but={"Ontdek de winnaars"}
        />
      </Box>

      {/* Blocknotjen Card */}
      <Box maxW="60%" width="100%" mb={4}>
        <CardRow
          img={"/images/home/021-2024-mei.jpg"}
          imgalt={"Blocknotjen"}
          imgsize={{ base: "100%", md: "200px" }} // Responsive image size
          title={"'t Blocknotjen"}
          desc={
            "We hebben ook een eigen ledenblad: 't Blocknotjen. Tijdens het seizoen verschijnt dit 1 keer per maand."
          }
          but={"Lees online"}
        />
      </Box>

      {/* Lindemans Aalst Website */}
      <Box maxW="60%" width="100%" mb={4}>
        <CardRow
          img={"/images/home/website-lindemans-aalst.png"}
          imgalt={"Website Lindemans Aalst"}
          imgsize={{ base: "100%", md: "200px" }} // Responsive image size
          desc={"Meer informatie over onze club vind je op deze website."}
          but={"Meer info"}
          butLink={"https://www.lindemansaalst.be"}
        />
      </Box>

      {/* Lotto Volley League */}
      <Box maxW="60%" width="100%" mb={4}>
        <CardRow
          img={"/images/home/website-volley-league.png"}
          imgalt={"Website Lotto Volley League"}
          imgsize={{ base: "100%", md: "250px" }} // Responsive image size
          desc={
            "Lindemans Aalst speelt in de Lotto Volley League. Meer informatie over deze competitie kan je hier vinden."
          }
          but={"Meer info"}
          butLink={"https://lottovolleyleague.be/nl/"}
        />
      </Box>

      {/* CEV */}
      <Box maxW="60%" width="100%" mb={4}>
        <CardRow
          img={"/images/home/website-cev.png"}
          imgalt={"Website CEV"}
          imgsize={{ base: "100%", md: "150px" }} // Responsive image size
          desc={
            "Informatie over de Europese wedstrijden kan je hier terugvinden."
          }
          but={"Meer info"}
          butLink={
            "https://www.cev.eu/club/volleyball-cup/2025/men/#competition"
          }
        />
      </Box>

      {/* Club History */}
      <Box maxW="60%" width="100%" mb={4}>
        <CardRow
          img={"/images/home/clubgeschiedenis.jpg"}
          imgalt={"Clubgeschiedenis"}
          imgsize={{ base: "100%", md: "300px" }} // Responsive image size
          title={"Clubgeschiedenis"}
          desc={"Lindemans Aalst is een club met een rijke geschiedenis."}
          but={"Lees de geschiedenis"}
        />
      </Box>
    </Flex>
  );
}
