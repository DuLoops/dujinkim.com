import {
  Box,
  Input,
  Text,
  Flex,
  Button,
  useBoolean,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState, useReducer } from "react";

import PhotoUploadInfo from "../../components/gallery/dev/PhotoUploadInfo";
import uploadFile from "../../hooks/uploadFile";
import {
  doc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../firebase/config";

const PhotoUploader = (props) => {
  const [uploading, setUploading] = useBoolean(false);

  const InitialPhotos = props.photos.map((photo) => {
    return {
      file: photo,
      id: encodeURI(
        photo.name.replace(/\.[^/.]+$/, "").concat(photo.lastModified)
      ),
      title: photo.name.replace(/\.[^/.]+$/, ""),
      desc: "",
      date: photo.lastModifiedDate.toLocaleDateString("en-CA"),
      links: [],
      location: null,
      categories: {
        all: true,
        adventure: false,
        landscape: false,
        sports: false,
        life: false,
        architecture: false,
        products: false,
      },
    };
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "SetCategory":
        return state.map((photo) => {
          if (photo.id === action.id) {
            return {
              ...photo,
              categories: {
                ...photo.categories,
                [action.category]: action.value,
              },
            };
          } else {
            return photo;
          }
        });
      //TextInput includes title, desc, date, and address
      case "SetTextInput":
        return state.map((photo) => {
          if (photo.id === action.id) {
            return { ...photo, [action.key]: action.value };
          } else {
            return photo;
          }
        });
      case "InsertLink":
        return state.map((photo) => {
          if (photo.id === action.id) {
            return { ...photo, links: photo.links.concat(action.value) };
          } else {
            return photo;
          }
        });
      case "RemoveLink":
        return state.map((photo) => {
          if (photo.id === action.id) {
            return {
              ...photo,
              links: photo.links.filter((link) => link != action.value),
            };
          } else {
            return photo;
          }
        });
      case "UploadFile":
        return state.map((photo) => {
          if (photo.id === action.id) {
            return {
              ...photo,
              file: action.value,
            };
          } else {
            return photo;
          }
        });

      default:
        return state;
    }
  };

  const [photos, dispatch] = useReducer(reducer, InitialPhotos);

  const handleUpload = async () => {
    setUploading.on();

    const requests = photos.map(async (photo) => {
      let filePath = await uploadFile(photo.file);
      setDoc(doc(db, "photos", photo.id), { ...photo, file: filePath });
    });

    Promise.all(requests).then(() => {
      props.setPhotos(null);
      alert("Upload compleated.");
    });
  };

  return (
    <Box p="20px">
      {uploading ? (
        <Box>
          <Text>
            Uploading <Spinner color="red" />
          </Text>
        </Box>
      ) : (
        <>
          <Flex gap={"10px"} m="20px">
            {photos.map((photo, index) => {
              return (
                <PhotoUploadInfo
                  photo={photo}
                  dispatch={dispatch}
                  key={index}
                />
              );
            })}
          </Flex>
          <Button colorScheme={"green"} onClick={handleUpload}>
            Upload
          </Button>
        </>
      )}
    </Box>
  );
};

export default PhotoUploader;
