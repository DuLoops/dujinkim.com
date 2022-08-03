import { Box, Heading } from "@chakra-ui/react";
import WordWave from "../../UI/TextAnimation/WordWave";

const AboutPreview = (props: any) => {
  return (
    <Box>
      <Heading size="4xl" mb="1rem">
        About Dujin Kim
      </Heading>
      {props.play ? (
        <Heading size="2xl">
          <WordWave
            isArray={true}
            wordArray={["UI/UX Designer"]}
            duration={0}
            delay={0}
          />
          <WordWave isArray={false} text={"&"} duration={0} delay={0.5} />
          <WordWave
            isArray={false}
            text={"Photographer"}
            duration={0}
            delay={0.5}
          />{" "}
        </Heading>
      ) : (
        <Heading size="2xl">
          UI/UX Designer
          <br />
          &
          <br />
          Photographer
        </Heading>
      )}
    </Box>
  );
};

export default AboutPreview;
