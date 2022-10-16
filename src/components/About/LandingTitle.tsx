import { Box, Text } from "@chakra-ui/react";
import WordWave from "../ui/textAnimation/WordWave";
import LetterWave from "../ui/textAnimation/LetterWave";
import { motion } from "framer-motion";
import styled from "styled-components";

const LandingTitle = () => {
  const placeholderText = [
    {
      type: "heading1",
      text: "I'm DuJin, a passionate computer science graduate based in Vancouver.",
    },
    {
      type: "heading2",
      text: "I am eager to start my career as a web developer!",
    },
  ];

  const container = {
    visible: {
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.03,
      },
    },
  };

  const Dialog = styled(Box)`
    &:after {
      @include transform(skewX(-15deg));
      content: "";
      position: absolute;
      top: 100%;
      left: 25px;
      border-width: 30px 30px 0 0;
      border-style: solid;
      border-color: #1C1D1F transparent;
    }
  `;

  return (
    <Dialog
      backgroundColor={'dark.100'}
      p="20px"
      borderRadius={"10px"}
      bottom={{md:'100px', lg:'150px', xl:'300px'}}
      left={{md:'300px', xl:'600px'}}
      position="absolute"
    >
      <Text fontSize="3xl" alignItems={"center"} color='white'>
        <WordWave isArray={true} wordArray={["Hi!"]} delay={0} duration={1} />
      </Text>
      <Text fontSize={{md:'md', xl:'xl'}} alignItems={"center"} color="white" marginTop="50px">
        <motion.div
          className="App"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              setTimeout(() => {}, 3000 * index);
              return <LetterWave {...item} key={index} />;
            })}
          </div>
        </motion.div>
      </Text>
    </Dialog>
  );
};

export default LandingTitle;
