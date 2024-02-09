import { StyleSheet, TouchableOpacity, Image } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

function IconButton({ image, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.centerView}>
      <Image source={image}></Image>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  centerView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    margin: 7,
  },
  image: {
    height: 23,
    width: 23,
  },
});
export default IconButton;
