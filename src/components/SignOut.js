import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  PixelRatio,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const pixelDensity = PixelRatio.get();

function SignOut({ UserName, setLoad, load }) {
  const icon = require("../../assets/sign-out-bubble.png");
  const [toggle, setToggle] = useState(false);

  const handleLogoutPress = async () => {
    await AsyncStorage.removeItem("userType");
    await AsyncStorage.removeItem("userId");
    await AsyncStorage.removeItem("token");
    setLoad(!load);
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => setToggle(!toggle)}
        style={styles.logoutBtn}
      >
        <Text style={styles.roomNameText}>{UserName}</Text>
      </TouchableOpacity>
      {toggle && (
        <TouchableOpacity
          onPress={() => handleLogoutPress()}
          style={styles.signOutBubble}
        >
          <Image source={icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    position: "relative",
  },
  logoutBtn: {
    width: 273 / pixelDensity,
    height: 51 / pixelDensity,
    backgroundColor: "#EFF1FC",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  roomNameText: {
    fontFamily: "MontserratMedium",
    color: "#1C1B1F",
    fontSize: 18 / pixelDensity,
  },
});

export default SignOut;
