import {
  Text,
  UnorderedList,
  ListItem,
  Box,
  Heading,
  Stack,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";

export default function GoudenKriekskes() {
  return (
    <Box p={4} maxW="container.md" mx="auto">
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Gouden Kriekskes Awards
      </Heading>

      <Flex
        mb={4}
        direction={{ base: "column", md: "row" }} // Stack vertically on mobile, row on larger screens
        align={{ base: "flex-start", md: "center" }} // Align to flex-start on mobile, center on larger screens
      >
        <Stack spacing={4}>
          <Text fontSize="lg" color="gray.700">
            De fanclub sluit het seizoen af met uitreiking van prijzen beste
            speler, beste jongere, meest enthousiaste speler en Lifetime
            Achievement Award.
          </Text>

          <Text fontSize="lg" color="gray.700">
            Alle supporters krijgen de kans om te stemmen voor de Gouden
            Kriekskes.
          </Text>

          
        {/* <Text fontSize="lg" color="gray.700">
          Stem nu op jouw favoriete speler via{" "}
          <Link
            isExternal
            color="#f08515"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeOQpFYM3CChUEvwIh-vjc5xMdrb-mozYd_1tBykHvBMADUeg/viewform "
          >
            deze link
          </Link>
          !
        </Text> */}
        </Stack>
        <Image
          src="/images/goudenKriekskes.jpg"
          alt="Gouden Kriekskes afbeelding"
          boxSize={{base: "70%", md:"35%"}}
          objectFit="cover"
          mb={{ base: 4, md: 0 }} // Bottom margin on mobile, none on desktop
          mr={{ base: 0, md: { lg: 3, xl: 3 } }} // Right margin on desktop only (larger screens have more space)
          mx={{ base: "auto", md: 0 }} // Center image on mobile
        />
      </Flex>

      <Stack spacing={4}>
        <Text fontSize="lg" color="gray.700">
          Winnaars van deze awards...
        </Text>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Lifetime Achievement Award
          </Heading>
          <UnorderedList styleType="disc" ml={4}>
            <ListItem>2025: ??? </ListItem>
            <ListItem>2024: Geert Walravens</ListItem>
            <ListItem>2023: Staf Moyson</ListItem>
            <ListItem>2022: Johan Devoghel</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Beste speler
          </Heading>
          <UnorderedList styleType="disc" ml={4}>
            <ListItem>2025: Alvaro Gimeno Rubio</ListItem>
            <ListItem>2024: Alvaro Gimeno Rubio</ListItem>
            <ListItem>2023: Robbe Van de Velde</ListItem>
            <ListItem>2022: Robin Overbeeke</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Meest enthousiaste speler
          </Heading>
          <UnorderedList styleType="disc" ml={4}>
            <ListItem>2025: Robbe Ponseele</ListItem>
            <ListItem>2024: Robbe Ponseele</ListItem>
            <ListItem>2023: Renars-Pauls Jansons</ListItem>
            <ListItem>2022: Renars-Pauls Jansons</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Beste jongere (jonger dan 21 op het einde van het seizoen)
          </Heading>
          <UnorderedList styleType="disc" ml={4}>
            <ListItem>2025: Matis Verwimp</ListItem>
            <ListItem>2024: Robbe Van de Velde</ListItem>
            <ListItem>2023: Robbe Van de Velde</ListItem>
            <ListItem>2022: Robbe Van de Velde</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </Box>
  );
}
