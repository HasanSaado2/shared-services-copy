import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
} from "react-native";
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
import GoBackButton from "../components/GoBackButton";

import home from "../../assets/home.png";
import cardExpress from "../../assets/cardExpress.png";
import officeVirtualSite from "../../assets/officeVirtualSite.png";
import schedulizedServices from "../../assets/schedulizedServices.png";
import history from "../../assets/history.png";
import TechnicalSupport from "../../assets/TechnicalSupport.png";
import SettingImage from "../../assets/Settings.png";
import signOut from "../../assets/signOut.png";
import SettingMenuButton from "../components/SettingMenuButton";

const SettingsMenuList = [
  { index: 0, Text: "Home", Navigation: "Home", Icon: home },
  { index: 1, Text: "CardXpress", Navigation: "CardXpress", Icon: cardExpress },
  {
    index: 2,
    Text: "Office Virtual Map",
    Navigation: "",
    Icon: officeVirtualSite,
  },
  {
    index: 3,
    Text: "Scheduled Services",
    Navigation: "",
    Icon: schedulizedServices,
  },
  { index: 4, Text: "History", Navigation: "", Icon: history },
  {
    index: 5,
    Text: "Technical Support",
    Navigation: "",
    Icon: TechnicalSupport,
  },
  { index: 6, Text: "Settings", Navigation: "", Icon: SettingImage },
  { index: 7, Text: "Sign out", Navigation: "", Icon: signOut },
];

function Settings({ navigation, route }) {
  const navigateTo = (navitage) => {
    if (navitage != "") {
      navigation.navigate(navitage);
    }
  };

  const SettingsMenu = SettingsMenuList.map((menu) => {
    return (
      <SettingMenuButton
        Icon={menu.Icon}
        ButtonText={menu.Text}
        onPress={() => {
          navigateTo(menu.Navigation);
        }}
      />
    );
  });
  return (
    <View style={styles.mainScreen}>
      <GoBackButton
        SubCategoryText=""
        onPress={() => navigation.navigate("Home")}
      />
      <Greeting name="Ahmed" />
      <View>{SettingsMenu}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainScreen: {
    margin: 30,
    marginTop: 50,
  },
});
export default Settings;
