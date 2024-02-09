import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  PixelRatio,
} from "react-native";
import { useState, useEffect } from "react";
import { Title, SignOut } from "@components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFetchUserById } from "@hooks/users";
import {
  useFetchOrdersByStatus,
  useFetchPendingOrders,
  useFetchInProgressOrders,
  useFetchCompletedOrders,
  useFetchAllOrders,
} from "@hooks/orders";
import {
  SubMenuButtonGroup,
  OrderSummary,
  Filter,
  CustomLink,
} from "@components";

import BagIcon from "@assets/bag.png";
import ClockIcon from "@assets/clock.png";
import CompletedIcon from "@assets/completed.png";
import { isEmpty } from "lodash";
import moment from "moment";

const pixelDensity = PixelRatio.get();

function Admin({ navigation, route }) {
  const [userId, setUserId] = useState("");
  const { setLoad, load } = route.params;
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [selectedSort, setSelectedSort] = useState("desc");

  const {
    data: orders,
    refetch: refetchOrders,
    isLoading: isLoadingOrders,
    isFetching: isFetchingOrders,
  } = useFetchOrdersByStatus(
    userId,
    selectedStatus,
    moment(selectedDate).format("YYYY-MM-DD"),
    selectedSort
  );

  const { data: pendingOrders, refetch: refetchPendingOrders } =
    useFetchPendingOrders(userId);

  const { data: inProgressOrders, refetch: refetchInProgressOrders } =
    useFetchInProgressOrders(userId);

  const { data: completedOrders, refetch: refetchCompletedOrders } =
    useFetchCompletedOrders(userId);

  const { data: allOrders, refetch: refetchAllOrders } = useFetchAllOrders();

  const buttonList = [
    {
      ButtonIndex: 0,
      ButtonText: "Total Ordersss",
      ImageUrl: BagIcon,
      CategoryId: "pending",
    },
    {
      ButtonIndex: 1,
      ButtonText: "Pending",
      ImageUrl: ClockIcon,
      CategoryId: "in-progress",
    },
    {
      ButtonIndex: 2,
      ButtonText: "Completed",
      ImageUrl: CompletedIcon,
      CategoryId: "completed",
    },
  ];

  const { data: user, refetch: refetchUser } = useFetchUserById(userId);

  useEffect(() => {
    refetchOrders();
    refetchInProgressOrders();
    refetchPendingOrders();
    refetchCompletedOrders();
    refetchAllOrders();
  }, [user]);

  useEffect(() => {
    refetchOrders();
  }, [selectedStatus, userId, selectedDate, selectedSort]);

  useEffect(() => {
    getUserId();
  }, []);

  useEffect(() => {
    refetchUser();
  }, [userId]);

  const getUserId = async () => {
    await AsyncStorage.getItem("userId").then((val) => {
      setUserId(val);
    });
  };

  console.log("userId", userId);
  console.log("user: ", user?.data);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={{ alignItems: "flex-end" }}>
          {!isEmpty(user) && (
            <SignOut
              UserName={`${user?.data?.firstName} ${user?.data?.lastName}`}
              setLoad={setLoad}
              load={load}
            />
          )}
        </View>
        <View style={styles.mtop20}>
          <Title topText="Order Dashboard" fontSize={30} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.buttonsContainer}>
            <SubMenuButtonGroup
              MenuDetails={buttonList}
              pendingOrders={pendingOrders?.data?.length}
              inProgressOrders={inProgressOrders?.data?.length}
              completedOrders={completedOrders?.data?.length}
              allOrders={allOrders?.data?.length}
            />
          </View>
        </View>
        <View style={styles.filterContainer}>
          <Filter
            setSelectedStatus={setSelectedStatus}
            // setUserId={setUserId}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            setSelectedSort={setSelectedSort}
          />
        </View>
      </View>
      <View style={styles.ordersScroll}>
        <View style={styles.orderSummary}>
          <OrderSummary
            orders={orders?.data}
            refetchOrders={refetchOrders}
            user={user?.data}
            refetchPendingOrders={refetchPendingOrders}
            refetchInProgressOrders={refetchInProgressOrders}
            refetchCompletedOrders={refetchCompletedOrders}
            refetchAllOrders={refetchAllOrders}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  main: {
    paddingRight: 60 / pixelDensity,
    paddingLeft: 60 / pixelDensity,
    paddingTop: 50 / pixelDensity,
    paddingBottom: 10 / pixelDensity,
  },

  // mtop20: {
  //   marginTop: 20 / pixelDensity,
  // },

  textContainer: {
    marginTop: 50,
    marginBottom: 50,
  },

  buttonsContainer: {
    marginTop: 34,
  },

  orderSummary: {
    marginTop: 0,
  },

  ordersScroll: {
    marginTop: 0,
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    zIndex: 1,
  },

  filterContainer: {
    marginTop: 50,
    zIndex: 999,
  },
});

export default Admin;
