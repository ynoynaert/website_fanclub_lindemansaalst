import {
  Text,
  Link,
  UnorderedList,
  ListItem,
  Box,
  Heading,
  Grid,
  GridItem,
  Card,
  CardBody,
  Image,
  Flex,
} from "@chakra-ui/react";

export default function Blocknotjen() {
  return (
    <>
      <Box p={4} maxW="container.md" mx="auto">
        <Heading as="h1" size="lg" mb={4} textAlign="center">
          Ledenblad 't Blocknotjen
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }} // Stack vertically on mobile, row on larger screens
          align="center"
          mb={4}
          gap={{ base: 4, md: 8 }} // Add spacing between the elements
        >
          <Box flex="1">
            <Text mb={4}>
              We hebben ook een eigen ledenblad: 't Blocknotjen. Tijdens het
              seizoen verschijnt dit 1 keer per maand.
            </Text>

            <Text mb={4}>
              Afgedrukt (bij wedstrijd) en online:
              <UnorderedList>
                <ListItem>Oktober</ListItem>
                <ListItem>December</ListItem>
                <ListItem>Februari</ListItem>
                <ListItem>April</ListItem>
              </UnorderedList>
              Enkel online:
              <UnorderedList>
                <ListItem>November</ListItem>
                <ListItem>Januari</ListItem>
                <ListItem>Maart</ListItem>
                <ListItem>Mei</ListItem>
              </UnorderedList>
            </Text>

            <Text mb={4}>
              Gezocht: sponsers. Dankzij onze sponsors kunnen wij 't Blocknotjen
              af en toe afgedrukt bezorgen aan de fans. Interesse om te
              sponsoren? Vraag meer informatie aan{" "}
              <Link href="mailto:hans@fanclubaalst.be" color="#f08515">
                Hans
              </Link>
              .
            </Text>

            <Text>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdhxpXWGwQ38Ezz0Mrg-CK-p_XL4Z8QP_O0U0acvv7vQewBLw/viewform"
                color="#f08515"
                isExternal
              >
                Klik hier
              </Link>{" "}
              indien je 't Blocknotjen ook online wil ontvangen.
            </Text>
          </Box>

          <Box flex="1" mt={{ base: 4, md: 0 }} mx={{ base: "auto", md: 0 }}>
            <Link href={archiveItems[0].pdfLink} isExternal>
              <Card
                h={{ base: "auto", md: "auto" }} // Set height for larger screens
                maxW={{ base: "100%", sm: "sm", md: "md", lg: "lg" }} // Set maximum width responsively
                mx={{ base: "auto", md: 0 }}
              >
                <CardBody
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Image
                    src={archiveItems[0].imgSrc}
                    alt={archiveItems[0].title}
                    borderRadius="lg"
                    objectFit="cover"
                  />
                  <Text mt={2}>{archiveItems[0].title}</Text>
                </CardBody>
              </Card>
            </Link>
          </Box>
        </Flex>
      </Box>

      <Box p={4} maxW="container.md" mx="auto">
        <Text>Het archief van 't Blocknotjen</Text>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} // Adjust grid based on screen size
          gap={6}
        >
          {archiveItems.map((item, index) => (
            <GridItem key={index} w="auto" h="auto">
              <Link href={item.pdfLink} isExternal>
                <Card h="auto" maxW="sm" variant="filled">
                  <CardBody
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      borderRadius="lg"
                      boxSize={{ base: "200px", md: "200px" }} // Smaller on mobile, larger on larger screens
                      objectFit="cover"
                    />
                    <Text mt={2}>{item.title}</Text>
                  </CardBody>
                </Card>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
}

const archiveItems = [
  {
    title: "Juni 2025",
    imgSrc: "/images/blocknotjen/026-2025-juni.jpg",
    pdfLink: "/images/blocknotjen/026-2025-juni.pdf",
  },
  {
    title: "April 2025",
    imgSrc: "/images/blocknotjen/025-2025-april.jpg",
    pdfLink: "/images/blocknotjen/025-2025-april.pdf",
  },
  {
    title: "Februari 2025",
    imgSrc: "/images/blocknotjen/024-2025-februari.jpg",
    pdfLink: "/images/blocknotjen/024-2025-februari.pdf",
  },
  {
    title: "December 2024",
    imgSrc: "/images/blocknotjen/023-2024-december.jpg",
    pdfLink: "/images/blocknotjen/023-2024-december.pdf",
  },
  {
    title: "September 2024",
    imgSrc: "/images/blocknotjen/022-2024-september.jpg",
    pdfLink: "/images/blocknotjen/022-2024-september.pdf",
  },
  {
    title: "Mei 2024",
    imgSrc: "/images/blocknotjen/021-2024-mei.jpg",
    pdfLink: "/images/blocknotjen/021-2024-mei.pdf",
  },
  {
    title: "April 2024",
    imgSrc: "/images/blocknotjen/020-2024-april.jpg",
    pdfLink: "/images/blocknotjen/020-2024-april.pdf",
  },
  {
    title: "Februari 2024",
    imgSrc: "/images/blocknotjen/019-2024-februari.jpg",
    pdfLink: "/images/blocknotjen/019-2024-februari.pdf",
  },
  {
    title: "December 2023",
    imgSrc: "/images/blocknotjen/018-2023-december.jpg",
    pdfLink: "/images/blocknotjen/018-2023-december.pdf",
  },
  {
    title: "Weekend Maaseik",
    imgSrc: "/images/blocknotjen/017b-2023-weekend-maaseik.jpg",
    pdfLink: "/images/blocknotjen/017b-2023-weekend-maaseik.pdf",
  },
  {
    title: "November 2023",
    imgSrc: "/images/blocknotjen/017-2023-november.jpg",
    pdfLink: "/images/blocknotjen/017-2023-november.pdf",
  },
  {
    title: "Oktober 2023",
    imgSrc: "/images/blocknotjen/016-2023-oktober.jpg",
    pdfLink: "/images/blocknotjen/016-2023-oktober.pdf",
  },
  {
    title: "Mei 2023",
    imgSrc: "/images/blocknotjen/015-2023-mei.jpg",
    pdfLink: "/images/blocknotjen/015-2023-mei.pdf",
  },
  {
    title: "April 2023",
    imgSrc: "/images/blocknotjen/014-2023-april.jpg",
    pdfLink: "/images/blocknotjen/014-2023-april.pdf",
  },
  {
    title: "Maart 2023",
    imgSrc: "/images/blocknotjen/013-2023-maart.jpg",
    pdfLink: "/images/blocknotjen/013-2023-maart.pdf",
  },
  {
    title: "Februari 2023",
    imgSrc: "/images/blocknotjen/012-2023-februari.jpg",
    pdfLink: "/images/blocknotjen/012-2023-februari.pdf",
  },
  {
    title: "December 2022",
    imgSrc: "/images/blocknotjen/011-2022-december.jpg",
    pdfLink: "/images/blocknotjen/011-2022-december.pdf",
  },
  {
    title: "November 2022",
    imgSrc: "/images/blocknotjen/010-2022-november.jpg",
    pdfLink: "/images/blocknotjen/010-2022-november.pdf",
  },
  {
    title: "Oktober 2022",
    imgSrc: "/images/blocknotjen/009-2022-oktober.jpg",
    pdfLink: "/images/blocknotjen/009-2022-oktober.pdf",
  },
  {
    title: "Juli 2022",
    imgSrc: "/images/blocknotjen/008-2022-juli.jpg",
    pdfLink: "/images/blocknotjen/008-2022-juli.pdf",
  },
  {
    title: "Mei 2022",
    imgSrc: "/images/blocknotjen/007-2022-mei.jpg",
    pdfLink: "/images/blocknotjen/007-2022-mei.pdf",
  },
  {
    title: "April 2022",
    imgSrc: "/images/blocknotjen/006-2022-april.jpg",
    pdfLink: "/images/blocknotjen/006-2022-april.pdf",
  },
  {
    title: "Maart 2022",
    imgSrc: "/images/blocknotjen/005-2022-maart.jpg",
    pdfLink: "/images/blocknotjen/005-2022-maart.pdf",
  },
  {
    title: "Februari 2022",
    imgSrc: "/images/blocknotjen/004-2022-februari.jpg",
    pdfLink: "/images/blocknotjen/004-2022-februari.pdf",
  },
  {
    title: "December 2021 - 2",
    imgSrc: "/images/blocknotjen/003-2021-december-2.jpg",
    pdfLink: "/images/blocknotjen/003-2021-december-2.pdf",
  },
  {
    title: "December 2021 - 1",
    imgSrc: "/images/blocknotjen/002-2021-december-1.jpg",
    pdfLink: "/images/blocknotjen/002-2021-december-1.pdf",
  },
  {
    title: "November 2021",
    imgSrc: "/images/blocknotjen/001-2021-november.jpg",
    pdfLink: "/images/blocknotjen/001-2021-november.pdf",
  },
];
