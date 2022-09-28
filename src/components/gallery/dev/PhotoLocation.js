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
import { useEffect } from "react";


const PhotoLocation = (props) => {

//AIzaSyARm4u82aPsKxLZ_vpCdmsgJYTWDmgXzgI

  useEffect(() => {
    
  })


  return (
    <Modal isOpen={props.isOpen} onClose={props.setIsOpen.off}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.setIsOpen.off}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PhotoLocation;
