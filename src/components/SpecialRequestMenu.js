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
  PixelRatio,
} from "react-native";

import CheckFinished from "../../assets/CheckFinished.png";
import closePopUp from "../../assets/close.png";
import CheckBoxList from "./CheckBoxList";
import MainButton from "./MainButton";

import API_URL from "../Constants";
import FilterItem from "./FilterItem";
import DropDown from "./DropDown";
import SpecialRequestQuantity from "./SpecialRequestQuantity";

const pixelDensity = PixelRatio.get();

function SpecialRequestMenu({
  ItemName,
  ItemId,
  RequestList,
  modalVisible,
  setModalVisible,
  quantitySR_List,
  setQuantitySR_List,
  setDrawerModalVisible,
  dropDownItems,
  setDropDownItems,
  quantityTitle,
  dropDownTitle,
  setItemQuantity,
  setFilterValue,
}) {
  const onOrderClick = () => {
    setItemQuantity(1);
    setModalVisible(false);
  };

  const IncrementHandler = (CheckId, Quantity) => {
    setQuantitySR_List(
      quantitySR_List.map((sr) =>
        sr.CheckId === CheckId
          ? {
              ...sr,
              Quantity: Quantity,
            }
          : sr
      )
    );
  };

  const SugerSelection = quantitySR_List.map((sweet) => {
    return (
      <SpecialRequestQuantity
        sweetRow={sweet}
        IncrementHandler={IncrementHandler}
        CheckId={sweet.CheckId}
      />
    );
  });

  useEffect(() => {
    // console.log(RequestList);
  }, []);
  return (
    <View style={styles.centeredView}>
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
                  style={{
                    width: 42 / pixelDensity,
                    height: 42 / pixelDensity,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </Pressable>
            </View>
            <View>
              <View>
                <Text style={styles.modalHeader}>Customize your drink</Text>
              </View>

              <View style={styles.displayRow}>
                <View>
                  <Image
                    style={{
                      width: 456 / pixelDensity,
                      height: 230 / pixelDensity,
                    }}
                    source={{
                      uri: `${API_URL}/Images/${ItemId}.png`,
                    }}
                  />

                  <View>
                    <Text style={styles.ItemNameText}>{ItemName}</Text>
                    <View style={styles.quantityCounterDiv}></View>
                  </View>
                </View>

                <View>
                  {dropDownItems.length > 0 && (
                    <>
                      <Text style={styles.ItemText}>{dropDownTitle}</Text>
                      <FilterItem
                        placeholder={dropDownTitle}
                        data={dropDownItems}
                        onSelect={setFilterValue}
                      />
                    </>
                  )}

                  <Text style={[styles.ItemText, { marginTop: 20 }]}>
                    {quantityTitle}
                  </Text>
                  {SugerSelection}
                  <TouchableOpacity
                    style={styles.addToCart}
                    onPress={onOrderClick}
                  >
                    <Text style={styles.addToCartText}>Add To Cart</Text>
                    <Image
                      source={CheckFinished}
                      style={{
                        width: 26 / pixelDensity,
                        height: 26 / pixelDensity,
                      }}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.customizeBtn}
      >
        <Text style={styles.customizeText}>Customize</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addToCartText: {
    fontFamily: "MontserratBold",
    fontSize: 16 / pixelDensity,
  },
  customizeText: {
    fontFamily: "MontserratRegular",
    fontSize: 16 / pixelDensity,
  },
  addToCart: {
    marginTop: 10,
    minWidth: 442 / pixelDensity,
    maxWidth: 442 / pixelDensity,
    height: 71 / pixelDensity,
    borderWidth: 2,
    borderColor: "#6D13FF",
    display: "flex",
    flexDirection: "row",
    padding: 20 / pixelDensity,
    justifyContent: "space-between",
    borderRadius: 6,
  },
  modalHeader: {
    fontFamily: "MontserratBold",
    fontSize: 27 / pixelDensity,
    marginBottom: 38 / pixelDensity,
  },
  customizeBtn: {
    borderColor: "#C4C4C4",
    borderWidth: 1,
    width: 217 / pixelDensity,
    height: 45 / pixelDensity,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  sweetnerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12 / pixelDensity,
    paddingBottom: 12 / pixelDensity,
    borderBottomWidth: 1,
    borderBottomColor: "#8B8B8B",
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sweetnerText: {
    fontSize: 18 / pixelDensity,
    fontFamily: "MontserratRegular",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 10,
  },
  rightView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  quantityCounterDiv: {
    paddingTop: 30,
  },
  modalView: {
    height: 783 / pixelDensity,
    backgroundColor: "white",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadiusRadius: 0,
    padding: 35,

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
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
    textAlign: "center",
  },
  centerItems: {
    textAlign: "center",
    alignItems: "center",
  },
  ItemText: {
    textAlign: "left",
    fontSize: 18 / pixelDensity,
    fontFamily: "MontserratBold",
    marginBottom: 20,
  },
  ItemNameText: {
    textAlign: "left",
    fontSize: 22 / pixelDensity,
    fontFamily: "MontserratBold",
    marginBottom: 25 / pixelDensity,
    marginTop: 25 / pixelDensity,
  },
});

export default SpecialRequestMenu;
