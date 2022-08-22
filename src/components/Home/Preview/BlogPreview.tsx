import { Box, Heading } from "@chakra-ui/react";
import WordWave from "../../UI/textAnimation/WordWave";

const Blog = (props: any) => {
  return (
    <Box>
      <Heading size="4xl" color={'white'}>Blog</Heading>
      <Heading size="2xl" mt='1rem' color='white.100'>
        {props.play ? (
          <WordWave
            isArray={false}
            text={"Sharing My Passion"}
            duration={0.3}
            delay={0}
          />
        ) : (
          <p>Sharing My Passion</p>
        )}
      </Heading>
    </Box>
  );
};

export default Blog;
