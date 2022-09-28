import { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  Form,
  Select,
  Stack,
  Checkbox,
  Button,
  useDisclosure,
  List,
  UnorderedList,
  ListItem,
  useBoolean,
} from "@chakra-ui/react";
import PhotoLink from "./PhotoLink";
import PhotoLocation from "./PhotoLocation";

const PhotoUploader = (props) => {
  const [photoDet, setPhotoDet] = useState({
    photoID: "",
    title: props.photo.name.replace(/\.[^/.]+$/, ""),
    desc: "",
    date: props.photo.lastModifiedDate.toLocaleDateString("en-CA"),
    // location: {lat:0, long:0}
    location: null,
    links: [],
  });
  const [links, setLinks] = useState([]);

  const categories = [
    "all",
    "adventure",
    "landscape",
    "sports",
    "life",
    "architecture",
    "products",
  ];
  const [category, setCategory] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [isLocationOpen, setIsLocationOpen] = useBoolean();
  const [isLinkOpen, setIsLinkOpen] = useBoolean();

  const handleChange = (e) => {
    console.log(links);
    setPhotoDet({ ...photoDet, [e.target.name]: e.target.value });
  };

  return (
    <Box
      w="200px"
      backgroundColor="darkGlass.100"
      textSize="sm"
      color={"black"}
      p="5px"
    >
      <Image src={URL.createObjectURL(props.photo)} alt={props.photo.name} />
      <form>
        <FormLabel>Category</FormLabel>
        <Stack>
          {categories.map((cat, index) => {
            return (
              <Checkbox
                isChecked={category[index]}
                onChange={(e) => {
                  setCategory({ ...category, [index]: e.target.checked });
                }}
                key={index}
              >
                {cat}
              </Checkbox>
            );
          })}
        </Stack>
        <FormLabel>Title</FormLabel>
        <Input
          name="title"
          type={"text"}
          value={photoDet.title}
          onChange={handleChange}
        />
        <FormLabel>Description</FormLabel>
        <Input
          name="desc"
          type={"text"}
          value={photoDet.desc}
          onChange={handleChange}
        />
        <FormLabel>Date</FormLabel>
        <Input
          name="date"
          type={"date"}
          value={photoDet.date}
          onChange={handleChange}
        />
        <FormLabel>Location</FormLabel>
        <Input
          name="location"
          type={"text"}
          value={photoDet.location}
          onChange={handleChange}
        />
        <Button onClick={setIsLocationOpen.on}>Set Location</Button>
        {isLocationOpen && <PhotoLocation isOpen={isLocationOpen} setIsOpen={setIsLocationOpen}/>}
        <FormLabel>Links</FormLabel>
        {links && (
          <UnorderedList>
            {links.map((link) => {
              return (
                <ListItem>
                  {link}
                  <Button
                    colorScheme={"red"}
                    size="xs"
                    onClick={() => {
                      setLinks((prevLinks) => {
                        return prevLinks.filter((item) => item != link);
                      });
                    }}
                  >
                    X
                  </Button>
                </ListItem>
              );
            })}
          </UnorderedList>
        )}
        <Button onClick={setIsLinkOpen.on}>Add Links</Button>
        {isLinkOpen && (
          <PhotoLink
            isOpen={isLinkOpen}
            setIsOpen={setIsLinkOpen}
            setLinks={setLinks}
            photoID={photoDet.photoID}
          />
        )}
      </form>
    </Box>
  );
};

export default PhotoUploader;
