import { Text, Link, UnorderedList, ListItem, Box, Heading } from "@chakra-ui/react";

export default function Levensloop() {
  return (
    <Box p={4} maxW="container.md" mx="auto">
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Doe mee aan Levensloop op 28 en 29 september 2024
      </Heading>

      <Text mb={4}>
        Op zaterdag 28 en zondag 29 gaat de Levensloop door in Aalst. Ook met de
        (fan)club nemen we hieraan deel. Meer informatie en het volledige
        programma van de Levensloop in Aalst kan je{" "}
        <Link
          href="https://www.levensloop.be/content/levensloop-aalst-2024"
          color="#f08515"
          isExternal
        >
          hier
        </Link>{" "}
        vinden.
      </Text>

      <Heading as="h2" size="md" mb={2}>
        Wat gaan wij doen met de (fan)club?
      </Heading>

      <Text mb={4}>
        Zaterdag
        <UnorderedList styleType="disc" ml={4}>
          <ListItem>
            15 u.: openingsceremonie. Een ereronde met vechters. De vechter voor
            ons team is Hiago.
          </ListItem>
          <ListItem>
            15 tot 19 u.: mogelijkheid om voor ons team rondjes te lopen of
            stappen.
          </ListItem>
          <ListItem>
            19.30 u.: verkoop van gadgets door de fanclub tijdens de wedstrijd
            Lindemans Aalst - Waremme Volley
          </ListItem>
        </UnorderedList>
        Zondag 10-15 u.: GA SAMEN OP STAP MET DE SPELERS!{" "}
        <Link
          color="#f08515"
          href="https://docs.google.com/forms/d/e/1FAIpQLSextVawBzzIilGY7qQIZNWbkQyvTMd4k_5OP3FjHNI6f0310g/viewform"
          isExternal
        >
          Kies hier!
        </Link>
        <UnorderedList styleType="disc" ml={4}>
          <ListItem>
            tussen 10 en 11 u. ( Berre Peters, Robbe Ponseele, Matis Verwimp en
            Frank Depestele )
          </ListItem>
          <ListItem>
            tussen 11 en 12 u. ( Lennert Beelaert, Mihkel Varblane, Nezar
            Harouk )
          </ListItem>
          <ListItem>
            tussen 12 en 13 u. ( Lou Kindt, Hiago Crins en Gauthier Brozak )
          </ListItem>
          <ListItem>tussen 13 en 14 u. ( Max Schulz en Timo Lohmus )</ListItem>
          <ListItem>
            tussen 14 en 15 u. ( Bert Dufraing, Alvaro Gimeno Rubio en Lucas
            Lorente Lopez )
          </ListItem>
        </UnorderedList>
      </Text>

      <Heading as="h2" size="md" mb={2}>
        Hoe kan je deelnemen?
      </Heading>

      <Text mb={4}>
        <UnorderedList styleType="disc" ml={4}>
          <ListItem>
            Loop of wandel mee... schrijf je in bij ons team en betaal hiervoor
            €10 (meer mag ook){" "}
            <Link
              color="#f08515"
              href="https://docs.google.com/forms/d/e/1FAIpQLSextVawBzzIilGY7qQIZNWbkQyvTMd4k_5OP3FjHNI6f0310g/viewform"
              isExternal
            >
              via deze link
            </Link>
            . Niet vergeten om ook in te schrijven bij Levensloop zelf!
          </ListItem>
          <ListItem>Uiteraard zijn ook supporters welkom!</ListItem>
        </UnorderedList>
      </Text>

      <Heading as="h2" size="md" mb={2}>
        Hoe kan je steunen?
      </Heading>

      <Text mb={4}>
        <UnorderedList styleType="disc" ml={4}>
          <ListItem>
            Koop een gadget... Eenvoudig, kom naar de wedstrijd tegen Waremme
            Volley en koop een gadget. De inkomsten gaan volledig naar
            "Stichting tegen kanker"
          </ListItem>
          <ListItem>
            Sponsor één van de deelnemers of ons team... (giften van boven de
            €40 zijn fiscaal aftrekbaar)
          </ListItem>
        </UnorderedList>
      </Text>

      <Text mb={4}>
        <Link
          href="https://www.levensloop.be/teams/lindemans-aalst"
          color="#f08515"
          isExternal
        >
          Hier
        </Link>{" "}
        kan je de kiezen welke deelnemer je wenst te steunen:
      </Text>

      <Text>
        Vragen? Stuur een mailtje naar{" "}
        <Link href="mailto:hans@fanclubaalst.be" color="#f08515">
          {" "}
          Hans
        </Link>
      </Text>
    </Box>
  );
}
