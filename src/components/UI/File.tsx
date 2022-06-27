import { Link } from "react-router-dom";
import { Container, Image, Flex, Text, Box, Center } from "@chakra-ui/react";

interface fileProps {
  desc: string;
  img: any;
  alt: string;
  link: string;

}

const File = (props: fileProps) => {
  return (
    <Center textAlign="center" margin='2rem'>
      <Link to={props.link} className="link">
        <Image
          src={props.img}
          alt={props.alt}
          margin="auto"
          w={{ base: 200, xl: 300 }}
          height={{ base: 200, xl: 230 }}
        />
        <Text fontSize="4xl">{props.desc}</Text>
      </Link>
    </Center>
  );
};

export default File;
