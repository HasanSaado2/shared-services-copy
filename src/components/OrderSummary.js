import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  PixelRatio,
} from "react-native";
import OrderSummaryItem from "./OrderSummaryItem";

const pixelDensity = PixelRatio.get();

function OrderSummary({
  orders,
  refetchOrders,
  user,
  selected,
  refetchPendingOrders,
  refetchInProgressOrders,
  refetchCompletedOrders,
  refetchAllOrders,
}) {
  return (
    <View style={{ height: "100%" }}>
      <View style={styles.table}>
        <Text
          style={[styles.tableHeaderText, { marginRight: 56 / pixelDensity }]}
        >
          Order #
        </Text>
        <Text
          style={[styles.tableHeaderText, { marginRight: 86 / pixelDensity }]}
        >
          Date
        </Text>
        <Text
          style={[styles.tableHeaderText, { marginRight: 112 / pixelDensity }]}
        >
          Time
        </Text>
        <Text
          style={[styles.tableHeaderText, { marginRight: 88 / pixelDensity }]}
        >
          Meeting Room
        </Text>
        <Text
          style={[styles.tableHeaderText, { marginRight: 350 / pixelDensity }]}
        >
          Item
        </Text>
        <Text
          style={[styles.tableHeaderText, { marginRight: 70 / pixelDensity }]}
        >
          Customization
        </Text>
        <Text
          style={[styles.tableHeaderText, { marginRight: 62 / pixelDensity }]}
        >
          Quantity
        </Text>
        <Text
          style={[styles.tableHeaderText, { marginRight: 176 / pixelDensity }]}
        >
          Service
        </Text>
        <Text style={styles.tableHeaderText}>Status</Text>
      </View>
      <ScrollView>
        {orders?.map((order, index) => (
          <OrderSummaryItem
            key={index}
            order={order}
            refetchOrders={refetchOrders}
            user={user}
            selected={selected}
            refetchPendingOrders={refetchPendingOrders}
            refetchInProgressOrders={refetchInProgressOrders}
            refetchCompletedOrders={refetchCompletedOrders}
            refetchAllOrders={refetchAllOrders}
          />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  table: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    // justifyContent: "space-between",
    paddingTop: 40 / pixelDensity,
    paddingBottom: 40 / pixelDensity,
  },

  tableHeaderText: {
    fontFamily: "MontserratSemiBold",
    color: "#4E4B4B",
    fontSize: 18 / pixelDensity,
    // flex: 1,
    maxWidth: 100,
  },
});

export default OrderSummary;
