import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  Image,
} from "react-native";
import ontheway from "../../assets/ontheway.gif";

function OrderOnTheWay() {
  return (
    <View style={styles.centerView}>
      <Image
        source={ontheway}
        style={{
          width: 101,
          height: 89,
        }}
      ></Image>
      <Text style={styles.onTheWay}>Your order being placed!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  centerView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    height: "100%",
  },
  onTheWay: {
    color: "#8B8B8B",
    fontSize: 20,
    fontWeight: 600,
  },
});
export default OrderOnTheWay;
