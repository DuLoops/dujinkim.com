import { Box, Heading } from "@chakra-ui/react";
import WordWave from "../../UI/textAnimation/WordWave";

const Blog = (props: any) => {

  const desc = 'Sharing my passion';
  return (
    <Box>
      <Heading size="2xl" color={'white'}>Blog</Heading>
      <Heading size="xl" mt='1rem' color='light.100'>
        {props.play ? (
          <WordWave
            isArray={false}
            text={desc}
            duration={0.3}
            delay={0.2}
          />
        ) : (
          <p>{desc}</p>
        )}
      </Heading>
    </Box>
  );
};

export default Blog;
