import { Box, Text, Flex, Image, Heading } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Box p={4} maxW="container.md" mx="auto">
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Over ons
      </Heading>

      <Flex mb={4} align="center">
        <Image
          src="/src/assets/overOns/overOns_1.jpg"
          alt="Fanclub afbeelding"
          boxSize="175px"
          objectFit="cover"
          mr={4}
        />
        <Text fontSize="lg" lineHeight="tall">
          Welkom bij de Fanclub Lindemans Aalst! Wij zijn een gepassioneerde
          groep van supporters en vrienden die samenkomen om onze liefde voor
          Lindemans Aalst te delen en te vieren. Of je nu een fervent volger
          bent van de club of net begint met het volgen van onze wedstrijden,
          bij ons ben je altijd welkom.
        </Text>
      </Flex>
      <Flex mb={4} align="center">
        <Text fontSize="lg" lineHeight="tall">
          Onze fanclub heeft als doel om de band tussen de club en haar fans te
          versterken. We organiseren regelmatig bijeenkomsten, evenementen en
          activiteiten die niet alleen gericht zijn op het steunen van onze
          favoriete club, maar ook op het versterken van de gemeenschap rondom
          de club. Van gezellige uitjes om gezamenlijke de wedstrijden bekijken
          tot een drankje na de match, we zorgen ervoor dat onze leden zich
          altijd verbonden voelen met Lindemans Aalst.
        </Text>
        <Image
          src="/src/assets/overOns/overOns_2.jpg"
          alt="Fanclub afbeelding"
          boxSize="200px"
          objectFit="cover"
          mr={4}
        />
      </Flex>
      <Flex mb={4} align="center">
        <Image
          src="/src/assets/overOns/overOns_3.jpg"
          alt="Fanclub afbeelding"
          boxSize="175px"
          objectFit="cover"
          mr={4}
        />
        <Text fontSize="lg" lineHeight="tall">
          Blijf op de hoogte van al onze activiteiten door ons te volgen op
          Facebook en Instagram. We verwelkomen je graag in onze fanclub en
          hopen je snel te ontmoeten op een van onze evenementen!
        </Text>
      </Flex>
      <Flex align="center">
        <Text fontSize="lg" fontWeight="bold" color="#f08515">
          Samen maken we elke wedstrijd onvergetelijk!
        </Text>
      </Flex>
    </Box>
  );
}
