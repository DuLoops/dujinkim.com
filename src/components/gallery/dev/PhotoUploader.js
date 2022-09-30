import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
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
import { arrayRemove, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const PhotoUploader = forwardRef((props, ref) => {
  const [photoDet, setPhotoDet] = useState({
    photoID: encodeURI(
      props.photo.name.replace(/\.[^/.]+$/, "").concat(props.photo.lastModified)
    ),
    title: props.photo.name.replace(/\.[^/.]+$/, ""),
    desc: "",
    date: props.photo.lastModifiedDate.toLocaleDateString("en-CA"),
  });
  const [links, setLinks] = useState([]);
  const [locationData, setLocationData] = useState();
  const [category, setCategory] = useState({
    all: true,
    adventure: false,
    landscape: false,
    sports: false,
    life: false,
    architecture: false,
    products: false,
  });

  const categories = [
    "all",
    "adventure",
    "landscape",
    "sports",
    "life",
    "architecture",
    "products",
  ];

  const [isLocationOpen, setIsLocationOpen] = useBoolean();
  const [isLinkOpen, setIsLinkOpen] = useBoolean();

  const handleChange = (e) => {
    setPhotoDet({ ...photoDet, [e.target.name]: e.target.value });
  };

  const removeLinkDoc = async (link) => {
    await updateDoc(doc(db, "links", link), {
      linkedPhotos: arrayRemove(photoDet.photoID),
    });
  };

  useImperativeHandle(ref, () => ({
    upload() {
      console.log(photoDet.photoID);
    },
  }));

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
                isChecked={category[cat]}
                onChange={(e) => {
                  setCategory({ ...category, [cat]: e.target.checked });
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
        {locationData && <Text>{locationData.formatted_address}</Text>}
        <Button onClick={setIsLocationOpen.on}>Set Location</Button>
        {isLocationOpen && (
          <PhotoLocation
            isOpen={isLocationOpen}
            setIsOpen={setIsLocationOpen}
            setLocationData={setLocationData}
            locationData={locationData}
            photoID={photoDet.photoID}
          />
        )}
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
                      removeLinkDoc(link);
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
});

export default PhotoUploader;
