import { Box, Center } from "@chakra-ui/react";
import ContactForm from "../container/ContactForm";
import Nav from "../container/Nav";

export default function Contact() {
  return (
    <Box>
      <Nav />
      <Center h='90vh'>
        <ContactForm />
      </Center>
    </Box>
  );
}
