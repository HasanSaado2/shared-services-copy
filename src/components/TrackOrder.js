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
  ScrollView,
} from "react-native";
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import API_URL from "../Constants";
import closePopUp from "@assets/backbutton.png";
import MiniTitle from "./MiniTitle";
import TrackOrderMenuItem from "./TrackOrderMenuItem";

const pixelDensity = PixelRatio.get();

function TrackOrder({
  trackingModalVisible,
  setTrackingModalVisible,
  trackOrderDetails,
  userId,
  refreshTracking,
}) {
  const tackingOrderList =
    trackOrderDetails &&
    trackOrderDetails.map((item, i) => {
      return (
        <View style={styles.orderMenuWrap} key={i}>
          <TrackOrderMenuItem
            orderRow={item}
            userId={userId}
            refreshTracking={refreshTracking}
          />
        </View>
      );
    });

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={trackingModalVisible}
        onRequestClose={() => {
          setTrackingModalVisible(!trackingModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MiniTitle />
            <View style={styles.orderWrap}>
              <View style={styles.headerWrap}>
                <View style={styles.rightView}>
                  <Pressable
                    onPress={() =>
                      setTrackingModalVisible(!trackingModalVisible)
                    }
                  >
                    <Image style={styles.backArrow} source={closePopUp} />
                  </Pressable>
                </View>
                <View style={styles.orderRow}>
                  <Text style={styles.modalText}>Order Tracking</Text>
                </View>
              </View>
              {/* <View style={styles.horizontalView}>
                <Text style={styles.labelText}>Order #</Text>
                <Text style={styles.displayText}>1111</Text>
              </View> */}

              <ScrollView>{tackingOrderList}</ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12 / pixelDensity,
    margin: 5,
  },
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
    backgroundColor: "white",
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: "#F1F0F0",
    margin: 5,
    padding: 10,
    borderRadius: 12 / pixelDensity,
  },
  orderWrap: {
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
export default TrackOrder;
