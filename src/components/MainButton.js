import { StyleSheet, Text, TouchableOpacity, PixelRatio } from "react-native";

const pixelDensity = PixelRatio.get();

function MainButton({
  text,
  width,
  onPress,
  height = 65,
  color = "#6D13FF",
  fontSize = 18,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: width },
        { height: height },
        { backgroundColor: color },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { fontSize: fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontFamily: "MontserratBold",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    padding: 10 / pixelDensity,
    borderRadius: 8 / pixelDensity,
  },
});

export default MainButton;
