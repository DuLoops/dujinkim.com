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

export default function ProjectField(props) {
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
      <Box m="1rem" p="1rem" background={"whiteAlpha.200"} borderRadius="1rem">
        <Text>{props.project.detail}</Text>
        <Flex mt="1rem" justifyContent={"space-around"} alignItems="center">
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
