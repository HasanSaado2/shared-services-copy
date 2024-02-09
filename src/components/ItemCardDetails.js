import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import MainButton from "./MainButton";
import API_URL from "../Constants";
import QuantityCounter from "./QuantityCounter";
const { height, width } = Dimensions.get("window");
import divider from "../../assets/divider.png";
import { useState, useEffect } from "react";
import closeModal from "../../assets/CloseModal.png";
import SpecialRequestQuantity from "./SpecialRequestQuantity";

function ItemCardDetails({
  Item,
  itemsInOrder,
  setItemsInOrder,
  showItemDetails,
  setShowItemDetails,
  itemQuantity,
  setItemQuantity,
  orderViewState,
  setOrderViewState,
  quantitySR_List,
  setQuantitySR_List,
  orderCount,
}) {
  const addItemToCart = () => {
    setItemQuantity(1);
    setOrderViewState(1);
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
  const SugerSelection = quantitySR_List.map((sweet, index) => {
    return (
      <SpecialRequestQuantity
        key={index}
        sweetRow={sweet}
        IncrementHandler={IncrementHandler}
        CheckId={sweet.CheckId}
      />
    );
  });

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showItemDetails}
        onRequestClose={() => {
          setShowItemDetails(!showItemDetails);
        }}
      >
        <View style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <View style={styles.modalView}>
            <Image
              source={{
                uri: `${API_URL}/Images/Item_${Item.itemId}.png`,
              }}
              style={styles.image}
            ></Image>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => setShowItemDetails(false)}
            >
              <Image source={closeModal}></Image>
            </TouchableOpacity>

            <View style={styles.mainView}>
              <View style={styles.alignRight}>
                <QuantityCounter
                  itemQuantity={itemQuantity}
                  setItemQuantity={setItemQuantity}
                  width={34}
                  height={20}
                />
              </View>
            </View>
            <Image source={divider}></Image>

            <View style={styles.mainView}>{SugerSelection}</View>

            <View style={styles.FooterContinue}>
              {/* <MainButton
                text="Add to Cart"
                height={31}
                fontSize={14}
                onPress={() => {
                  addItemToCart();
                }}
              /> */}
              <AddToCart
                orderCount={orderCount}
                onPress={() => {
                  addItemToCart();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

function AddToCart({ onPress, orderCount }) {
  return (
    <TouchableOpacity style={styles.addToCartButton} onPress={onPress}>
      <Text style={styles.addToCartText}>Add to Cart</Text>
      <Text style={styles.itemsInView}>{orderCount}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addToCartText: {
    color: "white",
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
  },
  itemsInView: {
    color: "#070085",
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    backgroundColor: "white",
    // padding: 5,
    borderRadius: 20,
    width: 26,
    height: 26,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 3,
  },
  addToCartButton: {
    width: "100%",
    height: 35,
    backgroundColor: "#070085",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
    padding: 7,
  },
  closeModal: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  FooterContinue: {
    padding: 20,
    borderColor: "#F5F7FF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: 1,
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
    top: 190,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 50,
      height: 2,
    },
    shadowOpacity: 0.001,
    shadowRadius: 4,
    elevation: 7,
    width: "100%",
    height: 0.8 * height,
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
export default ItemCardDetails;
