import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import API_URL from "../Constants";
import axios from "axios";
import { wrap } from "lodash";
import BeverageSelection from "./BeverageSelection";

function ItemList({ parentId, setParentId, itemsInOrder, setItemsInOrder }) {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/Item/GetItemsByCategoryId/${parentId}`)
      .then(function (response) {
        // console.log(response);
        setItemList([]);
        setItemList(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {});
  }, [parentId]);

  const itemListDisplay =
    itemList &&
    itemList.map -
      ((item) => {
        return (
          <ItemCard
            Item={item}
            itemsInOrder={itemsInOrder}
            setItemsInOrder={setItemsInOrder}
          />
        );
      });

  return (
    <View style={styles.displayRow}>
      {(parentId == 7 ||
        parentId == 1000 ||
        parentId == 1001 ||
        parentId == 1002) && <BeverageSelection setParentId={setParentId} />}
      {itemListDisplay}
    </View>
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
export default ItemList;
