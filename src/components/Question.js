import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio,
} from "react-native";

function Question() {
  return (
    <View>
      <Text style={styles.text}>What can we do to help you today?</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontFamily: "MontserratMedium",
    fontSize: 16,
  },
});

export default Question;
