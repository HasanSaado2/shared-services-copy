import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Dimensions,
  Image,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import GoBackButton from "./GoBackButton";
import RadioButton from "./RadioButton";
import TakePhoto from "./TakePhoto";
const { height, width } = Dimensions.get("window");
function SubCategorySelect({ CatId, CatName, userId }) {
  const [delivery, setDelivery] = useState(0);

  return (
    <View style={{ position: "relative", height: height - 200 }}>
      <View>
        <GoBackButton
          SubCategoryText={CatName}
          onPress={() => setOrderViewState(0)}
        />
      </View>
      <TakePhoto />
      <View>
        <View style={styles.displayRow}>
          <RadioButton
            RadioText="My Office"
            value={delivery}
            setValue={setDelivery}
            myValue={0}
          />
          <RadioButton
            RadioText="Other Office"
            value={delivery}
            setValue={setDelivery}
            myValue={1}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  columnView: { display: "flex", flexDirection: "column" },
  DeliveryTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginTop: 20,
  },
  OrderItemText: {
    fontSize: 14,
    fontFamily: "MontserratSemiBold",
    marginLeft: 20,
  },
  OrderImage: {
    width: 55,
    height: 55,
  },
  spaceBetweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  closeModal: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  FooterContinue: {
    padding: 20,
    borderColor: "#F5F7FF",
    backgroundColor: "#F5F7FF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "absolute",
    width: "100%",

    top: height - 250,
  },
  alignRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: 185,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  modalView: {
    position: "absolute",
    top: 80,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
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
  mainView: {
    margin: 20,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "MontserratRegular",
  },
});
export default SubCategorySelect;
