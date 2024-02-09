import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
  PixelRatio,
} from "react-native";

const { height, width } = Dimensions.get("window");

const pixelDensity = PixelRatio.get();

function MenuButton({
  ButtonText,
  imageLocation,
  selected,
  onButtonPress,
  ButtonIndex,
  setActiveIndex,
  setCategoryId,
  CategoryId,
  pendingOrders,
  inProgressOrders,
  backgroundColor,
}) {
  const menuButtonClick = () => {
    setActiveIndex(ButtonIndex);
    setCategoryId(CategoryId);
  };

  return (
    <TouchableOpacity
      style={
        selected == 0 ? styles.menuBtn : [styles.menuBtn, styles.selectedButton]
      }
      onPress={() => menuButtonClick()}
    >
      <View style={[{ backgroundColor: backgroundColor }, styles.coloredBox]}>
        <Image style={styles.tinyLogo} source={imageLocation} />
      </View>
      <Text style={styles.buttonText}>{ButtonText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 22 / pixelDensity,
    fontFamily: "MontserratBold",
    fontWeight: 600,
    marginTop: 24 / pixelDensity,
    color: "#1E1E1E",
  },
  boxButton: {
    backgroundColor: "#EFF1FC",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  boxSelectedButton: {
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  button: {
    // alignItems: "center",
    backgroundColor: "white",
    width: 335 / pixelDensity,
    flexDirection: 810 === width ? "row" : "column",
    padding: 20 / pixelDensity,
    borderRadius: 12,
    marginLeft: 30 / pixelDensity,
    marginRight: 30 / pixelDensity,
    textAlign: "center",
  },
  coloredBox: {
    alignItems: "center",
    borderRadius: 12,
    width: 295 / pixelDensity,
    height: 188 / pixelDensity,
    justifyContent: "center",
  },
  menuBtn: {
    backgroundColor: "white",
    width: 334 / pixelDensity,
    height: 289 / pixelDensity,
    margin: 30 / pixelDensity,
    padding: 20 / pixelDensity,
    flexDirection: "column",
    borderRadius: 12,
    display: "flex",
  },
  selectedButton: {
    borderColor: "#6D13FF",
    borderWidth: 2,
    // backgroundColor: "#B4C0FE",

    // alignItems: "center",
  },
  tinyLogo: {
    width: 131 / pixelDensity,
    height: 133 / pixelDensity,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default MenuButton;
