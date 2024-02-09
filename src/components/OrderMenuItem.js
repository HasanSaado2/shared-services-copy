import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import React, { useState, useEffect } from "react";

import API_URL from "../Constants";

const pixelDensity = PixelRatio.get();

function OrderMenuItem({
  ItemName,
  ItemId,
  ItemSubDescription,
  Quantity,
  removeItemFromOrder,
  SR_List,
  CategoryName,
  CategoryColor,
  isTrack = false,
}) {
  const specialRequestDisplay =
    SR_List &&
    SR_List.map((sr) => {
      // console.log(sr);
      return <Text style={styles.SRDescription}>{sr.SR_Text}</Text>;
    });

  const specialRequestDisplayTrack =
    SR_List &&
    SR_List.map((sr) => {
      // console.log(sr);
      return <Text style={styles.SRDescription}>{sr.s_RequestName}</Text>;
    });
  return (
    <View>
      <View style={[styles.horizontalView, styles.mainView]}>
        <View style={styles.horizontalView}>
          <View style={styles.itemBox}>
            <Image
              style={{
                width: 70 / pixelDensity,
                height: 70 / pixelDensity,
              }}
              source={{
                uri: `${API_URL}/Images/${ItemId}.png`,
              }}
            />
          </View>

          <View style={[styles.verticalView, styles.itemText]}>
            <Text style={styles.ItemName}>{ItemName}</Text>
            {!isTrack && (
              <View style={[styles.verticalView]}>{specialRequestDisplay}</View>
            )}
            {isTrack && (
              <View style={[styles.verticalView]}>
                {specialRequestDisplayTrack}
              </View>
            )}
          </View>

          <View>
            <Text
              style={[
                styles.categoryContainer,
                { backgroundColor: CategoryColor },
              ]}
            >
              {CategoryName}
            </Text>
          </View>
          <View>
            {!isTrack && (
              <>
                <TouchableOpacity onPress={() => removeItemFromOrder(ItemId)}>
                  <Text style={styles.RemoveButton}>Remove</Text>
                </TouchableOpacity>
                <Text style={styles.subDescription}>x{Quantity}</Text>
              </>
            )}
            {isTrack && (
              <TouchableOpacity>
                <Text style={styles.RemoveButton}>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemBox: {
    width: 180 / pixelDensity,
    height: 106 / pixelDensity,
    backgroundColor: "#F6F7F9",
    borderRadius: 12 / pixelDensity,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    width: "35%",
    textAlign: "left",
    paddingLeft: 10,
  },
  categoryContainer: {
    borderRadius: 10,
    fontFamily: "MontserratRegular",
    fontSize: 14 / pixelDensity,
    width: 158 / pixelDensity,
    height: 26 / pixelDensity,
    textAlign: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 100,
  },
  miniImage: { width: 50, height: 50 },

  horizontalView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  verticalView: {
    display: "flex",
    flexDirection: "column",
  },
  mainView: {
    width: "100%",
    justifyContent: "space-between",
  },
  RemoveButton: {
    color: "#6D13FF",
    fontSize: 16 / pixelDensity,
    fontFamily: "MontserratMedium",
  },
  ItemName: {
    fontSize: 18 / pixelDensity,
    fontFamily: "MontserratBold",
  },
  subDescription: {
    color: "#686565",
    fontFamily: "MontserratMedium",

    fontSize: 16 / pixelDensity,
    paddingTop: 10,
    textAlign: "right",
  },
  SRDescription: {
    color: "#8B8B8B",
    fontWeight: 300,
    paddingTop: 5,
    fontSize: 16 / pixelDensity,
  },
});
export default OrderMenuItem;
