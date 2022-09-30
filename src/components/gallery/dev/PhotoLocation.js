import {
  Text,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  useBoolean,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import {
  arrayUnion,
  doc,
  GeoPoint,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { apiKey } from "../../../api/googleMapApi";
import { db } from "../../../firebase/config";

const PhotoLocation = (props) => {
  //AIzaSyARm4u82aPsKxLZ_vpCdmsgJYTWDmgXzgI
  const [address, setAddress] = useState("");

  const handleSearch = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(
        /\s/g,
        "+"
      )}&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status != "OK") {
          alert(`Error: ${data.status}`);
        } else {
          props.setLocationData({
            place_id: data.results[0].place_id,
            address_components: data.results[0].address_components,
            formatted_address: data.results[0].formatted_address,
            geo_point: data.results[0].geometry.location,
          });
        }
      });
  };

  const addNewLocationDoc = async () => {
    await setDoc(
      doc(db, "locations", props.locationData.place_id),
      {
        address_components: props.locationData.address_components,
        formatted_address: props.locationData.formatted_address,
        geo_point: new GeoPoint(
          props.locationData.geo_point.lat,
          props.locationData.geo_point.lng
        ),
      },
      { merge: true }
    ).then(() => {
      updateDoc(doc(db, "locations", props.locationData.place_id), {
        linkedPhotos: arrayUnion(props.photoID),
      });
    });
  };

  const handleSave = () => {
    if (!props.locationData) {
      alert("No location found");
      return;
    } else {
      addNewLocationDoc().then(props.setIsOpen.off());
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.setIsOpen.off}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Button onClick={handleSearch}>Search</Button>
          {props.locationData && (
            <Text color={"grey"}>{props.locationData.formatted_address}</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            variant="ghost"
            onClick={() => {
              props.setLocationData(null);
            }}
            mr={3}
          >
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PhotoLocation;
