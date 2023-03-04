import {
  Flex,
  Icon,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Link,
  useColorMode,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import DarkmodeToggle from "./DarkmodeToggle";
import { useState } from "react";
const MobileMenu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [copied, setCopied] = useState();

  return (
    <Flex alignItems={"center"} justifySelf="right" mr="8px">
      <Icon
        as={IoPaperPlaneOutline}
        transform="rotateY(180deg)"
        boxSize="30px"
        onClick={onOpen}
        color="gray.300"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          background={colorMode == "light" ? "white" : "blackAlpha.900"}
        >
          <DrawerHeader textAlign={"center"}>MENU</DrawerHeader>
          <DrawerCloseButton size="lg" />
          <DrawerBody pt="30%" position={"relative"}>
            <Flex
              direction="column"
              fontSize={"3rem"}
              justifyContent="flex-end"
              gap="50px"
            >
              {props.links.map((link, index) => (
                <Link
                  key={index}
                  rounded={"md"}
                  _hover={{
                    textDecor: "underline",
                    color: colorMode == "light" ? "red.500" : "green.100",
                  }}
                  onClick={() => {
                    props.parallax.current.scrollTo(link[1]);
                    onClose();
                  }}
                  color={colorMode == "light" ? "red.300" : "brandGreen.400"}
                  fontWeight="500"
                >
                  {link[0]}
                </Link>
              ))}
              <Button
                onClick={() => {
                  navigator.clipboard.writeText("https://dujinkim.com/");
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 4000);
                }}
              >
                {copied ? (
                  "Link Copied!"
                ) : (
                  <>
                    Share Website
                    <Icon
                      as={IoPaperPlaneOutline}
                      boxSize="20px"
                      color="gray.300"
                      ml="10px"
                    />
                  </>
                )}
              </Button>
            </Flex>
            <Flex position={"absolute"} bottom="10px" right="20px">
              <Text fontSize="lg" mr="10px">
                {colorMode == "light" ? "Dark Mode " : "Light Mode "}
              </Text>
              <DarkmodeToggle
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
              />
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <i>© 2022 DuJin Kim</i>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MobileMenu;
