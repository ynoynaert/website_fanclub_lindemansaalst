import {
  Box,
  Flex,
  Button,
  Image,
  ButtonGroup,
  Icon,
  Link
} from "@chakra-ui/react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" width="100%" px="4"> {/* Added px="4" for padding on the sides */}
        {/* Left Button Group */}
        <Flex flex="1" justify="flex-start"> {/* Added ml="4" for extra margin on the left */}
          <ButtonGroup gap="2">
          <Button as={Link} href="/" background="transparent" color="#f08515" _hover={{ background: "#f08515", color: "white" }}>
            Home
          </Button>
          <Button as={Link} href="/overons" background="transparent" color="#f08515" _hover={{ background: "#f08515", color: "white" }}>
            Over ons
          </Button>
          <Button background="transparent" color="#f08515" _hover={{ background: "#f08515", color: "white" }}>Kalender</Button>
            <Button background="transparent" color="#f08515" _hover={{ background: "#f08515", color: "white" }}>'t Blocknotjen</Button>
            <Button background="transparent" color="#f08515" _hover={{ background: "#f08515", color: "white" }}>Foto's</Button>
          </ButtonGroup>
        </Flex>

        {/* Center Logo */}
        <Box p="2">
          <Image
            src="/images/logo.jpg"
            alt="Logo Fanclub Lindemans Aalst"
            borderRadius="full"
            boxSize="100px"
          />
        </Box>

        {/* Right Button Group */}
        <Flex flex="1" justify="flex-end" mr="4"> {/* Added mr="4" for extra margin on the right */}
          <ButtonGroup gap="2">
            <Button background="transparent" color="#f08515"  _hover={{ background: "#f08515", color: "white" }}>
              <Link href='https://www.facebook.com/fanclub.lindemans.aalst'><Icon as={IoLogoFacebook} /></Link>
            </Button>
            <Button background="transparent" color="#f08515" _hover={{ background: "#f08515", color: "white" }}>
            <Link href='https://www.instagram.com/fanclub_lindemans_aalst'><Icon as={IoLogoInstagram} /></Link>
            </Button>
            <Button background="#f08515" color="white"  _hover={{ background: "white", color: "#f08515" }}>Contact</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </>
  );
}
