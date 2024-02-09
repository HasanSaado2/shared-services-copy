import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  PixelRatio,
  Platform,
} from "react-native";
import { useFetchUserById } from "@hooks/users";
import { useMutation } from "@tanstack/react-query";
import OrderSummaryExpanded from "./OrderSummaryExpanded";
import { useState } from "react";
import moment from "moment/moment";
import API_URL from "../Constants";
import { isEmpty } from "lodash";
import CustomOutlinedButton from "./CustomOutlinedButton";
import MainButton from "./MainButton";
import axios from "axios";

const pixelDensity = PixelRatio.get();

function OrderSummaryItem({
  order,
  refetchOrders,
  user,
  selected,
  refetchPendingOrders,
  refetchInProgressOrders,
  refetchCompletedOrders,
  refetchAllOrders,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleViewOrderPress = () => {
    setModalVisible(!modalVisible);
  };
  // const { data: orderUser } = useFetchUserById(order?.userId);

  const updateOrder = useMutation({
    mutationFn: (status) => {
      return axios.put(
        API_URL +
          `/Order/UpdateOrderStatus/${order?.orderId}/${status}/${user?.userId}`
      );
    },
    onSuccess: () => {
      setModalVisible(false),
        refetchOrders(),
        refetchPendingOrders(),
        refetchInProgressOrders();
      refetchCompletedOrders();
      refetchAllOrders();
    },
    onError: (error) => console.error(error?.message),
  });

  const handleUpdateOrder = (status) => {
    updateOrder.mutate(status);
  };

  return (
    <View style={styles.row}>
      {/* <OrderSummaryExpanded
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        order={order}
        user={orderUser?.data?.username}
        selected={selected}
        handleUpdateOrder={handleUpdateOrder}
      /> */}
      <View style={styles.table}>
        <Text
          style={[
            styles.tableHeaderText,
            { width: Platform.OS === "ios" ? 60 : 80 },
          ]}
        >
          {order?.orderId}
        </Text>
        <Text
          style={[
            styles.tableHeaderText,
            { width: Platform.OS === "ios" ? 65 : 75 },
          ]}
        >
          {moment(order?.dateCreated).format("l")}
        </Text>
        <Text
          style={[
            styles.tableHeaderText,
            { width: Platform.OS === "ios" ? 85 : 90 },
          ]}
        >
          {moment(order?.dateCreated).format("LT")}
        </Text>
        <View
          style={[
            styles.roomName,
            {
              width: 80,
              marginRight: Platform.OS === "ios" ? 20 : 35,
            },
          ]}
        >
          <Text style={[styles.tableHeaderText, { textAlign: "center" }]}>
            {order?.roomId ? order?.roomId : "N/A"}
          </Text>
        </View>
        <View
          style={[
            {
              marginRight: 0 / pixelDensity,
              width: Platform.OS === "ios" ? 210 : 240,
              marginTop: Platform.OS === "ios" ? -20 : -10,
            },
          ]}
        >
          {order?.orderDetails?.map((item, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 70,
                borderBottomColor: "#DFD8D8",
                borderBottomWidth:
                  index + 1 !== order?.orderDetails?.length ? 1 : 0,
              }}
              key={index}
            >
              <View>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 20,
                  }}
                  source={{
                    uri: `${API_URL}/images/${item.item.itemId}.png`,
                  }}
                />
              </View>
              <Text style={styles.itemText}>{item?.item?.itemName}</Text>
            </View>
          ))}
        </View>
        <View
          style={[
            {
              width: Platform.OS === "ios" ? 110 : 120,
              marginTop: Platform.OS === "ios" ? -20 : -10,
            },
          ]}
        >
          {order?.orderDetails?.map((item, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 20,
                height: 70,
                borderBottomColor: "#DFD8D8",
                borderBottomWidth:
                  index + 1 !== order?.orderDetails?.length ? 1 : 0,
              }}
              key={index}
            >
              <Text
                style={[
                  styles.itemText,
                  { maxWidth: 100, fontFamily: "MontserratMedium" },
                ]}
                key={index}
              >
                {!isEmpty(item?.s_requests) &&
                  item?.s_requests?.map((request, index) => (
                    <Text key={index}>
                      x{request?.quantity} {request?.s_RequestName}
                      {!(index + 1 === item?.s_requests?.length) ? ", " : <></>}
                    </Text>
                  ))}
                {isEmpty(item?.s_requests) && "N/A"}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={[
            {
              width: Platform.OS === "ios" ? 65 : 75,
              marginTop: Platform.OS === "ios" ? -20 : -10,
            },
          ]}
        >
          {order?.orderDetails?.map((item, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 20,
                height: 70,
                borderBottomColor: "#DFD8D8",
                borderBottomWidth:
                  index + 1 !== order?.orderDetails?.length ? 1 : 0,
              }}
              key={index}
            >
              <Text style={styles.itemText}>x {item?.quantity}</Text>
            </View>
          ))}
        </View>
        <Text style={[styles.tableHeaderText, { marginRight: 30 }]}>
          {order?.orderDetails[0]?.item?.categoryName}
        </Text>
        <View>
          {"pending" === order?.orderStatus ? (
            <MainButton
              text="Accept"
              height={55 / pixelDensity}
              onPress={() => handleUpdateOrder("in-progress")}
              fontSize={18 / pixelDensity}
              width={200 / pixelDensity}
            />
          ) : "in-progress" === order?.orderStatus ? (
            <View style={{ flexDirection: "row" }}>
              <MainButton
                text="Complete"
                height={55 / pixelDensity}
                onPress={() => handleUpdateOrder("completed")}
                color="#0FAB0B"
                fontSize={18 / pixelDensity}
                width={200 / pixelDensity}
              />
            </View>
          ) : "completed" === order?.orderStatus ? (
            <CustomOutlinedButton
              text="Completed"
              height={55 / pixelDensity}
              onPress={() => {}}
              borderColor="#0FAB0B"
              fontSize={18 / pixelDensity}
              width={200 / pixelDensity}
            />
          ) : "canceled" === order?.orderStatus ? (
            <CustomOutlinedButton
              text="Cancelled"
              height={55 / pixelDensity}
              onPress={() => {}}
              borderColor="#C90000"
              fontSize={18 / pixelDensity}
              width={200 / pixelDensity}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  table: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },

  tableHeaderText: {
    fontFamily: "MontserratSemiBold",
    color: "#000",
    fontSize: Platform.OS === "ios" ? 18 / pixelDensity : 14 / pixelDensity,
    maxWidth: 100,
  },

  itemText: {
    fontFamily: "MontserratBold",
    color: "#000",
    fontSize: Platform.OS === "ios" ? 18 / pixelDensity : 14 / pixelDensity,
    maxWidth: 100,
  },

  row: {
    paddingTop: 57 / pixelDensity,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 6,
  },

  roomName: {
    borderRadius: 10,
    backgroundColor: "#EFF1FC",
    padding: 20 / pixelDensity,
    height: 65 / pixelDensity,
  },
});

export default OrderSummaryItem;
