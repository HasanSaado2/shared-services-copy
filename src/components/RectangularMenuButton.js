import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import API_URL from "../Constants";
import StarGold from "@assets/star-gold.png";

function RectangularMenuButton({ buttonText, handlePress, ItemId }) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.centerView}>
      <View style={styles.flexRow}>
        <Image
          source={{
            uri: `${API_URL}/Images/Cat_${ItemId}.png`,
          }}
          style={styles.image}
        />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  centerView: {
    justifyContent: "center",
    width: 150,
    height: 50,
    borderRadius: 7,
    backgroundColor: "#EEF5FF",
    margin: 5,
  },
  flexRow: { display: "flex", flexDirection: "row", justifyContent: "center" },
  starIcon: {
    position: "absolute",
    top: -5,
    right: -5,
  },
  image: {
    width: 17,
    height: 17,
  },
  buttonText: {
    fontFamily: "MontserratMedium",
    fontSize: 10,
    color: "#000000",
    marginTop: 5,
    marginLeft: 2,
  },
});
export default RectangularMenuButton;
