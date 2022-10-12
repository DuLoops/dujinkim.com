import { Box, Heading, Text } from "@chakra-ui/react";
import WordWave from "../../UI/textAnimation/WordWave";

const AboutPreview = (props: any) => {
  const desc ='Software Developer / Designer'
  const descArray = ['Software Developer', '/ Designer']
  return (
    <Box>
      <Heading size="2xl" mb="1rem" color={"white"}>
        About Dujin Kim
      </Heading>
      {props.play ? (
        <Heading size="xl" color={"light.100"}>
          <WordWave
            isArray={true}
            wordArray={descArray}
            duration={0.4}
            delay={0.2}
          />
          {/* <WordWave isArray={false} text={"&"} duration={0} delay={0.5} />
          <WordWave
            isArray={false}
            text={"Photographer"}
            duration={0}
            delay={0.5}
          />{" "} */}
        </Heading>
      ) : (
        <Heading size="xl" color={"light.100"}>
          <p>{desc}</p>
          {/* <br />
          &
          <br />
          Photographer */}
        </Heading>
      )}
    </Box>
  );
};

export default AboutPreview;
