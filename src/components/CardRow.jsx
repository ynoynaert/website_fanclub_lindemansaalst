import { Box, Button, Image, Text, Heading, Flex } from "@chakra-ui/react";

const CardRow = ({ img, imgalt, imgsize, title, desc, but, butLink, isExternal }) => {
  return (
    <Flex
      direction={{ base: "column", xl: "row" }} // Switch to row layout on screens wider than 1280px
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      {/* Image Box */}
      <Box flexShrink={0}>
        <Image src={img} alt={imgalt} maxW={imgsize} />
      </Box>

      {/* Content Box */}
      <Box
        mt={{ base: 4, xl: 0 }} // Adjust margin top for larger screens
        ml={{ xl: 6 }} // Add margin-left only for larger screens
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p={4} // Padding around the content box
      >
        <Box>
          {title && <Heading size="lg">{title}</Heading>}
          <Text mt={2} mb={4}>
            {desc}
          </Text>{" "}
          {/* Margin for spacing */}
        </Box>
        {but && (
          <Button
            background="#f08515"
            color="white"
            mt={4}
            alignSelf="flex-start" // Optional: adjust alignment if needed
            as="a"
            href={butLink}
            target={isExternal ? "_blank" : "_self"} // Open external links in a new tab
            rel={isExternal ? "noopener noreferrer" : ""} // Add rel for security
            _hover={{ background: "white", color: "#f08515" }}
          >
            {but}
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default CardRow;
