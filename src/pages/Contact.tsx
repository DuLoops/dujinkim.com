import Nav from "../container/Nav";
import ContactForm from "../container/ContactForm";
import { Box, Center } from "@chakra-ui/react";
const Contact = () => {
  return (
    <Box h="100vh" bgColor="neutralGreen.100">
      <Nav />
      <Center my="auto" h="100%">
        <ContactForm />
      </Center>
    </Box>
  );
};

export default Contact;
