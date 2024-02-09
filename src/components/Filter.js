import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  PixelRatio,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import FilterItem from "./FilterItem";
import { useFetchMeetingRoomUsers } from "../hooks/users";
import { isEmpty } from "lodash";
// import RNDateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import moment from "moment";

const pixelDensity = PixelRatio.get();

function Filter({
  setSelectedStatus,
  setUserId,
  setSelectedDate,
  selectedDate,
  setSelectedSort,
}) {
  const [userData, setUserData] = useState([]);
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);

  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY-MM-DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState();

  const statuses = [
    { title: "Pending", value: "pending" },
    { title: "In-Progress", value: "in-progress" },
    { title: "Completed", value: "completed" },
    { title: "Canceled", value: "canceled" },
  ];

  const sort = [
    { title: "Most Recent", value: "desc" },
    { title: "Oldest", value: "asc" },
  ];

  const {
    data: users,
    refetch: refetchAllUsers,
    isFetching,
    isLoading,
    onSuccess,
  } = useFetchMeetingRoomUsers();

  useEffect(() => {
    let filteredUsers = [];
    if (!isEmpty(users)) {
      for (let i = 0; i < users.data.length; i++) {
        filteredUsers.push({
          title: `${users.data[i].firstName} ${users.data[i].lastName}`,
          value: `${users.data[i].userId}`,
        });
      }
    }
    setUserData(filteredUsers);
  }, [users]);

  if (isLoading || isFetching) {
    return <ActivityIndicator />;
  }

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const setDate = (event, date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;

    setSelectedDate(date);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  return (
    <View style={styles.main}>
      <View style={styles.filterContainer}>
        <View style={[styles.selectItem, { marginRight: 30 / pixelDensity }]}>
          <Text style={styles.filterText}>Filter By</Text>
          <FilterItem
            onSelect={(e) => setUserId(e.value)}
            placeholder="Meeting Room"
            data={userData}
          />
        </View>
        <View
          style={[
            styles.selectItem,
            {
              marginRight:
                Platform.OS === "ios" ? 30 / pixelDensity : 20 / pixelDensity,
            },
          ]}
        >
          <FilterItem
            onSelect={(e) => setSelectedStatus(e.value)}
            placeholder="Order Status"
            data={statuses}
          />
        </View>
        <View
          style={[
            styles.selectItem,
            { marginRight: 287 / pixelDensity, backgroundColor: "#F8F8F8" },
          ]}
        >
          <TouchableOpacity
            style={styles.inputBtn}
            onPress={handleOnPressStartDate}
          >
            {!isEmpty(selectedDate) ? (
              <Text
                style={[
                  {
                    maxHeight:
                      Platform.OS === "ios"
                        ? 58 / pixelDensity
                        : 37 / pixelDensity,
                  },
                ]}
              >
                {selectedDate}
              </Text>
            ) : (
              <Text
                style={[
                  {
                    maxHeight:
                      Platform.OS === "ios"
                        ? 58 / pixelDensity
                        : 37 / pixelDensity,
                  },
                ]}
              >
                Date
              </Text>
            )}
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  maximumDate={startDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => {
                    setSelectedStartDate(date),
                      setSelectedDate(
                        moment(date, "YYYY/MM/DD").format("YYYY-MM-DD")
                      );
                  }}
                  selected={selectedDate}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#469ab6",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#469ab6",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />

                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: "white" }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={[styles.selectItem, { marginRight: 287 / pixelDensity }]}>
          <Text style={styles.filterText}>Sort By</Text>
          <FilterItem
            onSelect={(e) => setSelectedSort(e.value)}
            placeholder="Most Recent"
            data={sort}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  filterText: {
    color: "#000",
    fontSize: Platform.OS === "ios" ? 18 / pixelDensity : 13 / pixelDensity,
    paddingBottom: 20,
    fontFamily: "MontserratMedium",
    padding: 10,
  },

  selectItem: {
    // flex: 1,
    // display: "flex",
    zIndex: 99,
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  datePicker: {
    height: Platform.OS === "ios" ? 58 / pixelDensity : 37 / pixelDensity,
    fontFamily: "MontserratMedium",
    fontSize: Platform.OS === "ios" ? 18 / pixelDensity : 13 / pixelDensity,
    backgroundColor: "#F8F8F8",
  },

  inputBtn: {
    borderWidth: 1,
    borderRadius: 7 / pixelDensity,
    borderColor: "#C4C4C4",
    height: Platform.OS === "ios" ? 58 / pixelDensity : 37 / pixelDensity,
    paddingLeft: 8,
    fontSize: Platform.OS === "ios" ? 18 : 13,
    justifyContent: "center",
    width: Platform.OS === "ios" ? 300 / pixelDensity : 240 / pixelDensity,
    backgroundColor: "#F8F8F8",
  },

  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "50%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Filter;
