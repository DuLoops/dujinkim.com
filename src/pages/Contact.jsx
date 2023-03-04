import { Box } from "@chakra-ui/react";
import ContactForm from "../container/ContactForm";
import Nav from "../container/Nav";

export default function Contact() {
  return (
    <Box>
      <Nav />
      <Box pt='60px'>
        <ContactForm />
      </Box>
    </Box>
  );
}
