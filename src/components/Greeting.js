import {
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  TouchableOpacity,
} from "react-native";
import dude from "@assets/dude.png";
import { P } from "@expo/html-elements";
const pixelDensity = PixelRatio.get();
function Greeting({ fontSize = 16, name, color = "#000", navigation, route }) {
  return (
    <View style={styles.displayRow}>
      <TouchableOpacity onPressIn={() => navigation.navigate("Profile")}>
        <Image source={dude} style={styles.profileImage}></Image>
      </TouchableOpacity>
      <View style={styles.TextWrap}>
        <Text
          style={[styles.welcomeText, { fontSize: fontSize, color: color }]}
        >
          Hi,
        </Text>
        <Text style={[styles.nameText, { color: color }]}>{name}!</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: "MontserratLight",
  },
  TextWrap: {
    marginLeft: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 12,
  },
  nameText: {
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
});

export default Greeting;
