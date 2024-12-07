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
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      direction="column"
      width="100%"
      px="4"
      py={{ base: "2", md: "4", xl: "4" }} // Increased padding for larger screens
      bg="#f9f9f9"
      borderBottom="1px solid #ddd"
      position="sticky" // Make navbar sticky
      top="0" // Stick to the top
      zIndex="1000" // Ensure it sits on top of other content
    >
      {/* Mobile, Tablet & Medium Screens Navbar Toggle Button */}
      <Flex
        display={{ base: "flex", md: "flex", xl: "none" }} // Adjust to show hamburger for xl (1280px) and below
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
            src="/logo.jpg"
            alt="Logo Fanclub Lindemans Aalst"
            borderRadius="full"
            boxSize="50px"
          />
        </Box>
      </Flex>

      {/* Desktop Navbar for Screens Larger than 1280px */}
      <Flex
        display={{ base: "none", xl: "flex" }} // Shows only for screens wider than 1280px
        alignItems="center"
        justifyContent="space-between"
        minHeight="90px"
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
            src="/logo.jpg"
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
                href="https://www.youtube.com/@FanclubLindemansAalst-ii9qj"
                isExternal
              >
                <Icon as={IoLogoYoutube} />
              </Link>
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
              as={Link}
              href="/contact"
              color="white"
              _hover={{ background: "white", color: "#f08515" }}
            >
              Contact
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>

      {/* Mobile & Medium Screens Navbar Menu */}
      <Collapse in={isOpen}>
        <VStack
          spacing="4"
          align="stretch"
          p="4"
          display={{ base: "flex", md: "flex", xl: "none" }} // Menu visible on screens up to 1280px
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
              href="https://www.youtube.com/@FanclubLindemansAalst-ii9qj"
              isExternal
            >
              <Icon as={IoLogoYoutube} />
            </Link>
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
            as={Link}
            href="/contact"
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
