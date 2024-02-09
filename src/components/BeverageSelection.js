import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";

function BeverageSelection({ setParentId }) {
  const [selectedBeverageIndex, setSelectedBeverageIndex] = useState(0);

  const buttonClick = (index, parentId) => {
    setSelectedBeverageIndex(index);
    setParentId(parentId);
  };

  return (
    <View style={styles.displayRow}>
      <BeverageButton
        ButtonText="Hot"
        myIndex={0}
        selectedIndex={selectedBeverageIndex}
        onButtonPress={() => buttonClick(0, 1000)}
      />
      <BeverageButton
        ButtonText="Cold"
        myIndex={1}
        selectedIndex={selectedBeverageIndex}
        onButtonPress={() => buttonClick(1, 1001)}
      />
      <BeverageButton
        ButtonText="Featured Delights"
        myIndex={2}
        selectedIndex={selectedBeverageIndex}
        onButtonPress={() => buttonClick(2, 1002)}
      />
    </View>
  );
}

function BeverageButton({ ButtonText, myIndex, selectedIndex, onButtonPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.BeverageButton,
        selectedIndex == myIndex
          ? styles.SelectedButton
          : styles.unSelectedButton,
      ]}
      onPress={onButtonPress}
    >
      <Text
        style={
          selectedIndex == myIndex ? styles.SelectedText : styles.unSelectedText
        }
      >
        {ButtonText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  displayRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  BeverageButton: {
    width: 100,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  SelectedButton: {
    backgroundColor: "#002FFF",
  },
  unSelectedButton: {
    backgroundColor: "#F5F7FF",
    borderColor: "#00000040",
    borderWidth: 1,
  },
  unSelectedText: {
    fontSize: 12,
    color: "#251F94",
    fontFamily: "MontserratBold",
  },
  SelectedText: {
    fontSize: 12,
    color: "white",
    fontFamily: "MontserratBold",
  },
});

export default BeverageSelection;
