import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
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

function SettingMenuButton({ Icon, ButtonText, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.settingsButton}>
      <Image source={Icon} style={styles.settingsIcon}></Image>
      <Text style={styles.SettingsText}>{ButtonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  settingsButton: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  settingsIcon: {
    width: 18,
    height: 20,
  },
  SettingsText: {
    marginLeft: 10,
    color: "#0B003F",
    fontSize: 14,
    fontFamily: "MontserratMedium",
  },
});
export default SettingMenuButton;
