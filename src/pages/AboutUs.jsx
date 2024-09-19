import { Box, Text, Flex, Image, Heading } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Box p={4} maxW="container.md" mx="auto">
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Over ons
      </Heading>

      <Flex
        mb={4}
        direction={{ base: "column", md: "row" }} // Stack vertically on mobile, row on larger screens
        align={{ base: "flex-start", md: "center" }} // Align to flex-start on mobile, center on larger screens
      >
        <Image
          src="/images/overOns/overOns_1.jpg"
          alt="Fanclub afbeelding"
          boxSize={{base: "70%", md:"35%"}}
          objectFit="cover"
          mb={{ base: 4, md: 0 }} // Bottom margin on mobile, none on desktop
          mr={{ base: 0, md: { lg: 3, xl: 3 } }} // Right margin on desktop only (larger screens have more space)
          mx={{ base: "auto", md: 0 }} // Center image on mobile
        />
        <Text fontSize="lg" lineHeight="tall">
          Welkom bij de Fanclub Lindemans Aalst! Wij zijn een gepassioneerde
          groep van supporters en vrienden die samenkomen om onze liefde voor
          Lindemans Aalst te delen en te vieren. Of je nu een fervent volger
          bent van de club of net begint met het volgen van onze wedstrijden,
          bij ons ben je altijd welkom.
        </Text>
      </Flex>

      <Flex
        mb={4}
        direction={{ base: "column", md: "row" }} // Stack vertically on mobile, row on larger screens
        align={{ base: "flex-start", md: "center" }} // Align to flex-start on mobile, center on larger screens
        order={{ base: 2, md: 1 }} // On mobile, this text comes after the image; on desktop, it stays first
      >
        <Text
          fontSize="lg"
          lineHeight="tall"
          mb={{ base: 4, md: 0 }}
          order={{ base: 1, md: 0 }} // On mobile, text first; on desktop, text stays in its place
        >
          Onze fanclub heeft als doel om de band tussen de club en haar fans te
          versterken. We organiseren regelmatig bijeenkomsten, evenementen en
          activiteiten die niet alleen gericht zijn op het steunen van onze
          favoriete club, maar ook op het versterken van de gemeenschap rondom
          de club. Van gezellige uitjes om gezamenlijk de wedstrijden te kijken
          tot een drankje na de match, we zorgen ervoor dat onze leden zich
          altijd verbonden voelen met Lindemans Aalst.
        </Text>
        <Image
          src="/images/overOns/overOns_2.jpg"
          alt="Fanclub afbeelding"
          boxSize="200px"
          objectFit="cover"
          mb={{ base: 4, md: 0 }} // Bottom margin on mobile, none on desktop
          ml={{ base: 0, md: { lg: 3, xl: 3 } }} // Left margin on desktop only (larger screens have more space)
          mx={{ base: "auto", md: 0 }} // Center image on mobile
          order={{ base: 2, md: 1 }} // On mobile, image comes after the text; on desktop, image stays in its place
        />
      </Flex>

      <Flex
        mb={4}
        direction={{ base: "column", md: "row" }} // Stack vertically on mobile, row on larger screens
        align={{ base: "flex-start", md: "center" }} // Align to flex-start on mobile, center on larger screens
        order={{ base: 1, md: 2 }} // On mobile, this component comes first; on desktop, it stays second
      >
        <Image
          src="/images/overOns/overOns_3.jpg"
          alt="Fanclub afbeelding"
          boxSize={{base: "60%", md:"30%"}}
          objectFit="cover"
          mb={{ base: 4, md: 0 }} // Bottom margin on mobile, none on desktop
          mr={{ base: 0, md: { lg: 3, xl: 3 } }} // Right margin on desktop only (larger screens have more space)
          mx={{ base: "auto", md: 0 }} // Center image on mobile
          order={{ base: 1, md: 0 }} // On mobile, image first; on desktop, image stays in its place
        />
        <Text fontSize="lg" lineHeight="tall">
          Blijf op de hoogte van al onze activiteiten door ons te volgen op
          Facebook en Instagram. We verwelkomen je graag in onze fanclub en
          hopen je snel te ontmoeten op een van onze evenementen!
        </Text>
      </Flex>

      <Flex align="center" justifyContent="center">
        <Text fontSize="lg" fontWeight="bold" color="#f08515">
          Samen maken we elke wedstrijd onvergetelijk!
        </Text>
      </Flex>
    </Box>
  );
}
