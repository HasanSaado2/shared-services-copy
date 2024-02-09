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

import closePopUp from "../../assets/CloseModal.png";
import checkFinished from "../../assets/CheckFinished.png";

function ConfirmSupport({
  modalVisible,
  setModalVisible,
  callOnOK,
  requestText,
}) {
  const pressYes = () => {
    setModalVisible(false);
    callOnOK();
  };
  return (
    <View>
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
            <View style={styles.rightView}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={closePopUp}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </Pressable>
            </View>
            <View style={{ textAlign: "center", alignItems: "center" }}>
              <Text style={styles.modalText}>Confirm {requestText}?</Text>

              <View style={styles.displayRow}>
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={styles.confirmButton}
                >
                  <Text>No</Text>
                </Pressable>
                <Pressable
                  onPress={() => pressYes()}
                  style={[styles.confirmButton]}
                >
                  <Text style={styles.yesButton}>Yes</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  confirmButton: {
    width: 50,
    borderRadius: 10,
  },
  yesButton: {
    color: "green",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
  },
  rightView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 250,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    fontWeight: 500,
  },
});

export default ConfirmSupport;
