import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { useMutation } from "@tanstack/react-query";

import API_URL from "../Constants";

const pixelDensity = PixelRatio.get();

function TrackOrderMenuItem({ orderRow, userId, refreshTracking }) {
  const [showMore, setShowMore] = useState(false);

  const getItems = orderRow?.orderDetails.map((it, index) => {
    return (
      <View style={{ width: "20%", marginBottom: 10 }}>
        {index < 2 && (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{
                width: 70 / pixelDensity,
                height: 45 / pixelDensity,
                backgroundColor: "#F6F7F9",
                borderRadius: 5,
                padding: 20,
              }}
              source={{
                uri: `${API_URL}/Images/${it.item.itemId}.png`,
              }}
            />
            <Text style={styles.ItemName}>{it.item.itemName}</Text>
            <Text style={styles.ItemQuantity}>{it.quantity}x</Text>
          </View>
        )}
        {index >= 2 && showMore && (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{
                width: 70 / pixelDensity,
                height: 45 / pixelDensity,
                backgroundColor: "#F6F7F9",
                borderRadius: 5,
                padding: 20,
              }}
              source={{
                uri: `${API_URL}/Images/${it.item.itemId}.png`,
              }}
            />
            <Text style={styles.ItemName}>{it.item.itemName}</Text>
            <Text style={styles.ItemQuantity}>{it.quantity}x</Text>
          </View>
        )}
      </View>
    );
  });
  const updateOrder = useMutation({
    mutationFn: (status) => {
      console.log(
        `/Order/UpdateOrderStatus/${orderRow?.orderId}/${status}/${userId}`
      );
      return axios.put(
        API_URL +
          `/Order/UpdateOrderStatus/${orderRow?.orderId}/${status}/${userId}`
      );
    },
    onSuccess: () => {
      refreshTracking();
    },
    onError: (error) => console.error(error?.message),
  });

  const handleUpdateOrder = () => {
    updateOrder.mutate("canceled");
  };
  const getBackGroundColor = () => {
    if (orderRow?.categoryId == 20003) return "#FAF8C6";
    if (orderRow?.categoryId == 20002) return "#EEEBFD";
    if (orderRow?.categoryId == 20001) return "#F0FFF4";
  };

  const showOthers = () => {
    console.log("up");
    setShowMore(true);
  };
  return (
    <View>
      <View style={[styles.horizontalView, styles.mainView]}>
        <View style={styles.horizontalView}>
          <View>
            <Text style={styles.tableText}>{orderRow?.orderId}</Text>
          </View>
          <View>
            <Text style={styles.tableText}>
              {moment(orderRow?.dateCreated).format("DD/MM/yyyy")}
            </Text>
          </View>
          <View>
            <Text style={styles.tableText}>
              {moment(orderRow?.dateCreated).format("HH:mm")}
            </Text>
          </View>
          <View>
            {getItems}
            {orderRow?.orderDetails.length > 2 && !showMore && (
              <TouchableOpacity onPressIn={() => setShowMore(true)}>
                <Text style={styles.viewMore}>
                  + {orderRow?.orderDetails.length - 2} View More
                </Text>
              </TouchableOpacity>
            )}
            {showMore && (
              <TouchableOpacity onPressIn={() => setShowMore(false)}>
                <Text style={styles.viewMore}>View less</Text>
              </TouchableOpacity>
            )}
          </View>

          <View>
            <Text
              style={[
                styles.categoryText,
                { backgroundColor: getBackGroundColor() },
              ]}
            >
              {orderRow?.categoryName}
            </Text>
          </View>
          <View style={styles.lastColumn}>
            <Text
              style={
                orderRow?.orderStatus == "pending"
                  ? styles.onTheWay
                  : styles.beingPrepared
              }
            >
              {orderRow?.orderStatus == "pending"
                ? "Pending"
                : "Being Prepared"}
            </Text>
            <TouchableOpacity onPress={() => handleUpdateOrder()}>
              <Text style={styles.RemoveButton}>Cancel Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemBox: {
    width: 180 / pixelDensity,
    height: 106 / pixelDensity,
    backgroundColor: "#F6F7F9",
    borderRadius: 12 / pixelDensity,
    alignItems: "center",
    justifyContent: "center",
  },
  viewMore: {
    fontSize: 14 / pixelDensity,
    fontFamily: "MontserratBold",
  },
  itemText: {
    textAlign: "left",
    paddingLeft: 10,
  },
  tableText: {
    fontSize: 14 / pixelDensity,
  },
  categoryText: {
    color: "black",
    fontSize: 12 / pixelDensity,
    borderRadius: 10,
    width: 130 / pixelDensity,
    height: 27 / pixelDensity,
    textAlign: "center",
    alignSelf: "center",
    paddingTop: 3,
  },
  onTheWay: {
    backgroundColor: "#EEAB5C",
    color: "white",
    fontSize: 12 / pixelDensity,
    borderRadius: 10,
    width: 101 / pixelDensity,
    height: 27 / pixelDensity,
    textAlign: "center",
    alignSelf: "center",
    paddingTop: 3,
  },
  beingPrepared: {
    backgroundColor: "#4DE5AF",
    color: "white",
    fontSize: 12 / pixelDensity,
    borderRadius: 10,
    width: 101 / pixelDensity,
    height: 27 / pixelDensity,
    textAlign: "center",
    alignSelf: "center",
    paddingTop: 3,
  },
  lastColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  categoryContainer: {
    borderRadius: 10,
    fontFamily: "MontserratRegular",
    fontSize: 14 / pixelDensity,
    width: 158 / pixelDensity,
    height: 26 / pixelDensity,
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 100,
  },
  miniImage: { width: 50, height: 50 },

  horizontalView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  verticalView: {
    display: "flex",
    flexDirection: "column",
  },
  mainView: {
    width: "100%",
    justifyContent: "space-between",
  },
  RemoveButton: {
    color: "#6D13FF",
    fontSize: 16 / pixelDensity,
    fontFamily: "MontserratMedium",
  },
  ItemName: {
    fontSize: 18 / pixelDensity,
    fontFamily: "MontserratBold",
    width: 300 / pixelDensity,
    paddingLeft: 5,
  },
  ItemQuantity: {
    fontSize: 18 / pixelDensity,
    fontFamily: "MontserratMedium",
    width: 100 / pixelDensity,
  },
  subDescription: {
    color: "#686565",
    fontFamily: "MontserratMedium",

    fontSize: 16 / pixelDensity,
    paddingTop: 10,
    textAlign: "right",
  },
  SRDescription: {
    color: "#8B8B8B",
    fontWeight: 300,
    paddingTop: 5,
    fontSize: 16 / pixelDensity,
  },
});
export default TrackOrderMenuItem;
