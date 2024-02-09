import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import MainButton from "./MainButton";
import closeModal from "@assets/CloseModal.png";
import leftArrow from "@assets/leftArrow.png";
import BlueCheckButton from "./BlueCheckButton";
import FilterCombo from "./FilterCombo";
import { useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
const { height, width } = Dimensions.get("window");

const OrderStatusList = [
  { value: "pending", text: "Pending" },
  { value: "in-progress", text: "In Progress" },
  { value: "onTheWay", text: "On The Way" },
  { value: "completed", text: "Completed" },
  { value: "cancelled", text: "Cancelled" },
];

function FilterModal({
  showSort,
  setShowSort,
  selectedStatus,
  setSelectedStatus,
  selectedDate,
  setSelectedDate,
}) {
  const [modalHeight, setModalHeight] = useState(350);
  const [showFilterDetails, setShowFilterDetails] = useState(false);

  const [showdateFilter, setShowDateFilter] = useState(false);

  const [activeDataList, setActiveDataList] = useState([]);

  const dataListView = activeDataList.map((c) => {
    return (
      <BlueCheckButton
        ButtonText={c.text}
        selectedValue={selectedStatus}
        myValue={c.value}
        setSelectedValue={setSelectedStatus}
      />
    );
  });

  const [detailFilterTitle, setDetailFilterTitle] = useState("");

  const onFilterPress = (filterText, filterList) => {
    setShowFilterDetails(true);
    setDetailFilterTitle(filterText);
    setActiveDataList(filterList);
  };

  const onHideFilterDetails = () => {
    setShowFilterDetails(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showSort}
      onRequestClose={() => {
        setShowSort(!showSort);
      }}
    >
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            { top: height - modalHeight },
            { height: modalHeight },
          ]}
        >
          {!showFilterDetails && (
            <View>
              <View style={styles.spaceBetweenRow}>
                <Text style={styles.modalTitle}>Filter</Text>
                <TouchableOpacity
                  style={styles.closeModal}
                  onPress={() => setShowSort(false)}
                >
                  <Image source={closeModal}></Image>
                </TouchableOpacity>
              </View>
              {/* <FilterCombo
                FilterName="Meeting Room"
                onPress={() => onFilterPress("Meeting Room", [])}
              /> */}

              <FilterCombo
                FilterName="Order Status"
                onPress={() => onFilterPress("Order Status", OrderStatusList)}
              />

              <FilterCombo
                FilterName="Date"
                onPress={() => onFilterPress("Date")}
              />

              <DateTimePicker
                date={selectedDate ? new Date(selectedDate) : new Date()}
                isVisible={showdateFilter}
                mode="date"
                // onConfirm={this.handleDatePicked}
                // onCancel={this.hideDateTimePicker}
              />

              <View style={styles.buttonMargin}>
                <MainButton text="Show" height={42} />
              </View>
            </View>
          )}
          {showFilterDetails && (
            <>
              <View>
                <TouchableOpacity
                  onPress={onHideFilterDetails}
                  style={styles.backArrowButton}
                >
                  <Image source={leftArrow}></Image>
                  <Text style={styles.ButtonText}>{detailFilterTitle}</Text>
                </TouchableOpacity>
              </View>

              <View>{dataListView}</View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  buttonMargin: { marginTop: 10, marginBottom: 10 },
  spaceBetweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sortText: {
    fontSize: 16,
    fontFamily: "MontserratRegular",
  },
  sortButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
  },
  modalView: {
    position: "absolute",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 35,
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
  modalTitle: { fontSize: 24, fontFamily: "MontserratBold" },
  backArrowButton: { display: "flex", flexDirection: "row" },
  ButtonText: {
    marginLeft: 10,
    fontSize: 21,
    fontFamily: "MontserratBold",
    marginBottom: 10,
  },
});

export default FilterModal;
