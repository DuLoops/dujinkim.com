import { Link } from "react-router-dom";
import { Container, Image, Flex, Text, Box} from "@chakra-ui/react";

interface fileInfo {
  desc: string;
  img: any;
  alt: string;
  link: string;
  isMobile: boolean;
}

const File = (props: fileInfo) => {


  return (
    <Flex
      textAlign="center"
      paddingX="2rem"
    >
      <Box padding='10px' >
      <Link to={props.link} className="link">
        <Image
          src={props.img}
          alt={props.alt}
          margin='auto'
          w={{base: 200, xl: 300}}
        />
        <Text fontSize="4xl">{props.desc}</Text>
      </Link>
      </Box>
    </Flex>
  );
};

export default File;
