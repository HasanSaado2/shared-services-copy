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

import comboArrow from "@assets/comboArrow.png";

function FilterCombo({ FilterName, onPress }) {
  return (
    <TouchableOpacity style={styles.spaceBetweenRow} onPress={onPress}>
      <Text style={styles.FilterText}>{FilterName}</Text>

      <Image source={comboArrow}></Image>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  spaceBetweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
  },
  FilterText: {
    fontSize: 16,
    fontFamily: "MontserratRegular",
  },
});
export default FilterCombo;
