import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";

import goBack from "../../assets/goBack.png";

function GoBackButton({ SubCategoryText, onPress }) {
  return (
    <TouchableOpacity style={styles.displayRow} onPress={onPress}>
      <Image source={goBack}></Image>
      <Text style={styles.CategoryText}>{SubCategoryText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  displayRow: { display: "flex", flexDirection: "row", marginBottom: 20 },
  CategoryText: {
    fontSize: 21,
    fontFamily: "MontserratSemiBold",
    marginLeft: 10,
  },
});
export default GoBackButton;
