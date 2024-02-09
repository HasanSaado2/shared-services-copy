import React from "react";
import { StyleSheet, Text, View, PixelRatio, Platform } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const pixelDensity = PixelRatio.get();

function FilterItem({ placeholder, data, onSelect }) {
  return (
    <View>
      <SelectDropdown
        data={data}
        onSelect={onSelect}
        defaultButtonText={placeholder}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem?.title;
        }}
        rowTextForSelection={(item, index) => {
          return item?.title;
        }}
        renderCustomizedRowChild={(item, index) => {
          return (
            <View key={index} style={styles.customRow}>
              <Text style={styles.filterDropdownText}>{item?.title}</Text>
            </View>
          );
        }}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#444"}
              size={20 / pixelDensity}
            />
          );
        }}
        buttonStyle={styles.filter}
        buttonTextStyle={styles.filterText}
        dropdownStyle={styles.filterDropdown}
        rowTextStyle={styles.filterDropdownText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  filter: {
    backgroundColor: "#F8F8F8",
    width: Platform.OS === "ios" ? 380 / pixelDensity : 240 / pixelDensity,
    height: Platform.OS === "ios" ? 58.5 / pixelDensity : 37 / pixelDensity,
    borderRadius: 7 / pixelDensity,
    borderWidth: 1,
    borderColor: "#C4C4C4",
  },

  filterText: {
    fontFamily: "MontserratMedium",
    fontSize: Platform.OS === "ios" ? 20 / pixelDensity : 17 / pixelDensity,
    textAlign: "left",
  },

  filterDropdown: {
    borderRadius: 7 / pixelDensity,
  },

  filterDropdownText: {
    fontFamily: "MontserratMedium",
    fontSize: Platform.OS === "ios" ? 20 / pixelDensity : 17 / pixelDensity,
  },

  customRow: {
    padding: 10,
  },
});

export default FilterItem;
