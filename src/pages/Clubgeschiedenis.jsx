import {
  Text,
  UnorderedList,
  ListItem,
  Box,
  Heading,
  Link,
  Image,
  Stack,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function ClubGeschiedenis() {
  return (
    <>
      <Box p={4} maxW="container.md" mx="auto">
        <Heading as="h1" size="lg" mb={4} textAlign="center">
          Clubgeschiedenis
        </Heading>

        <Text mb={4}>
          Onze club heeft er al een rijke geschiedenis opzitten.
        </Text>

        <Text mb={4}>
          Meer over het verleden van onze club kan je vinden in een reportage
          die eind 2021 - begin 2022 te zien was op Ring TV.
        </Text>

        <UnorderedList styleType="disc" ml={4}>
          <ListItem>
            <Link href="https://www.ringtv.be/kijk-ring/over-de-top-volleybalclub-lennik-en-zellik-0" isExternal>
              Deel 1 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.ringtv.be/kijk-ring/over-de-top-volleybalclub-lennik-en-zellik-deel-2-0" isExternal>
              Deel 2 <ExternalLinkIcon mx="2px" />{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.ringtv.be/kijk-ring/over-de-top-volleybalclub-lennik-en-zellik-deel-3-0" isExternal>
              Deel 3 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>

        <Heading as="h2" size="lg" mb={4} textAlign="center">
          Onze prijzen
        </Heading>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Image src={"/images/clubgeschiedenis/1984-1985-beker.jpg"} alt={"1984-1985 beker"} />
          </GridItem>
          <GridItem>
            <Image src={"/images/clubgeschiedenis/1986-1987-kampioen.jpg"} alt={"1986-1987 kampioen"} />
          </GridItem>
          <GridItem>
            <Image src={"/images/clubgeschiedenis/1987-1988-kampioen.jpg"} alt={"1987-1988 kampioen"} />
          </GridItem>
          <GridItem>
            <Image src={"/images/clubgeschiedenis/1991-1992-beker.jpg"} alt={"1991-1992 beker"} />
          </GridItem>
          <GridItem>
            <Image src={"/images/clubgeschiedenis/1992-1993-beker.jpg"} alt={"1992-1993 beker"} />
          </GridItem>
          <GridItem>
            <Image src={"/images/clubgeschiedenis/2014-2015-beker.jpg"} alt={"2014-2015 beker"} />
          </GridItem>
          <GridItem>
            <Image src={"/images/clubgeschiedenis/2015-2016-supercup.jpg"} alt={"2015-2016 supercup"} />
          </GridItem>
          <GridItem>
            <Image src={"/images/clubgeschiedenis/2019-2020-eerste-plaats.jpg"} alt={"2019-2020 eerste plaats"} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
