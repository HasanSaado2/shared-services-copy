import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Camera_Choose from "@assets/Camera_Choose.png";
import Gallery_Choose from "@assets/Gallery_Choose.png";
import closeModal from "@assets/CloseModal.png";
import API_URL from "../Constants";
import axios from "axios";
import { useState } from "react";
const { height, width } = Dimensions.get("window");

function CameraMenu({ showCameraMenu, setShowrCameraMenu, userId }) {
  const [pickedImagePath, setPickedImagePath] = useState("");
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    uploadImage(result);
  };
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    uploadImage(result);
  };

  const uploadImage = (result) => {
    if (!result.canceled) {
      setPickedImagePath(result.assets[0].uri);
      console.log(result.assets[0].uri);

      let localUri = result.assets[0].uri;
      let filename = localUri.split("/").pop();
      console.log(localUri);
      console.log(filename);

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      // Upload the image using the fetch and FormData APIs
      let formData = new FormData();
      // Assume "photo" is the name of the form field the server expects
      formData.append("FileToUpload", { uri: localUri, name: filename, type });
      formData.append("UserId", userId);

      axios({
        method: "post",
        url: API_URL + `/User/UploadProfileImage`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          setShowCameraMenu(false);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
          setShowCameraMenu(false);
        });
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showCameraMenu}
      onRequestClose={() => {
        setShowCameraMenu(!showCameraMenu);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => setShowCameraMenu(false)}
            >
              <Image source={closeModal}></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
            <Image source={Camera_Choose}></Image>
            <Text style={styles.cameraText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={showImagePicker}
          >
            <Image source={Gallery_Choose}></Image>
            <Text style={styles.cameraText}>Choose From Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  closeModal: {
    alignSelf: "flex-end",
  },
  modalView: {
    position: "absolute",
    top: height - 150,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height: 150,
  },
  cameraButton: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    marginBottom: 12,
  },
  cameraText: {
    color: "#070085",
    marginLeft: 13,
    fontSize: 14,
  },
  imageContainer: {
    padding: 30,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
  },
});

export default CameraMenu;
