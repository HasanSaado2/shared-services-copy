import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio,
} from "react-native";

const pixelDensity = PixelRatio.get();

function MiniTitle({ orientation }) {
  return (
    <View>
      <Text style={[styles.welcomeText, { textAlign: orientation }]}>
        WELCOME TO
      </Text>
      <Text style={styles.nameText}>
        Support <Text style={styles.hubText}>Hub</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 24 / pixelDensity,
    color: "#000",
    fontFamily: "MontserratBold",
  },

  nameText: {
    fontSize: 38 / pixelDensity,
    fontFamily: "MontserratBlack",
    color: "#000000",
    textTransform: "uppercase",
  },

  hubText: {
    fontSize: 38 / pixelDensity,
    fontFamily: "MontserratRegular",
    color: "#000000",
    textTransform: "uppercase",
  },
});

export default MiniTitle;
