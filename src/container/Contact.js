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
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export default function Contact() {
  const Clear = styled.div`
    clear: both;
  `;

  const [form, setForm] = useState({
    about: "web-development",
    other: "",
    subject: "",
    email: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState(false);

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
    setLoading(true);
    console.log(form);
    emailjs
      .send("service_kgsfubg", "template_ofm6cnc", form, "82G2kc4aCnqBmcQit")
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          console.log("try again");
          console.log(error.text);
          setLoading(false);
          setAlert(true);
        }
      )
      .then(
        setForm({
          about: "web-development",
          other: "",
          name: "",
          email: "",
          text: "",
        })
      );
  };

  const RadioForm = () => {
    return (
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
    );
  };

  const InputForm = () => {
    return (
      <Flex direction={"column"} gap="5px">
        <FormControl isRequired>
          <Input
            value={form.email}
            onChange={handleChange}
            placeholder="*email"
            size="sm"
            name="email"
            type="email"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            value={form.subject}
            onChange={handleChange}
            placeholder="*subject"
            size="sm"
            name="subject"
            type="text"
          />
        </FormControl>
        <FormControl isRequired>
          <Textarea
            value={form.text}
            onChange={handleChange}
            placeholder="*message"
            size="sm"
            name="text"
          />
        </FormControl>
      </Flex>
    );
  };

  const SnsForm = () => {
    return (
      <Box bg={"lightGlass.100"} borderRadius="5px" p={"5px"}>
        <Text>Connect</Text>
        <Flex direction={'row'} justifyContent={'space-around'}>
          <IconButton
            aria-label="facebook"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
            icon={<MdFacebook size="28px" />}
          />
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
            icon={<BsGithub size="28px" />}
          />
          <IconButton
            aria-label="discord"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
            icon={<BsDiscord size="28px" />}
          />
        </Flex>
      </Box>
    );
  };

  const ErrorAlert = () => {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Message didn't send!</AlertTitle>
        <AlertDescription>Check your internet connection.</AlertDescription>
      </Alert>
    );
  };

  const ContactForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <Box
          bg="darkGlass.200"
          color="dark.100"
          borderRadius="lg"
          // m={{ sm: 4, md: 16, lg: 10 }}

          p={{ sm: 5, md: 5, lg: 13 }}
        >
          <Box
            className="left"
            w={{ md: "50%" }}
            float={{ md: "left" }}
            p="10px"
          >
            <Heading color={"gray.100"}>Contact</Heading>
            <Text my="10px">
              Email:
              <br />
              <Link href="mailto:contact@dujinkim.com">
                contact@dujinkim.com
              </Link>
            </Text>
            <RadioForm />
          </Box>
          <Flex direction={"column"} gap="5px">
            <SnsForm />
            <InputForm />
            <Button
              type="submit"
              variant="solid"
              // bg="#0D74FF"
              colorScheme={"teal"}
              // color="white"
            >
              {!loading ? "Send Message" : <Spinner />}
            </Button>
          </Flex>
          <Clear />
          {alert && <ErrorAlert />}
        </Box>
      </form>
    );
  };

  return (
    <Container bg="neutralGreen.100" maxW="full" p={"50px"}>
      {submitted ? (
        <Box m="50px">
          <Text>
            Thank you for reaching me! You can also connect with me via
          </Text>
          <SnsForm />
        </Box>
      ) : (
        <ContactForm />
      )}
    </Container>
  );
}
