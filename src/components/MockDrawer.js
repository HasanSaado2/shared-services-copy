import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
} from "react-native";
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import API_URL from "../Constants";
import orderButton from "@assets/shopping_cart.png";
import closePopUp from "@assets/backbutton.png";
import OrderMenuItem from "./OrderMenuItem";
import MainButton from "./MainButton";
import PopUpAlert from "./PopUpAlert";
import moment from "moment";
import TrackOrder from "./TrackOrder";
import MiniTitle from "./MiniTitle";

const pixelDensity = PixelRatio.get();

function MockDrawer({
  itemsInOrder,
  setActiveOrder,
  selectedCategoryId,
  triggerspecialRequest,
  setTriggerSpecialRequest,
  modalVisible,
  setModalVisible,
  setIsOrdering,
  trackingModalVisible,
  setTrackingModalVisible,
  trackOrderDetails,
  setSelectedCategoryId,
  refreshTracking,
  resetScreen,
}) {
  const [userId, setUserId] = useState("");

  let moment = require("moment");
  const { width, height } = Dimensions.get("window");
  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    await AsyncStorage.getItem("userId").then((val) => {
      setUserId(val);
    });
  };
  useEffect(() => {
    if (triggerspecialRequest == 1) {
      placeOrder.mutate({
        userId: userId,
        roomId: 0,
        categoryId: 20010,
        orderDetails: [{ ItemId: 10094, Quantity: 1, s_requests: [] }],
      });
    }

    setTriggerSpecialRequest(0);
  }, [triggerspecialRequest]);

  const placeOrder = useMutation({
    mutationFn: (fields) => {
      return axios.post(API_URL + `/Order/NewOrder`, fields);
    },
    onSuccess: async () => {
      resetScreen();
      setTimeout(function () {
        setIsOrdering(2);
      }, 2000);

      setModalVisible(false);
    },
    onError: async (error) => {
      console.log("error: ", error);
      setIsOrdering(0);
    },
  });

  const handlePlaceOrder = () => {
    setIsOrdering(1);
    placeOrder.mutate({
      userId: userId,
      roomId: 0,
      categoryId: selectedCategoryId,
      orderDetails: itemsInOrder,
    });
  };

  const removeItemFromOrder = (itemToRemove) => {
    var originalOrder = itemsInOrder.filter((c) => c.ItemId != itemToRemove);
    setActiveOrder(originalOrder);
  };

  const orderList =
    itemsInOrder &&
    itemsInOrder.map((item, i) => {
      return (
        <View style={styles.orderMenuWrap} key={i}>
          <OrderMenuItem
            ItemName={item.ItemName}
            ItemId={item.ItemId}
            ItemSubDescription=""
            Quantity={item.Quantity}
            removeItemFromOrder={removeItemFromOrder}
            SR_List={item.s_requests}
            CategoryName={item.CategoryName}
            CategoryColor={item.CategoryColor}
          />
        </View>
      );
    });

  return (
    <>
      <View
        style={[
          styles.footerView,
          { width: width },
          { top: height - 126 / pixelDensity },
        ]}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <MiniTitle />
              <View style={styles.orderWrap}>
                <View style={styles.rightView}>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      style={styles.backArrow}
                      source={closePopUp}
                      onPress={() => setModalVisible(!modalVisible)}
                    />
                  </Pressable>
                </View>
                <View style={styles.orderRow}>
                  <Text style={styles.modalText}>Order Summary</Text>
                </View>

                <View>{orderList}</View>
              </View>
            </View>
            <View
              style={[
                styles.footerView,
                { width: width },
                { height: 126 / pixelDensity },
                { top: height - 126 / pixelDensity },
                { alignItems: "center", paddingTop: 5 },
              ]}
            >
              <MainButton
                text="Place Order"
                height={72 / pixelDensity}
                width={355 / pixelDensity}
                onPress={handlePlaceOrder}
              />
            </View>
          </View>
        </Modal>
        <TrackOrder
          setTrackingModalVisible={setTrackingModalVisible}
          trackingModalVisible={trackingModalVisible}
          trackOrderDetails={trackOrderDetails}
          userId={userId}
          refreshTracking={refreshTracking}
        />

        <View style={{ position: "relative" }}>
          <View style={{ marginTop: 10, marginLeft: 60 / pixelDensity }}>
            <MainButton
              text="Go to Cart"
              width={355 / pixelDensity}
              height={63 / pixelDensity}
              fontSize={16 / pixelDensity}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  shoppingCart: {
    width: 45 / pixelDensity,
    height: 46 / pixelDensity,
  },

  labelText: {
    fontSize: 16 / pixelDensity,
    fontFamily: "MontserratSemiBold",
  },
  displayText: {
    fontSize: 16 / pixelDensity,
    fontFamily: "MontserratSemiBold",
    color: "#686565",
    marginLeft: 5,
  },
  orderRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  purpleCount: {
    width: 46 / pixelDensity,
    height: 46 / pixelDensity,
    backgroundColor: "#6D13FF",
    borderRadius: 50,
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",

    right: -10,
    top: 0,
  },
  countText: {
    color: "white",
    textAlign: "center",
    fontSize: 16 / pixelDensity,
    fontWeight: 700,
  },
  trackBtn: {
    position: "absolute",
    right: 340,
    top: 150,
  },
  closedTrackBtn: {
    position: "absolute",
    right: 0,
    top: 100,
  },
  orderBtn: {
    position: "absolute",
    right: 340,
    top: 50,
  },
  footerView: {
    position: "absolute",

    left: 0,
    alignSelf: "stretch",
    backgroundColor: "#D8DCEE",
    height: 126 / pixelDensity,

    zIndex: 1,
  },
  buttonView: {
    position: "absolute",
    top: 100,
    right: 100,
    zIndex: 1000,
  },
  centeredView: {
    marginTop: 0,
    width: "100%",
    backgroundColor: "#F8F8F8",
    alignSelf: "flex-end",
  },
  rightView: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  orderMenuWrap: {
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: "#F1F0F0",
    margin: 5,
  },
  orderWrap: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 30 / pixelDensity,
    marginTop: 50,
  },
  backArrow: {
    width: 42 / pixelDensity,
    height: 42 / pixelDensity,
  },
  modalView: {
    margin: 0,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    padding: 35,

    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
    height: "100%",
    minHeight: "100%",
  },
  button: {
    padding: 10,
    zIndex: 10000,
    position: "absolute",
    top: 10,
    right: 40,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontFamily: "MontserratBold",
    fontSize: 20 / pixelDensity,
  },
  horizontalView: {
    display: "flex",
    flexDirection: "row",
  },
});

export default MockDrawer;
