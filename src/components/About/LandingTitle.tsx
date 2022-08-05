import { Box, Text } from "@chakra-ui/react";
import WordWave from "../UI/TextAnimation/WordWave";
import LetterWave from "../UI/TextAnimation/LetterWave";
import { motion } from "framer-motion";

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

  return (
    <Box>
      <Text fontSize="3xl" alignItems={"center"} color="brandOrange.200" mt='20px'>
        <WordWave
          isArray={true}
          wordArray={["Hi!"]}
          delay={0}
          duration={1}
        />
      </Text>
      <Text fontSize="xl" alignItems={"center"} color='brandOrange.300' marginTop='50px'>
        <motion.div
          className="App"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
                setTimeout(() => {
  
                }, 3000*index )
              return <LetterWave {...item} key={index} />;
            })}
          </div>
        </motion.div>
      </Text>

    </Box>
  );
};

export default LandingTitle;
