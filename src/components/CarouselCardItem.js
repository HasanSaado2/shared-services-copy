import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

function CarouselCardItem({ item, index }) {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      {/* <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  image: {
    width: 125,
    height: 125,
  },
});

export default CarouselCardItem;
