import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = (props) => {
  return (
    <Box py="20px" textAlign={"center"} position="fixed" w='100%' bottom='0' left='0' bg="whiteAlpha.200">
      <Text mt={{ sm: "35px", md: 0 }}>
        <i>© 2022 DuJin Kim. All Rights Reserved.</i>
      </Text>

      <Link
        position="absolute"
        right="0"
        top="20px"
        _hover={{ mr: "10px" }}
        onClick={() => {
          props.parallax.current.scrollTo(0);
        }}
      >
        Back to Top -
      </Link>
    </Box>
  );
};

export default Footer;
