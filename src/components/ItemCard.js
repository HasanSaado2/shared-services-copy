import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import API_URL from "../Constants";
import QuantityCounter from "./QuantityCounter";

function ItemCard({ Item, itemsInOrder, setItemsInOrder }) {
  const [isClicked, SetIsClicked] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    let orgOrder = itemsInOrder;
    console.log("dfsd");
    // console.log(itemsInOrder);
    orgOrder =
      itemsInOrder && itemsInOrder.filter((c) => c.ItemId == Item.itemId);
    if (itemQuantity > 0) {
      let newItem = {
        ItemId: Item.itemId,
        ItemName: Item.itemName,
        Quantity: itemQuantity,
      };
      orgOrder.push(newItem);
    }
    setItemsInOrder(orgOrder);
  }, [itemQuantity]);
  return (
    <TouchableOpacity
      style={styles.itemCarWrap}
      onPress={() => SetIsClicked(true)}
    >
      <Image
        source={{
          uri: `${API_URL}/Images/Item_${Item.itemId}.png`,
        }}
        style={styles.image}
      ></Image>
      <Text style={styles.itemText}>{Item.itemName}</Text>
      {isClicked && (
        <QuantityCounter
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          width={34}
          height={20}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 13,
    fontFamily: "MontserratRegular",
    height: 40,
  },

  itemCarWrap: {
    width: 120,
    height: 155,
    borderRadius: 10,
    borderColor: "#00000040",
    borderWidth: 1,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 102,
    height: 75,
  },
});

export default ItemCard;
