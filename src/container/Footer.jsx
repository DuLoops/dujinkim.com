import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py="20px" textAlign={"center"} position="relative">
      <Text mt={{sm:'35px', md:0}}>
        <i>© 2022 DuJin Kim. All Rights Reserved.</i>
      </Text>

      <Link
        position="absolute"
        right="0"
        top="20px"
        _hover={{ mr: "10px" }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >

        Back to Top -
      </Link>
    </Box>
  );
};

export default Footer;
