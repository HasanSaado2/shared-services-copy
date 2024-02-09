import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import TabMenuButton from "./TabMenuButton";

const { width } = Dimensions.get("window");

function TabMenuButtonGroup({ MenuDetails, setSelectedId }) {
  // useEffect(() => {
  //   setSelectedIndex(0);
  // }, [MenuDetails]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const MenuGroup = MenuDetails.map((menu, i) => {
    return (
      <TabMenuButton
        key={i}
        ButtonText={menu.ButtonText}
        selected={selectedIndex}
        ButtonIndex={menu.ButtonIndex}
        setActiveIndex={setSelectedIndex}
        selectedId={menu.SubCategoryId}
        setSelectedId={setSelectedId}
        width={(width - 100) / MenuDetails.length}
      />
    );
  });
  return <View style={styles.horizontalAlign}>{MenuGroup}</View>;
}
const styles = StyleSheet.create({
  horizontalAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default TabMenuButtonGroup;
