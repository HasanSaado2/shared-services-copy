import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import API_URL from "../Constants";
import StarGold from "../../assets/star-gold.png";

function SquareMenuButton({ buttonText, handlePress, ItemId }) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.centerView}>
      <Image source={StarGold} style={styles.starIcon} />
      <Image
        source={{
          uri: `${API_URL}/Images/Cat_${ItemId}.png`,
        }}
        style={styles.image}
      />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    borderRadius: 19,
    backgroundColor: "#EEF5FF",
    margin: 7,
    position: "relative",
  },
  starIcon: {
    position: "absolute",
    top: -5,
    right: -5,
  },
  image: {
    width: 25,
    height: 25,
  },
  buttonText: {
    fontFamily: "MontserratMedium",
    fontSize: 11,
    color: "#000000",
    marginTop: 5,
  },
});
export default SquareMenuButton;
