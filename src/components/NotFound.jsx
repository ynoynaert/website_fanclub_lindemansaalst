import {
  CardBody,
  Heading,
  Flex,
  Card,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex direction="column" align="center" justify="center" w="100%" p={4}>
      <Card textAlign="center">
        <CardBody>
          <Heading size="lg">Je hebt de bal misgeslagen!</Heading>
          <Text mt={4}>
            Oeps! Deze pagina is uit het veld geslagen. Misschien was het een
            netfout?
          </Text>
          <Text>Serveer jezelf terug naar de homepage!</Text>
          <Button
            background="#f08515"
            color="white"
            _hover={{ background: "white", color: "#f08515" }}
            mt={4}
          >
            <Link href="/">
              Terug naar de homepage
            </Link>
          </Button>
        </CardBody>
      </Card>
    </Flex>
  );
}
