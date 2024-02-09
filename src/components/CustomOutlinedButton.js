import { StyleSheet, Text, TouchableOpacity, PixelRatio } from "react-native";

const pixelDensity = PixelRatio.get();

function CustomOutlinedButton({
  text,
  height,
  onPress,
  borderColor = "#6D13FF",
  width = 142,
  fontSize = 18,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { height: height, borderColor: borderColor, width: width },
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.buttonText, { color: borderColor, fontSize: fontSize }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "MontserratSemiBold",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    padding: 10 / pixelDensity,
    borderRadius: 8 / pixelDensity,
    borderWidth: 1,
  },
});

export default CustomOutlinedButton;
