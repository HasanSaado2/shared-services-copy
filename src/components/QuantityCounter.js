import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  PixelRatio,
} from "react-native";
import React, { useState, useEffect } from "react";

const pixelDensity = PixelRatio.get();

function QuantityCounter({
  itemQuantity,
  setItemQuantity,
  height = 45,
  width = 61,
}) {
  const decreaseQuantity = () => {
    if (itemQuantity != 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };
  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  return (
    <View style={styles.globalButton}>
      <TouchableOpacity
        style={[
          styles.greyLeftButton,
          { width: width },
          { height: height },
          { backgroundColor: "#F5F7FF" },
        ]}
        onPress={() => decreaseQuantity()}
      >
        <Text style={[styles.buttonText, { color: "black" }]}>-</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.QuantityDiv,
          { width: width },
          { height: height },
          { backgroundColor: "#F5F7FF" },
        ]}
      >
        <Text style={[styles.buttonText, { color: "black" }]}>
          {itemQuantity}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.greyRightButton,
          { width: width },
          { height: height },
          { backgroundColor: "#F5F7FF" },
        ]}
        onPress={() => increaseQuantity()}
      >
        <Text style={[styles.buttonText, { color: "black" }]}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  greyLeftButton: {
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,

    justifyContent: "center",
    alignItems: "center",
  },
  greyRightButton: {
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,

    justifyContent: "center",
    alignItems: "center",
  },
  QuantityDiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 700,
  },
  globalButton: {
    display: "flex",
    flexDirection: "row",
  },
});
export default QuantityCounter;
