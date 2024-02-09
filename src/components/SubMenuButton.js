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

function SubMenuButton({
  ButtonText,
  imageLocation,
  CategoryId,
  pendingOrders,
  inProgressOrders,
  completedOrders,
  allOrders,
}) {
  return (
    <View style={styles.button}>
      <View style={styles.boxButton}>
        <Image style={styles.tinyLogo} source={imageLocation} />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.numberContainer}>
          {0 != allOrders && "pending" == CategoryId && (
            <Text style={styles.ordersNumber}>{allOrders}</Text>
          )}
          {0 != inProgressOrders && "in-progress" == CategoryId && (
            <Text style={styles.ordersNumber}>{pendingOrders}</Text>
          )}
          {0 != completedOrders && "completed" == CategoryId && (
            <Text style={styles.ordersNumber}>{completedOrders}</Text>
          )}
          <Text style={styles.buttonText}>{ButtonText}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 24 / pixelDensity,
    fontFamily: "MontserratSemiBold",
    color: "#8B8B8B",
  },
  boxButton: {
    backgroundColor: "#EFF1FC",
    borderRadius: 12 / pixelDensity,
    justifyContent: "center",
    alignItems: "center",
    width: 147 / pixelDensity,
    height: 147 / pixelDensity,
  },
  boxSelectedButton: {
    backgroundColor: "white",
    borderRadius: 12 / pixelDensity,
    justifyContent: "center",
    alignItems: "center",
    width: 147 / pixelDensity,
    height: 147 / pixelDensity,
  },
  button: {
    backgroundColor: "white",
    // flex: 1,
    flexDirection: "row",
    padding: 10 / pixelDensity,
    borderRadius: 12 / pixelDensity,
    margin: 4 / pixelDensity,
    width: 605 / pixelDensity,
    height: 178 / pixelDensity,
    alignItems: "center",
  },
  selectedButton: {
    // flex: 1,
    backgroundColor: "#B4C0FE",
    borderRadius: 12 / pixelDensity,
    flexDirection: "row",
    padding: 10 / pixelDensity,
    margin: 4 / pixelDensity,
    width: 605 / pixelDensity,
    height: 178 / pixelDensity,
    alignItems: "center",
  },
  countContainer: {
    alignItems: "center",
    padding: 10 / pixelDensity,
  },

  tinyLogo: {
    height: 70.5 / pixelDensity,
    width: 70.5 / pixelDensity,
  },

  badge: {
    width: 23,
    height: 23,
    borderRadius: 50,
    backgroundColor: "#C90000",
    marginLeft: "auto",
    justifyContent: "center",
  },

  badgeTotal: {
    textAlign: "center",
    color: "#EFF1FC",
    fontSize: 14,
    fontFamily: "MontserratBold",
  },

  ordersNumber: {
    color: "#000",
    fontSize: 40 / pixelDensity,
    fontFamily: "MontserratBold",
  },

  numberContainer: {
    marginLeft: 32 / pixelDensity,
  },
});

export default SubMenuButton;
