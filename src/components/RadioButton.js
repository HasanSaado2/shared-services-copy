import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import unSelectedRadio from "../../assets/unSelectedRadio.png";
import selectedRadio from "../../assets/selectedRadio.png";
function RadioButton({ RadioText, value, setValue, myValue }) {
  return (
    <TouchableOpacity
      style={styles.displayRow}
      onPress={() => setValue(myValue)}
    >
      <Image
        source={myValue == value ? selectedRadio : unSelectedRadio}
        style={styles.radioSmall}
      ></Image>
      <Text style={styles.RadioText}>{RadioText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  radioSmall: {
    width: 17,
    height: 17,
  },
  displayRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  RadioText: {
    fontSize: 12,
    fontFamily: "MontserratRegular",
    marginLeft: 10,
    marginRight: 20,
  },
});
export default RadioButton;
