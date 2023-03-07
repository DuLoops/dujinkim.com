import {
  Box,
  Flex,
  Heading,
  Text,
  Center,
  Tag,
  HStack,
  Link,
  Button,
  Grid,
} from "@chakra-ui/react";
import ProjectCarousel from "../../components/projects/ProjectCarousel";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export default function ProjectField(props) {
  console.log(props.project.detail)
  return (
    <Flex
      w="100%"
      flexDir="column"
      p="2rem"
      gap="1rem"
      overflow={"scroll"}
      className="hideScrollbar"
    >
      <Heading textAlign={"center"}>{props.project.desc}</Heading>
      <Box m="1rem" p="2rem" background={"whiteAlpha.200"} borderRadius="1rem">
        <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
          {props.project.detail}
        </ReactMarkdown>
        <Flex mt="2rem" justifyContent={"space-around"} alignItems="center" flexDir={{sm: 'column', lg:'row'}}gap='1rem'>
          <HStack justifyContent={"center"}>
            {props.project.link && (
              <Link href={props.project.link} target="_blank">
                <Button colorScheme="facebook" leftIcon={<AiOutlineLink />}>
                  Link
                </Button>
              </Link>
            )}
            {props.project.git && (
              <Link href={props.project.git} target="_blank">
                <Button colorScheme="twitter" leftIcon={<AiFillGithub />}>
                  GitHub
                </Button>
              </Link>
            )}
          </HStack>
          <Flex justifyContent={"center"} gap="8px">
            Technology used:
            {props.project.tech.map((item, index) => (
              <Tag key={index} colorScheme={item.color} size="md">
                {item.name}
              </Tag>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Center width={"100%"}>
        <ProjectCarousel images={props.project.images} />
      </Center>
    </Flex>
  );
}
