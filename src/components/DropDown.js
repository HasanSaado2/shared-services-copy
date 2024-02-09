import React, { useState } from "react";
import { StyleSheet, Text, View, PixelRatio } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const pixelDensity = PixelRatio.get();

function DropDown({ placeholder, items, setItems }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      badgeColors="#fff"
      placeholder={placeholder}
      style={styles.filter}
      dropDownContainerStyle={{
        width: 442 / pixelDensity,
        zIndex: 10000,
      }}
    />
  );
}
const styles = StyleSheet.create({
  filter: {
    width: 442 / pixelDensity,
  },
});

export default DropDown;
