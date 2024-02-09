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
import blueCheck from "@assets/blueCheck.png";

function BlueCheckButton({
  ButtonText,
  myValue,
  selectedValue,
  setSelectedValue,
}) {
  return (
    <TouchableOpacity
      style={styles.sortButton}
      onPress={() => setSelectedValue(myValue)}
    >
      <Text style={styles.sortText}>{ButtonText}</Text>
      {myValue == selectedValue && <Image source={blueCheck}></Image>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  sortText: {
    fontSize: 16,
    fontFamily: "MontserratRegular",
  },
  sortButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default BlueCheckButton;
