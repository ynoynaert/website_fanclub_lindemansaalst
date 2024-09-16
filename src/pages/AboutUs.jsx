import { Box, Text, Flex, Image } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Box p={4} maxW="800px" mx="auto">
      <Flex mb={4} align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Over ons
        </Text>
      </Flex>
      <Flex mb={4} align="center">
        <Image 
          src="/images/y9DpT.jpg" 
          alt="Welkom afbeelding" 
          boxSize="100px" 
          objectFit="cover" 
          mr={4} 
        />
        <Text fontSize="lg" lineHeight="tall">
          Welkom bij de Fanclub Lindemans Aalst! Wij zijn een gepassioneerde groep van supporters en 
          vrienden die samenkomen om onze liefde voor Lindemans Aalst te delen en te vieren. Of je nu een 
          fervent volger bent van de club of net begint met het volgen van onze wedstrijden, bij ons ben je 
          altijd welkom.
        </Text>
      </Flex>
      <Flex mb={4} align="center">
        <Text fontSize="lg" lineHeight="tall">
          Onze fanclub heeft als doel om de band tussen de club en haar fans te versterken. We organiseren 
          regelmatig bijeenkomsten, evenementen en activiteiten die niet alleen gericht zijn op het steunen 
          van onze favoriete club, maar ook op het versterken van de gemeenschap rondom de club. Van fan-days
          en meet-and-greets tot gezellige uitjes en gezamenlijke wedstrijden, we zorgen ervoor dat onze 
          leden zich altijd verbonden voelen met Lindemans Aalst.
        </Text>
        <Image 
          src="/images/y9DpT.jpg" 
          alt="Doel afbeelding" 
          boxSize="200px" 
          objectFit="cover" 
          mr={4} 
        />
      </Flex>
      <Flex mb={4} align="center">
        <Image 
          src="/images/y9DpT.jpg"  
          alt="Blijf op de hoogte afbeelding" 
          boxSize="100px" 
          objectFit="cover" 
          mr={4} 
        />
        <Text fontSize="lg" lineHeight="tall">
          Blijf op de hoogte van al onze activiteiten door ons te volgen op Facebook en Instagram. We 
          verwelkomen je graag in onze fanclub en hopen je snel te ontmoeten op een van onze evenementen!
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
