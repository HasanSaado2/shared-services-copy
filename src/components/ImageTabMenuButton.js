import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  PixelRatio,
} from "react-native";

const pixelDensity = PixelRatio.get();

function ImageTabMenuButton({
  ButtonText,
  selected,
  ButtonIndex,
  setActiveIndex,
  selectedId,
  setSelectedId,
  width,
  ImageSrc,
}) {
  const onMenuButtonClick = () => {
    setActiveIndex(ButtonIndex);
    setSelectedId(selectedId);
  };
  return (
    <TouchableOpacity
      style={[
        styles.imageButton,
        selected == ButtonIndex ? styles.selectedButton : {},
      ]}
      onPress={() => onMenuButtonClick()}
    >
      <Image style={styles.buttonImage} source={ImageSrc}></Image>
      <Text style={styles.buttonTextt}>{ButtonText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonTextt: {
    fontSize: 18 / pixelDensity,
    fontWeight: 600,
    alignSelf: "center",
    marginLeft: 10,
  },
  buttonImage: {
    width: 65 / pixelDensity,
    height: 65 / pixelDensity,
    borderRadius: 12 / pixelDensity,
    backgroundColor: "#EFF1FC",
  },
  imageButton: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: 12 / pixelDensity,
    height: 91 / pixelDensity,
    width: 323 / pixelDensity,
    borderRadius: 12,
  },

  button: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 91 / pixelDensity,
    width: 323 / pixelDensity,
    alignItems: "flex-start",
    borderRadius: 12,
    padding: 12 / pixelDensity,
  },
  selectedButton: {
    borderColor: "#6D13FF",
    borderWidth: 2,
  },
});
export default ImageTabMenuButton;
