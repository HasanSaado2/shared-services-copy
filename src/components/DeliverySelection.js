import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Dimensions,
  Image,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
const { height, width } = Dimensions.get("window");
import divider from "../../assets/divider.png";
import GoBackButton from "./GoBackButton";
import MainButton from "./MainButton";
import API_URL from "../Constants";
import RadioButton from "./RadioButton";
import FilterItem from "./FilterItem";
import axios from "axios";
import QuantityCounter from "./QuantityCounter";
const data = [{ title: "MeetingRoom 1" }];

function DeliverySelection({
  itemsInOrder,
  orderViewState,
  setOrderViewState,
  navigation,
  route,
  categoryId,
  setItemsInOrder,
}) {
  const [delivery, setDelivery] = useState(0);
  const { userId } = route.params;
  useEffect(() => {
    console.log("DeliverySelection");
    console.log(itemsInOrder);
  }, [itemsInOrder]);

  const ItemInOrderView = itemsInOrder.map((item, index) => {
    return (
      <DeliveryItem
        key={index}
        ItemId={item.ItemId}
        ItemName={item.ItemName}
        item={item}
        setItemsInOrder={setItemsInOrder}
        itemsInOrder={itemsInOrder}
      />
    );
  });

  const orderItem = () => {
    let details = [];
    itemsInOrder.map((it) => {
      let od = {
        itemId: it.ItemId,
        quantity: it.Quantity,
        s_requests: it.SR,
      };
      details.push(od);
    });

    let newOrder = {
      userId: userId,
      roomId: 0,
      categoryId: categoryId,
      orderDetails: details,
    };
    console.log(newOrder);
    axios
      .post(API_URL + `/Order/NewOrder`, newOrder)
      .then(function (response) {
        // console.log();
        setOrderViewState(0);
        setItemsInOrder([]);
        navigation.navigate("AfterOrder", {
          stage: 0,
          OrderNumber: response.data.id,
          userId: userId,
          categoryId: categoryId,
        });
      })
      .catch(function (error) {
        // handle error
      });
  };
  return (
    <View style={{ position: "relative", height: height - 200 }}>
      <View>
        <GoBackButton
          SubCategoryText="Cart"
          onPress={() => setOrderViewState(0)}
        />
      </View>
      <View>{ItemInOrderView}</View>
      <Image source={divider}></Image>
      <View>
        <Text style={styles.DeliveryTitle}>Delivery Location</Text>
      </View>
      <View style={styles.displayRow}>
        <RadioButton
          RadioText="My Office"
          value={delivery}
          setValue={setDelivery}
          myValue={0}
        />
        <RadioButton
          RadioText="Meeting Room"
          value={delivery}
          setValue={setDelivery}
          myValue={1}
        />
      </View>
      {delivery == 1 && (
        <View>
          <FilterItem data={data} placeholder="Select Meeting Room" />
        </View>
      )}
      <View style={styles.FooterContinue}>
        <MainButton
          text="Submit"
          height={31}
          fontSize={14}
          onPress={orderItem}
          color="#070085"
        />
      </View>
    </View>
  );
}

function DeliveryItem({
  ItemId,
  ItemName,
  item,
  setItemsInOrder,
  itemsInOrder,
}) {
  const [itemQuantity, setItemQuantity] = useState(item.Quantity);

  useEffect(() => {
    console.log("Item Quantity changing");
    console.log(itemsInOrder);
    var orderItem = itemsInOrder.filter((c) => c.ItemId == item.itemId);
    let orgOrder = itemsInOrder.filter((c) => c.ItemId != item.itemId);
    let newItem = {
      ItemId: item.itemId,
      ItemName: item.itemName,
      Quantity: itemQuantity,
      SR: orderItem.SR,
    };
    orgOrder.push(newItem);
  }, [itemQuantity]);

  const srList = item.SR.map((s) => {
    return (
      <Text>
        {s.SR_Text} x{s.Quantity}{" "}
      </Text>
    );
  });
  return (
    <View style={styles.spaceBetweenRow}>
      <View style={styles.displayRow}>
        <Image
          source={{
            uri: `${API_URL}/Images/Item_${ItemId}.png`,
          }}
          style={styles.OrderImage}
        ></Image>
        <View>
          <Text style={styles.OrderItemText}>{ItemName}</Text>
          <View style={styles.specialRequestText}>{srList}</View>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <QuantityCounter
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          height={20}
          width={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  specialRequestText: {
    fontSize: 10,
    fontFamily: "MontserratLight",
    marginLeft: 20,
  },
  columnView: { display: "flex", flexDirection: "column" },
  DeliveryTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginTop: 20,
  },
  OrderItemText: {
    fontSize: 14,
    fontFamily: "MontserratSemiBold",
    marginLeft: 20,
  },
  OrderImage: {
    width: 55,
    height: 55,
  },
  spaceBetweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  closeModal: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  FooterContinue: {
    padding: 20,
    borderColor: "#F5F7FF",
    backgroundColor: "#F5F7FF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "absolute",
    width: "100%",

    top: height - 250,
  },
  alignRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: 185,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  modalView: {
    position: "absolute",
    top: 80,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  mainView: {
    margin: 20,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "MontserratRegular",
  },
});
export default DeliverySelection;
