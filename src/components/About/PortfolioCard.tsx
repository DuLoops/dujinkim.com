import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import Carousel from "../ui/gallery/Carousel";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface props {
  card: {
    title: string;
    desc?: string;
    tech: string;
    image: any;
    modal: {
      detail: string;
      tech: string[];
      images: string[];
      link?: string;
      git?: string;
    };
  };
}

export default function PorfolioCard(props: props) {
  const [displayInfo, setDisplayInfo] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center py={6} color='black'>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        position="relative"
        p={6}
        overflow={"hidden"}
        onMouseEnter={() => {
          setDisplayInfo(true);
        }}
        onMouseLeave={() => {
          setDisplayInfo(false);
        }}
        onClick={() => {
          setDisplayInfo(true);
        }}

      >
        <Box bg={"gray.100"} pos={"relative"}>
          <Image src={props.card.image} fit="fill" />
        </Box>
        {displayInfo && (
          <Flex
            flexDir={"column"}
            textAlign={"center"}
            justifyContent="space-evenly"
            alignItems={"center"}
            position={"absolute"}
            w="100%"
            h="100%"
            top="0"
            left="0"
            backgroundColor={"white"}
          >
            <Box>
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {props.card.title}
              </Heading>
              <Text>{props.card.desc}</Text>
            </Box>
            <Text color={"blue.500"}>{props.card.tech}</Text>
            <Button
              colorScheme="teal"
              variant="solid"
              w="200px"
              onClick={onOpen}
            >
              View More
            </Button>
          </Flex>
        )}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent pb='10px'>
          <Flex>
            <Carousel cards={props.card.modal.images} />
          </Flex>

          <ModalHeader>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {props.card.title}
            </Heading>
            <Text fontSize={"lg"}>{props.card.desc}</Text>
          </ModalHeader>
          <ModalCloseButton color={"black"} />
          <ModalBody>
            <Text fontSize="sm">{props.card.modal.detail}</Text>
          </ModalBody>

          <HStack mx="auto" my="5px">
            {props.card.modal.link && (
              <Link href={props.card.modal.link} target="_blank">
                <Button colorScheme="facebook" leftIcon={<AiOutlineLink />}>
                  Link
                </Button>
              </Link>
            )}
            {props.card.modal.git && (
              <Link href={props.card.modal.git} target="_blank">
                <Button colorScheme="twitter" leftIcon={<AiFillGithub />}>
                  GitHub
                </Button>
              </Link>
            )}
          </HStack>
        </ModalContent>
      </Modal>
    </Center>
  );
}
