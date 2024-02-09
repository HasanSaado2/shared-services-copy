import { useEffect, useState } from "react";
import API_URL from "../Constants";
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
import moment from "moment";
import UpdateStatusButton from "./UpdateStatusButton";

function AdminOrderItem({ allOrders, userId, refreshAllData }) {
  const orderItems =
    allOrders &&
    allOrders.map((order, index) => {
      return (
        <OrderItem
          key={index}
          order={order}
          userId={userId}
          refreshAllData={refreshAllData}
        />
      );
    });
  return <View>{orderItems}</View>;
}

function OrderItem({ order, userId, refreshAllData }) {
  const [showMore, setShowMore] = useState(false);
  const itemsInOrder = order?.orderDetails.map((o, index) => {
    return (
      <ItemInOrder
        key={index}
        orderDetail={o}
        refreshAllData={refreshAllData}
        showMore={showMore}
        index={index}
      />
    );
  });
  return (
    <View style={styles.orderItem}>
      <View style={styles.spaceBetweenRow}>
        <Text style={styles.orderNumber}>Order # {order.orderId}</Text>
        <View style={styles.displayRow}>
          <View style={styles.categoryText}>
            <Text style={styles.insideText}>{order.categoryName}</Text>
          </View>
          <View style={styles.roomText}>
            <Text style={styles.insideText}>Room 1</Text>
          </View>
        </View>
      </View>
      <View style={styles.mtb10}>
        <View style={styles.displayRow}>
          <Text style={styles.displayText}>
            {moment(order.dateCreated).format("YYYY-MM-DD")}
          </Text>
          <Text style={styles.seperator}>|</Text>
          <Text style={styles.displayText}>
            {moment(order.dateCreated).format("MM : ss")}
          </Text>
        </View>
      </View>
      <View>{itemsInOrder}</View>
      <View></View>

      <View style={styles.spaceBetweenRow}>
        <UpdateStatusButton
          status={order.orderStatus}
          orderNumber={order.orderId}
          userId={userId}
          refreshAllData={refreshAllData}
        />
        {order?.orderDetails.length > 1 && (
          <TouchableOpacity onPress={() => setShowMore(!showMore)}>
            <Text style={styles.viewMore}>
              {showMore
                ? "View Less"
                : `+ ${order?.orderDetails.length - 1} View More`}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

function ItemInOrder({ orderDetail, index, showMore }) {
  useEffect(() => {
    console.log("it means no worries");
    console.log(orderDetail);
  }, [orderDetail]);
  return (
    (showMore || index < 1) && (
      <View style={styles.itemWrap}>
        <Image
          source={{
            uri: `${API_URL}/Images/Item_${orderDetail.item.itemId}.png`,
          }}
          style={styles.image}
        ></Image>
        <View>
          <Text style={styles.itemName}>{orderDetail.item.itemName}</Text>
          <Text></Text>
          <Text style={styles.itemDesc}>Quantity: {orderDetail.quantity}</Text>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  viewMore: {
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  orderNumber: { fontFamily: "MontserratSemiBold", fontSize: 14 },
  mtb10: { marginTop: 10, marginBottom: 10 },
  itemName: { fontFamily: "MontserratBold", fontSize: 14 },
  itemDesc: { fontFamily: "MontserratMedium", fontSize: 12 },
  itemWrap: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  seperator: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 12,
    fontFamily: "MontserratMedium",
  },

  categoryText: {
    width: 98,
    height: 28,
    backgroundColor: "#FDF6F4",

    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  roomText: {
    width: 98,
    height: 28,
    backgroundColor: "#EFF1FC",

    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  insideText: { fontSize: 10, fontFamily: "MontserratMedium" },
  displayRow: { display: "flex", flexDirection: "row" },
  displayText: { fontSize: 12, fontFamily: "MontserratMedium" },
  orderItem: {
    width: "100%",
    // height: 230,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  spaceBetweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default AdminOrderItem;
