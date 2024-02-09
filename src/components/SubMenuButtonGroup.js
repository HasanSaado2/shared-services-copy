import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import SubMenuButton from "./SubMenuButton";

function SubMenuButtonGroup({
  MenuDetails,
  setCategoryId,
  pendingOrders,
  inProgressOrders,
  completedOrders,
  allOrders,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuGroup = MenuDetails.map((menu, index) => {
    return (
      <SubMenuButton
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
        completedOrders={completedOrders}
        allOrders={allOrders}
      />
    );
  });

  return <View style={styles.horizontalAlign}>{menuGroup}</View>;
}
const styles = StyleSheet.create({
  horizontalAlign: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default SubMenuButtonGroup;
