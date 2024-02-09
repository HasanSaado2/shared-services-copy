import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

function CircularMenuButton({ icon, color, onPress }) {
  const image = "cart" === icon ? require("../../assets/cart-icon.png") : require("../../assets/order-icon.png");

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={[styles.menuButton, { backgroundColor: color }]}>
        <Image
          source={image}
          style={styles.background}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  menuButton: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    height: 21,
    width: 21,
    padding: 10
  }
});

export default CircularMenuButton;
