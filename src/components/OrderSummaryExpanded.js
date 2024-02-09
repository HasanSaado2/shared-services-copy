import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import OrderSummaryItem from "./OrderSummaryItem";
import MainButton from "./MainButton";
import CustomOutlinedButton from "./CustomOutlinedButton";

import closePopUp from "../../assets/CloseModal.png";
import whiteBoard from "../../assets/board.png";

function OrderSummaryExpanded({
  modalVisible,
  setModalVisible,
  order,
  user,
  selected,
  handleUpdateOrder,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{user}</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image source={closePopUp} />
              </Pressable>
            </View>
            <View>
              <Text style={styles.serviceNameText}>{order?.categoryName}</Text>
            </View>
            {/* <View style={styles.row}>
              <Text style={styles.serviceText}>
                Catering Services
              </Text>
            </View> */}
            {order?.orderDetails?.map((item, index) => (
              <OrderSummaryItem
                item={item}
                key={index}
                lastChild={
                  index + 1 == order?.orderDetails?.length ? true : false
                }
              />
            ))}
            {/* <MainButton text="Accept" /> */}
            {"pending" === selected ? (
              <MainButton
                text="Accept"
                onPress={() => handleUpdateOrder("in-progress")}
              />
            ) : "in-progress" === selected ? (
              <View>
                {/* <MainButton
                    text="On the way"
                    height={41}
                    onPress={() => handleAcceptPress()}
                  /> */}
                <MainButton
                  text="Complete"
                  onPress={() => handleUpdateOrder("completed")}
                  color="#0FAB0B"
                />
              </View>
            ) : "completed" === selected ? (
              <CustomOutlinedButton
                text="Completed"
                height={41}
                onPress={() => {}}
                borderColor="#0FAB0B"
                width="100%"
              />
            ) : "cancelled" === selected ? (
              <CustomOutlinedButton
                text="Cancelled"
                height={41}
                onPress={() => {}}
                borderColor="#C90000"
                width="100%"
              />
            ) : (
              <></>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 22,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerText: {
    fontFamily: "MontserratBold",
    fontSize: 18,
    color: "#000",
  },

  row: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },

  serviceText: {
    color: "#000",
    fontFamily: "MontserratRegular",
    fontSize: 18,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 460,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  serviceNameText: {
    fontFamily: "MontserratRegular",
    fontSize: 18,
    color: "#000",
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OrderSummaryExpanded;
