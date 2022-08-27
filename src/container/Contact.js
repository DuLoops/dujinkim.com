import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    about: "web-development",
    other: "",
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleRadio = (radioValue) => {
    setForm({ ...form, about: radioValue });
  };

  const handleOther = () => {
    setForm({ ...form, about: "other" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    emailjs
      .send("service_kgsfubg", "template_ofm6cnc", form, "82G2kc4aCnqBmcQit")
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            about: "web-development",
            other: "",
            name: "",
            email: "",
            text: "",
          });
        },
        (error) => {
          console.log("try again");

          console.log(error.text);
        }
      );
  };

  return (
    <Container bg="neutralGreen.100" maxW="full" mt={0} centerContent>
      <Flex>
        <FormControl onSubmit={handleSubmit}>
          <Box
            bg="darkGlass.200"
            color="dark.100"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Heading color={"gray.100"}>Contact</Heading>
            <Text>
              Email:
              <br />
              <Link href="mailto:contact@dujinkim.com">
                contact@dujinkim.com
              </Link>
            </Text>
            <RadioGroup onChange={handleRadio} value={form.about} name="about">
              <Stack>
                <Radio value="web-development">Web Development</Radio>
                <Radio value="photography">Photography</Radio>
                <Radio value="blog">Blog</Radio>
                <Flex gap={"10px"}>
                  <Radio value={"other"} />
                  <Input
                    type="text"
                    onChange={handleChange}
                    onClick={handleOther}
                    value={form.other}
                    placeholder="Other"
                    name="other"
                  />
                </Flex>
              </Stack>
            </RadioGroup>

            <Flex direction={"column"} gap="5px">
              {/* <Stack direction={"row"}> */}
              <Input
                value={form.fullname}
                onChange={handleChange}
                placeholder="*name"
                size="sm"
                name="name"
                type="text"
              />

              <Input
                value={form.email}
                onChange={handleChange}
                placeholder="*email"
                size="sm"
                name="email"
                type="email"
              />
              {/* </Stack> */}
              <Textarea
                value={form.text}
                onChange={handleChange}
                placeholder="*message"
                size="sm"
                name="text"
              />

              <Button
                type="submit"
                variant="solid"
                bg="#0D74FF"
                color="white"
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </Flex>
          </Box>
        </FormControl>
      </Flex>
    </Container>
  );
}
