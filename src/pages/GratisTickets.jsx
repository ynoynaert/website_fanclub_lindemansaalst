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

export default function GratisTickets() {
  return (
    <Flex direction="column" align="center" justify="center" w="100%" p={4}>
      <Flex
        direction="column"
        w={{ lg: "55%", md: "90%", base: "90%" }}
        align="center"
      >
        <Card
          direction={{ base: "column", md: "row" }} // Stacks vertically on mobile and horizontally on desktop
          overflow="hidden"
          variant="outline"
          m={2} // Margin between cards
        >
          <Image
            src="/images/gratisTickets.JPG"
            alt={"Gratis tickets"}
            mx={{ base: "auto", md: "initial" }}
            w={{ base: "auto", md: "50%" }}
            borderRadius="md"
          />
          <Stack spacing={4} align="start" p={4}>
            <CardBody>
              <Heading size="lg">Gratis tickets!</Heading>
              <Text mt={2}>
                De fanclub stelt gratis tickets ter beschikking om naar de
                wedstrijd Lindemans Aalst - Axis Guibertin te gaan!
              </Text>
              <Button
                as="a"
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSeFHBR8mMR59iCppD92K7OClNKZ9c0XJq-pZDpMV6-CIu1THQ/viewform"
                }
                mt={4}
                background="#f08515"
                color="white"
                _hover={{ background: "white", color: "#f08515" }}
              >
                Bestellen
              </Button>
            </CardBody>
          </Stack>
        </Card>
      </Flex>
    </Flex>
  );
}
