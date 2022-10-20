import {
  Box,
  Button,
  Heading,
  Image,
  Icon,
  Link,
  Text,
  Center,
  Flex,
  Grid,
} from "@chakra-ui/react";
import {
  climbing,
  drawing,
  photography,
  skiing,
  sky,
  softwareDevelopment,
} from "../resources/images/passion";
import { AiFillGithub } from "react-icons/ai";
import "../styles/passion.scss";
import { folderGallery, folderBlog } from "../resources/images/icons";
const Passion = (props) => {
  const showImage = true;

  return (
    <Box textAlign={"center"} mt="5rem" w="100vw">
      <Heading
        borderBottom="5px solid"
        width={"50%"}
        m="auto"
        mb="5rem"
        p={"20px"}
      >
        My passion is
      </Heading>
      <Box position={"relative"} color="white">
        <Image
          src={softwareDevelopment}
          alt="softwareDevelopment"
          className="containedImage"
        />
        <Box className={"center desc"} boxShadow="dark-lg">
          <Heading>Software Development</Heading>
          <Button _hover={{ color: "blue.400" }} mt="10px" colorScheme={"cyan"}>
            <Link href="https://github.com/DuLoops" target="_blank">
              <Center>
                View Code <Icon as={AiFillGithub} className="iconStyle" />
              </Center>
            </Link>
          </Button>
        </Box>
      </Box>
      <Box pos={"relative"}>
        <Image src={sky} alt="sky" className="containedImage" />
        {showImage && (
          <Box
            className="center"
            boxShadow={"dark-lg"}
            borderRadius={{ sm: "10px", md: "100px" }}
            // top={{sm:'30%'}}
            overflow={{ md: "hidden" }}
          >
            <Image
              src={photography}
              alt="photography"
              maxW={{ sm: "90vw", md: "60vw" }}
            />
            <Box className="center desc" top={{ sm: "90%", md: "75%" }}>
              <Heading color="white">Photography</Heading>
              <Button
                _hover={{ color: "green.800" }}
                p="25px 10px"
                colorScheme="green"
                mt="10px"
              >
                <Link href="https://duloops.com/gallery" target="_blank">
                  <Center>
                    View Gallery
                    <Image
                      src={folderGallery}
                      loading="lazy"
                      className="imageIconStyle"
                    />
                  </Center>
                </Link>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <Heading my="2rem">&</Heading>
      {props.isMobile ? (
        <Box position={"relative"} w="100vw" h="100vh">
          <Image src={climbing} alt="climbing" maxH="40vh" />
          <Image
            src={drawing}
            alt="drawing"
            className="center"
            w="80vw"
            top="350px"
          />
          <Image src={skiing} alt="skiing" maxH="40vh" float="right" />
          <Box
            className="desc"
            position={"absolute"}
            bottom="0"
            left="50%"
            transform={"translateX(-50%)"}
            w='90%'
          >
            <Heading color={"white"}>
              Doing things <br />
              in the mountains
            </Heading>
            <Button
              _hover={{ color: "red.400" }}
              p="25px 10px"
              colorScheme="orange"
              mt="10px"
            >
              <Link href="https://duloops.com/blog" target="_blank">
                <Center>
                  View Blog
                  <Image
                    src={folderBlog}
                    loading="lazy"
                    className="imageIconStyle"
                  />
                </Center>
              </Link>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box position={"relative"} w="100vw" h="100vh">
          <Image
            src={skiing}
            alt="skiing"
            position="absolute"
            h="80%"
            top="10%"
            left="10%"
          />
          <Image
            src={drawing}
            alt="drawing"
            width={"40%"}
            position="absolute"
            top="0"
            left="50%"
            transform={"translateX(-50%)"}
          />
          <Image
            src={climbing}
            alt="climbing"
            position="absolute"
            h="80%"
            top="10%"
            right="10%"
          />
          <Box
            className="desc"
            position={"absolute"}
            bottom="15%"
            left="50%"
            transform={"translateX(-50%)"}
          >
            <Heading color={"white"}>
              Doing things <br />
              in the mountains
            </Heading>
            <Button
              _hover={{ color: "red.400" }}
              p="25px 10px"
              colorScheme="orange"
              mt="10px"
            >
              <Link href="https://duloops.com/blog" target="_blank">
                <Center>
                  View Blog
                  <Image
                    src={folderBlog}
                    loading="lazy"
                    className="imageIconStyle"
                  />
                </Center>
              </Link>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Passion;
