import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Image,
  Text,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import general from "@assets/click-icon.png";
import procurement from "@assets/procurement.png";
import financial from "@assets/financial.png";
import technical from "@assets/technial.png";

import generalWhite from "@assets/click-iconWhite.png";
import procurementWhite from "@assets/procurementWhite.png";
import financialWhite from "@assets/financialWhite.png";
import technicalWhite from "@assets/technialWhite.png";

import CategoryMenuButton from "./CategoryMenuButton";
import RectangularMenuButton from "./RectangularMenuButton";

const categoryList = [
  {
    Index: 0,
    Text: "General Services",
    Icon: general,
    SelectedIcon: generalWhite,
    CategoryId: 1,
  },
  {
    Index: 1,
    Text: "Procurement Services",
    Icon: procurement,
    SelectedIcon: procurementWhite,
    CategoryId: 3,
  },
  {
    Index: 2,
    Text: "Financial Services",
    Icon: financial,
    SelectedIcon: financialWhite,
    CategoryId: 4,
  },
  {
    Index: 3,
    Text: "Technical Services",
    Icon: technical,
    SelectedIcon: technicalWhite,
    CategoryId: 5,
  },
];

function CategoryChoice({ selectedCategoryId, setSelectedCategoryId }) {
  const menuClick = (index, CategoryId) => {
    setSelectedIndex(index);
    setSelectedCategoryId(CategoryId);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuButtons = categoryList.map((cat) => {
    return (
      <CategoryMenuButton
        icon={cat.Icon}
        selectedIcon={cat.SelectedIcon}
        buttonText={cat.Text}
        index={cat.Index}
        handlePress={() => menuClick(cat.Index, cat.CategoryId)}
        selectedIndex={selectedIndex}
      />
    );
  });

  return (
    <View style={styles.MainWrap}>
      <View>
        <Text style={styles.text}>What can we do to help you today?</Text>
      </View>
      <View style={styles.displayRow}>{menuButtons}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  displayRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  spaceBetweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    backgroundColor: "#F8F8F8",
  },
  text: {
    color: "#000",
    fontFamily: "MontserratMedium",
    fontSize: 16,
  },
  MainWrap: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
});
export default CategoryChoice;
