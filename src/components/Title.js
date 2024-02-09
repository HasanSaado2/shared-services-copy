import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio,
} from "react-native";

const pixelDensity = PixelRatio.get();

function Title({ orientation, topText = "Welcome to", fontSize = 48 }) {
  return (
    <View>
      <Text
        style={[
          styles.welcomeText,
          { textAlign: orientation, fontSize: fontSize },
        ]}
      >
        {topText}
      </Text>
      <Text style={styles.nameText}>
        Support <Text style={styles.hubText}>Hub</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  welcomeText: {
    color: "#000",
    fontFamily: "MontserratBold",
  },

  nameText: {
    fontSize: 24,
    fontFamily: "MontserratBlack",
    color: "#002FFF",
    textTransform: "uppercase",
  },

  hubText: {
    fontSize: 24,
    fontFamily: "MontserratRegular",
    color: "#002FFF",
    textTransform: "uppercase",
  },
});

export default Title;
