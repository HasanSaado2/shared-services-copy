import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import MenuButton from "./MenuButton";

function MenuButtonGroup({
  MenuDetails,
  setCategoryId,
  pendingOrders,
  inProgressOrders,
  selectedIndex,
  setSelectedIndex,
}) {
  const menuGroup = MenuDetails.map((menu, index) => {
    return (
      <MenuButton
        key={index}
        ButtonText={menu.ButtonText}
        imageLocation={menu.ImageUrl}
        selected={selectedIndex == menu.ButtonIndex ? 1 : 0}
        ButtonIndex={menu.ButtonIndex}
        setActiveIndex={setSelectedIndex}
        setCategoryId={setCategoryId}
        CategoryId={menu.CategoryId}
        pendingOrders={pendingOrders}
        inProgressOrders={inProgressOrders}
        backgroundColor={menu.backgroundColor}
      />
    );
  });

  return <View style={styles.horizontalAlign}>{menuGroup}</View>;
}
const styles = StyleSheet.create({
  horizontalAlign: {
    // margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MenuButtonGroup;
