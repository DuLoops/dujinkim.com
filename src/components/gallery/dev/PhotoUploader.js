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
} from "@chakra-ui/react";

const PhotoUploader = (props) => {
  const categories = [
    "all",
    "adventure",
    "landscape",
    "sports",
    "life",
    "architecture",
    "products",
  ];

  const [photoDet, setPhotoDet] = useState({
    title: props.photo.name.replace(/\.[^/.]+$/, ""),
    desc: "",
    date: props.photo.lastModifiedDate.toLocaleDateString("en-CA"),
    // location: {lat:0, long:0}
    location: {},
    links: [],
  });

  const [category, setCategory] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleChange = (e) => {
    console.log(category);

    setPhotoDet({ ...photoDet, [e.target.name]: e.target.value });
  };

  return (
    <Box
      w="200px"
      backgroundColor="darkGlass.100"
      textSize="sm"
      color={"black"}
      p='5px'
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
        <FormLabel>Links</FormLabel>
        <Input
          name="links"
          type={"text"}
          value={photoDet.links}
          onChange={handleChange}
        />
      </form>
    </Box>
  );
};

export default PhotoUploader;
