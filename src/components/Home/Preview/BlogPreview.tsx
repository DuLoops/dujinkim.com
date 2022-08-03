import { Box, Heading } from "@chakra-ui/react";
import WordWave from "../../UI/TextAnimation/WordWave";

const Blog = (props: any) => {
  return (
    <Box>
      <Heading size="4xl">Blog</Heading>
      <Heading size="2xl" mt='1rem'>
        {props.play ? (
          <WordWave
            isArray={false}
            text={"Sharing My Passion"}
            duration={0.3}
            delay={0}
          />
        ) : (
          `Sharing My Passion`
        )}
      </Heading>
    </Box>
  );
};

export default Blog;
