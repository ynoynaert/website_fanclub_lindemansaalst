import {
  Box,
  Flex,
  Button,
  Image,
  ButtonGroup,
  Icon,
  Link,
  useDisclosure,
  Collapse,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      direction="column"
      width="100%"
      px="4"
      py={{ base: "2", md: "4" }} // Increase padding in desktop mode
      bg="#f9f9f9"
      borderBottom="1px solid #ddd"
      position="relative"
    >
      {/* Mobile Navbar Toggle Button */}
      <Flex
        display={{ base: "flex", md: "none" }}
        justify="space-between"
        align="center"
      >
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          variant="outline"
          aria-label="Toggle Navigation"
        />
        <Box>
          <Image
            src="/images/logo.jpg"
            alt="Logo Fanclub Lindemans Aalst"
            borderRadius="full"
            boxSize="50px"
          />
        </Box>
      </Flex>

      {/* Desktop Navbar */}
      <Flex
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        minHeight="90px" // Set minimum height for the navbar in desktop mode
      >
        {/* Left Button Group */}
        <Flex flex="1" justify="flex-start">
          <ButtonGroup gap="2">
            <Button
              as={Link}
              href="/"
              background="transparent"
              color="#f08515"
              _hover={{ background: "#f08515", color: "white" }}
            >
              Home
            </Button>
            <Button
              as={Link}
              href="/overons"
              background="transparent"
              color="#f08515"
              _hover={{ background: "#f08515", color: "white" }}
            >
              Over ons
            </Button>
            <Button
              as={Link}
              href="https://www.lindemansaalst.be/calendar.php#competitie"
              background="transparent"
              color="#f08515"
              isExternal
              _hover={{ background: "#f08515", color: "white" }}
            >
              Kalender
            </Button>
            <Button
              as={Link}
              href="/blocknotjen"
              background="transparent"
              color="#f08515"
              _hover={{ background: "#f08515", color: "white" }}
            >
              't Blocknotjen
            </Button>
            <Button
              as={Link}
              href="https://www.facebook.com/fanclub.lindemans.aalst/photos/"
              isExternal
              background="transparent"
              color="#f08515"
              _hover={{ background: "#f08515", color: "white" }}
            >
              Foto's
            </Button>
          </ButtonGroup>
        </Flex>

        {/* Center Logo */}
        <Box position="absolute" left="50%" transform="translateX(-50%)" p="2">
          <Image
            src="/images/logo.jpg"
            alt="Logo Fanclub Lindemans Aalst"
            borderRadius="full"
            boxSize="100px"
          />
        </Box>

        {/* Right Button Group */}
        <Flex flex="1" justify="flex-end">
          <ButtonGroup gap="2">
            <Button
              background="transparent"
              color="#f08515"
              _hover={{ background: "#f08515", color: "white" }}
            >
              <Link
                href="https://www.facebook.com/fanclub.lindemans.aalst"
                isExternal
              >
                <Icon as={IoLogoFacebook} />
              </Link>
            </Button>
            <Button
              background="transparent"
              color="#f08515"
              _hover={{ background: "#f08515", color: "white" }}
            >
              <Link
                href="https://www.instagram.com/fanclub_lindemans_aalst"
                isExternal
              >
                <Icon as={IoLogoInstagram} />
              </Link>
            </Button>
            <Button
              background="#f08515"
              color="white"
              _hover={{ background: "white", color: "#f08515" }}
            >
              Contact
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>

      {/* Mobile Navbar */}
      <Collapse in={isOpen}>
        <VStack
          spacing="4"
          align="stretch"
          p="4"
          display={{ base: "flex", md: "none" }}
        >
          <Button
            as={Link}
            href="/"
            background="transparent"
            color="#f08515"
            _hover={{ background: "#f08515", color: "white" }}
          >
            Home
          </Button>
          <Button
            as={Link}
            href="/overons"
            background="transparent"
            color="#f08515"
            _hover={{ background: "#f08515", color: "white" }}
          >
            Over ons
          </Button>
          <Button
            as={Link}
            href="https://www.lindemansaalst.be/calendar.php#competitie"
            background="transparent"
            color="#f08515"
            isExternal
            _hover={{ background: "#f08515", color: "white" }}
          >
            Kalender
          </Button>
          <Button
            as={Link}
            href="/blocknotjen"
            background="transparent"
            color="#f08515"
            _hover={{ background: "#f08515", color: "white" }}
          >
            't Blocknotjen
          </Button>
          <Button
            as={Link}
            href="https://www.facebook.com/fanclub.lindemans.aalst/photos/"
            isExternal
            background="transparent"
            color="#f08515"
            _hover={{ background: "#f08515", color: "white" }}
          >
            Foto's
          </Button>
          <Button
            background="transparent"
            color="#f08515"
            _hover={{ background: "#f08515", color: "white" }}
          >
            <Link
              href="https://www.facebook.com/fanclub.lindemans.aalst"
              isExternal
            >
              <Icon as={IoLogoFacebook} />
            </Link>
          </Button>
          <Button
            background="transparent"
            color="#f08515"
            _hover={{ background: "#f08515", color: "white" }}
          >
            <Link
              href="https://www.instagram.com/fanclub_lindemans_aalst"
              isExternal
            >
              <Icon as={IoLogoInstagram} />
            </Link>
          </Button>
          <Button
            background="#f08515"
            color="white"
            _hover={{ background: "white", color: "#f08515" }}
          >
            Contact
          </Button>
        </VStack>
      </Collapse>
    </Flex>
  );
}
