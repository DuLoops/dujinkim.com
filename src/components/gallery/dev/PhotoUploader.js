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

import PhotoUploadInfo from "./PhotoUploadInfo";
import uploadFile from "../../../hooks/uploadFile";
import {
  doc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { connectStorageEmulator } from "firebase/storage";

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
    async function uploadPhotos() {
      photos.map(async (photo) => {
        let filePath = await uploadFile(photo.file);
        setDoc(doc(db, "photos", photo.id), { ...photo, file: filePath }).then(()=>{
          console.log('hel;l');
        })
      });
    }
    // await uploadPhotos().then(() => {
    //   props.setPhotos(null);
    // });
  };

  return (
    <Box p="20px">
      {uploading ? (
        <Spinner color="red" />
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
          <Button colorScheme={"red"} onClick={handleUpload}>
            Upload
          </Button>
        </>
      )}
    </Box>
  );
};

// const GalleryDev = () => {
//   const [file, setFile] = useState<any>();
//   const [url, setUrl] = useState("");
//   const types = ["image/png", "image/jpeg"];

//   const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
//     //Choosing the first file
//     let selected: any = e.currentTarget.files;
//     let firstSelected = selected[0];
//     if (firstSelected && types.includes(firstSelected.type)) {
//       setFile(firstSelected);
//     } else {
//       setFile(undefined);
//       console.log("Wrong format");
//     }
//   };

//   return (
//     <form>
//       <input type="file" onChange={changeHandler} />
//       {file && <Text>{file.name}</Text>}
//       {file && <ProgressBar file={file} setImgUrl={setUrl} />}
//     </form>
//   );
// };

export default PhotoUploader;
