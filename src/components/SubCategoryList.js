import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";

import API_URL from "../Constants";
import axios from "axios";
import SquareMenuButton from "./SquareMenuButton";
import SubCategorySelect from "./SubCategorySelect";

function SubCategoryList({
  parentId,
  setParentId,
  itemsInOrder,
  setItemsInOrder,
  orderViewState,
  setOrderViewState,
}) {
  const [itemList, setItemList] = useState([]);

  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedCategoryName, setSelectedCategoryName] = useState();

  const [showSelection, setShowSelection] = useState(false);
  useEffect(() => {
    console.log("SubCategoryList");
    console.log(parentId);
    axios
      .get(`${API_URL}/Category/GetCategoriesByParentId/${parentId}`)
      .then(function (response) {
        setItemList([]);
        setItemList(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {});
  }, [parentId]);

  const CategoryPress = (categoryId, CategoryName) => {
    setSelectedCategoryId(categoryId);
    setSelectedCategoryName(CategoryName);
    setOrderViewState(1);
    setShowSelection(true);
  };

  const categoryView = itemList.map((cat) => {
    return (
      <SquareMenuButton
        buttonText={cat.categoryName}
        handlePress={() => CategoryPress(cat.categoryId, cat.categoryName)}
        ItemId={cat.categoryId}
        showStar={false}
      />
    );
  });

  return (
    <>
      {!showSelection && <View style={styles.displayRow}>{categoryView}</View>}
      {showSelection && (
        <SubCategorySelect
          CatId={selectedCategoryId}
          CatName={selectedCategoryName}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  displayRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default SubCategoryList;
