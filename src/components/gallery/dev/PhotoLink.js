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
import { db } from "../../../firebase/config";
import { doc, getDocs, collection, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const PhotoLink = (props) => {
  const [linkDocs, setLinkDocs] = useState([]);
  const [newLink, setNewLink] = useState({
    docName: "",
    linkName: "",
    linkAddress: "",
    photoID: [props.photoID],
  });
  const [createNewLink, setCreateNewLink] = useBoolean();
  const [selectedLink, setSelectedLink] = useState("test");

  const getLinkDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "links"));
    setLinkDocs(querySnapshot.docs);
  };

  useEffect(() => {
    getLinkDocs();
  }, []);

  const handleChange = (e) => {
    setNewLink({ ...newLink, [e.target.name]: e.target.value });
  };

  const addNewLinkDoc = async () => {
    await setDoc(doc(db, "links", newLink.docName), {
      linkName: newLink.linkName,
      linkAddress: newLink.linkAddress,
      availability: true,
      photoID: newLink.photoID,
    });
  };

  const handleNewLink = (e) => {
    e.preventDefault();
    addNewLinkDoc().then(() => {
      props.setLinks((prevLinks) => ([...prevLinks, newLink.docName]));
    });
    props.setIsOpen.off();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLinks((prevLinks) => ([...prevLinks, selectedLink]));
    props.setIsOpen.off();
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.setIsOpen.off}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Link</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {linkDocs && (
            <Select
              onChange={(e) => {
                setSelectedLink(e.target.value);
              }}
              value={selectedLink}
            >
              {linkDocs.map((doc) => {
                return <option value={doc.id}>{doc.id}</option>;
              })}
            </Select>
          )}
          <Button onClick={setCreateNewLink.toggle}>
            {createNewLink ? "Cance new link" : "Create new link"}
          </Button>
          {createNewLink && (
            <form onSubmit={handleNewLink}>
              <FormLabel>Doc Name</FormLabel>
              <Input
                type={"text"}
                name={"docName"}
                value={newLink.docName}
                onChange={handleChange}
                required
              />
              <FormLabel>Link Name</FormLabel>

              <Input
                type={"text"}
                name={"linkName"}
                value={newLink.linkName}
                onChange={handleChange}
                required
              />
              <FormLabel>Link Address</FormLabel>
              <Input
                type={"text"}
                name={"linkAddress"}
                value={newLink.linkAddress}
                onChange={handleChange}
                required
              />
              <Button type={"submit"}>Add Link</Button>
            </form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={props.setIsOpen.off}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>Add Link</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PhotoLink;
