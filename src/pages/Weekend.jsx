import {
  Text,
  UnorderedList,
  ListItem,
  Box,
  Heading,
  Flex,
  Image,
  Stack,
  Link,
} from "@chakra-ui/react";

export default function Weekend() {
  return (
    <Box p={4} maxW="container.md" mx="auto">
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Weekendje BENE-League
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }} // Stack vertically on mobile, row on larger screens
        align="center"
        mb={4}
        gap={{ base: 4, md: 8 }} // Add spacing between the elements
      >
        <Box flex="1">
          <Text mb={4}>
            Ook dit seizoen organiseren we een gezellig weekendje weg! Dit keer
            trekken we op <b>8 en 9 maart</b> naar Doetinchem, met onderweg een
            tussenstop in Arnhem.
          </Text>

          <Text mb={4}>
            Op zaterdag bezoeken we <b>de Hoge Veluwe</b>, waar je kunt wandelen
            of fietsen, gevolgd door een interactieve quiz in Arnhem en een
            gezamenlijk avondmaal. Daarna is er vrije tijd om de stad te
            verkennen.
          </Text>

          <Text mb={4}>
            Zondagochtend starten we met een stevig ontbijt, gevolgd door een
            keuze tussen een stadswandeling in Arnhem of vrije tijd. Na de lunch
            vertrekken we naar <b>Doetinchem</b>, waar we in de namiddag{" "}
            <b>de wedstrijd</b> bijwonen.
          </Text>

          <Text mb={4}>
            De kostprijs bedraagt <b>€125 p.p.</b> (incl. overnachting,
            maaltijden en inkom). Inschrijven kan via{" "}
            <Link
              href="https://forms.gle/jeJP7TZgdLvbMzk48"
              color="#f08515"
              isExternal
            >
              deze link
            </Link>
            , maar wees er snel bij – de plaatsen zijn beperkt!
          </Text>
        </Box>
        <Box flex="1">
          <Image src="/images/home/weekendBENE.jpg" />
        </Box>
      </Flex>
    </Box>
  );
}
