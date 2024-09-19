// ContactPage.js

import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";

const ContactPage = () => {
  const [selectedEmail, setSelectedEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      title: "Bericht verzonden mislukt",
      description: `Je bericht is NIET verzonden naar ${selectedEmail}`,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleEmailChange = (event) => {
    setSelectedEmail(event.target.value);
  };

  return (
    <Container maxW="container.md" py={10}>
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="xl">
          Contacteer ons
        </Heading>
      </Box>
      <Box bg="gray.100" p={8} borderRadius="md" shadow="md">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name" isRequired>
              <FormLabel>Naam</FormLabel>
              <Input placeholder="Voornaam + achternaam" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Selecteer iemand</FormLabel>
              <Select
                placeholder="Selecteer iemand"
                onChange={handleEmailChange}
                value={selectedEmail}
                isRequired
              >
                <option value="lies@fanclubaalst.be">Lies</option>
                <option value="gino@fanclubaalst.be">Gino</option>
                <option value="gerrit@fanclubaalst.be">Gerrit</option>
                <option value="hans@fanclubaalst.be">Hans</option>
              </Select>
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Bericht</FormLabel>
              <Textarea placeholder="Jouw bericht" />
            </FormControl>
            <Button
              type="submit"
              color="white"
              background="#f08515"
              _hover={{ background: "white", color: "#f08515" }}
              isDisabled={!selectedEmail}
            >
              Verstuur bericht
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default ContactPage;
