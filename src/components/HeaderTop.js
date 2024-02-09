import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Image,
} from "react-native";
import divider from "../../assets/divider.png";
import bell from "../../assets/bell.png";
import star from "../../assets/star.png";
import settings from "../../assets/settingsMenu.png";
import {
  Title,
  Greeting,
  Question,
  CarouselCards,
  IconButton,
  CategoryMenuButton,
  SquareMenuButton,
  CustomFormInput,
} from "../components";
const pixelDensity = PixelRatio.get();

function HeaderTop({ navigation, route }) {
  return (
    <View>
      <View style={styles.headerWrap}>
        <Title fontSize={24} />

        <View style={styles.spaceBetweenRow}>
          <Greeting name="Ahmed" navigation={navigation} />
          <View style={styles.displayRow}>
            <IconButton image={bell} handlePress={() => {}} />
            <IconButton image={star} handlePress={() => {}} />
            <IconButton
              image={settings}
              handlePress={() => navigation.navigate("Settings")}
            />
          </View>
        </View>
      </View>

      <Image source={divider}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  displayRow: {
    display: "flex",
    flexDirection: "row",
  },
  spaceBetweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    backgroundColor: "#F8F8F8",
  },
  headerWrap: {
    marginLeft: 18 / pixelDensity,
    marginRight: 18 / pixelDensity,
  },
});
export default HeaderTop;
