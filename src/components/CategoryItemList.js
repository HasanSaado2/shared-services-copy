import { useState, useEffect } from "react";
import API_URL from "../Constants";
import axios from "axios";
import SquareMenuButton from "./SquareMenuButton";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
} from "react-native";
import RectangularMenuButton from "./RectangularMenuButton";
function CategoryItemList({
  selectedCategoryId,
  setSelectedSubCategory,
  setViewState,
}) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/Category/GetCategoriesByParentId/${selectedCategoryId}`)
      .then(function (response) {
        // console.log(response);
        setCategoryList(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {});
  }, [selectedCategoryId]);

  const categoryItemClick = (cat) => {
    setSelectedSubCategory(cat);
    setViewState(1);
  };

  const categoryDisplay =
    categoryList &&
    categoryList.map((cat, index) => {
      return (
        <>
          {!cat.status && (
            <SquareMenuButton
              ItemId={cat.categoryId}
              buttonText={cat.categoryName}
              handlePress={() => categoryItemClick(cat)}
              key={index}
            />
          )}
          {cat.status && (
            <RectangularMenuButton
              ItemId={cat.categoryId}
              buttonText={cat.categoryName}
              key={index}
              handlePress={() => categoryItemClick(cat)}
            />
          )}
        </>
      );
    });
  return <View style={styles.displayRow}>{categoryDisplay}</View>;
}
const styles = StyleSheet.create({
  displayRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: 20,
  },
});
export default CategoryItemList;
