import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import QuantityCounter from "./QuantityCounter";

const pixelDensity = PixelRatio.get();

function SpecialRequestQuantity({ sweetRow, IncrementHandler, CheckId }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    IncrementHandler(CheckId, quantity);
  }, [quantity]);

  return (
    <View style={styles.sweetnerRow}>
      <Text style={styles.sweetnerText}>{sweetRow.CheckText}</Text>
      <QuantityCounter
        height={43 / pixelDensity}
        width={60 / pixelDensity}
        itemQuantity={quantity}
        setItemQuantity={setQuantity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sweetnerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12 / pixelDensity,
    paddingBottom: 12 / pixelDensity,
    borderBottomWidth: 1,
    borderBottomColor: "#8B8B8B",
  },
  sweetnerText: {
    fontSize: 18 / pixelDensity,
    fontFamily: "MontserratRegular",
  },
});

export default SpecialRequestQuantity;
