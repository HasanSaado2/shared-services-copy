import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";

function ProfileRow({ ImageSrc, TextValue }) {
  return (
    <View style={styles.displayRow}>
      <Image source={ImageSrc} style={styles.profileImage}></Image>
      <Text style={styles.ProfileText}>{TextValue}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  displayRow: {
    display: "flex",
    flexDirection: "row",
    // marginBottom: 15,
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
  },
  ProfileText: {
    fontSize: 12,
    margin: 15,
    fontFamily: "MontserratRegular",
  },
  profileImage: {
    width: 16,
    height: 16,
    margin: 15,
  },
});
export default ProfileRow;
