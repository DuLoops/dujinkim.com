import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  FormControl,
  FormLabel,
  Input,
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
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsStrava, BsInstagram } from "react-icons/bs";
import {MdOutlineFolderShared} from 'react-icons/md'
import folderBlog from "../resources/images/icons/folder-blog.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Clear = styled.div`
  clear: both;
`;
export default function Contact(props) {
  const [form, setForm] = useState({
    about: "web-development",
    other: "",
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
      .then(() => {
        setForm({
          about: "web-development",
          other: "",
          email: "",
          text: "",
        });
      });
  };
  const SnsForm = () => {
    return (
      <Box
        bg={"lightGlass.100"}
        p={"5px"}
        borderRadius="0px 0px 10px 10px"
        mt="10px"
      >
        <Flex direction={"row"} justifyContent={"space-around"}>
          <Tooltip label="Connect on LinkedIn" hasArrow>
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#0077b5" }}
              icon={<BsLinkedin size="28px" />}
              onClick={() =>
                window.open("https://www.linkedin.com/in/dujin-kim/", "_blank")
              }
            />
          </Tooltip>
          <Tooltip label="Opensource on Github" hasArrow>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#000", color: "white" }}
              icon={<BsGithub size="32px" />}
              onClick={() =>
                window.open("https://github.com/DuLoops", "_blank")
              }
            />
          </Tooltip>
          <Tooltip label="DuLoops Blog" hasArrow>
          <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "green.300", color: "white" }}
              icon={<MdOutlineFolderShared size="35px" />}
              onClick={() =>
                window.open("https://duloops.com/", "_blank")
              }
            />
            
          </Tooltip>
          <Tooltip label="Connect on Instagram" hasArrow>
            <IconButton
              aria-label="instagram"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#EA185A" }}
              icon={<BsInstagram size="28px" />}
              onClick={() =>
                window.open("https://www.instagram.com/dujinkim_/", "_blank")
              }
            />
          </Tooltip>
          <Tooltip label="Let's share our adventures on Strava" hasArrow>
            <IconButton
              aria-label="strava"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#fc4c02" }}
              icon={<BsStrava size="28px" />}
              onClick={() =>
                window.open(
                  "https://www.strava.com/athletes/dujinkim",
                  "_blank"
                )
              }
            />
          </Tooltip>
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

  return (
    <Container
      bg={props.colorMode == "light" ? "neutralGreen.100" : ""}
      maxW="full"
      p="15px"
    >
      <Heading
        textAlign="center"
        width={"70%"}
        margin="auto"
        borderBottom={"3px solid"}
        pb="5px"
        mb={{ sm: "3rem", md: "6rem" }}
      >
        Contact
      </Heading>
      {submitted ? (
        <Box m="20px" borderRadius={"xl"} bg="whiteAlpha.100">
          <Text fontSize="xl" textAlign={"center"} fontWeight={"500"} py="20px">
            Thank you for reaching me!
            <br />
            I'll get back to you shortly!
          </Text>
          <SnsForm />
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box
            bg={
              props.colorMode == "light" ? "blackAlpha.400" : "whiteAlpha.100"
            }
            borderRadius="10px"
            maxW="900px"
            m="auto"
          >
            <Box
              className="left"
              w={{ md: "50%" }}
              float={{ md: "left" }}
              p="10px"
            >
              <Text my="10px" textAlign={"center"}>
                Email:&nbsp;
                <Link href="mailto:contact@dujinkim.com" color="blue.300">
                  contact@dujinkim.com
                </Link>
              </Text>
              <FormLabel>Select a Title</FormLabel>
              <RadioGroup
                onChange={handleRadio}
                value={form.about}
                name="about"
                px="10px"
              >
                <Stack>
                  <Radio value="web-development">
                    Software(Web) Development
                  </Radio>
                  <Radio value="photography">Photography</Radio>
                  <Radio value="blog">DuLoops.com Blog</Radio>
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
            </Box>
            <Flex
              direction={"column"}
              gap="5px"
              p="10px"
              justifyContent={"space-evenly"}
            >
              <FormControl isRequired>
                <FormLabel m="0">Email</FormLabel>
                <Input
                  value={form.email}
                  onChange={handleChange}
                  size="sm"
                  name="email"
                  type="email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel m="0">Message</FormLabel>
                <Textarea
                  value={form.text}
                  onChange={handleChange}
                  size="sm"
                  name="text"
                  // height={'110px'}
                />
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                colorScheme={"green"}
                mt="1rem"
              >
                {!loading ? "Send Message" : <Spinner />}
              </Button>
            </Flex>
            <Clear />
            {alert && <ErrorAlert />}
            <SnsForm />
          </Box>
        </form>
      )}
    </Container>
  );
}
