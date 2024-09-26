import React from "react";
import {
  Text,
  Link,
  Box,
  Heading,
  Grid,
  GridItem,
  Card,
  CardBody,
  Image,
  Divider,
  Stack,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box p={4} maxW="container.md" mx="auto">
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Ons team
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Adjust grid based on screen size
        gap={6}
      >
        {people.map((p, index) => (
          <GridItem key={index} w="auto" h="auto">
            <Card
              h="auto"
              maxW="sm"
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
            >
              <Image
                src={p.imgSrc}
                alt={p.imgAlt}
                borderRadius="lg"
                boxSize={{ base: "40%", md: "200px" }} // Smaller on mobile, larger on larger screens
                objectFit="cover"
              />
              <CardBody display="flex" flexDirection="column">
                <Stack spacing="3">
                  <Heading size="md">{p.naam}</Heading>
                  <Divider />
                  <Text>
                    <Link href={`mailto:${p.email}`} color="#f08515">
                      {p.email}
                    </Link>
                  </Text>
                  <Text>{p.functie}</Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

// size picture 4:5
const people = [
  {
    imgSrc: "/contact/lies.JPG",
    imgAlt: "Lies",
    naam: "Lies",
    functie: "",
    email: "lies@fanclubaalst.be",
  },
  {
    imgSrc: "/contact/gino.JPG",
    imgAlt: "Gino",
    naam: "Gino",
    functie: "",
    email: "gino@fanclubaalst.be",
  },
  {
    imgSrc: "/contact/gerrit.JPG",
    imgAlt: "Gerrit",
    naam: "Gerrit",
    functie: "",
    email: "gerrit@fanclubaalst.be",
  },
  {
    imgSrc: "/contact/hans.JPG",
    imgAlt: "Hans",
    naam: "Hans",
    functie: "",
    email: "hans@fanclubaalst.be",
  },
  {
    imgSrc: "/contact/youna.JPG",
    imgAlt: "Youna",
    naam: "Youna",
    functie: "Foto's en website",
    email: "youna@fanclubaalst.be",
  },
];
