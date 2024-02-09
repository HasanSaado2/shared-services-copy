import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import HeaderTop from "../components/HeaderTop";
import GoBackButton from "../components/GoBackButton";

import smartId from "../../assets/smart-id-blank.png";

function CardXpress({ navigation, route }) {
  return (
    <View style={styles.mainScreen}>
      <HeaderTop />
      <GoBackButton
        SubCategoryText="Smart ID"
        onPress={() => navigation.navigate("Home")}
      />
      <Image source={smartId} style={styles.imageCenter}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  mainScreen: {
    margin: 10,
    marginTop: 40,
  },
  imageCenter: {
    alignSelf: "center",
  },
});
export default CardXpress;
