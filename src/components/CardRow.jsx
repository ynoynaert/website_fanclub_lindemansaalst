import { Box, Button, Image, Text, Heading, Flex } from "@chakra-ui/react";

const CardRow = ({ img, imgalt, imgsize, title, desc, but, butLink }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
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
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
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
