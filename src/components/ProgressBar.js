import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

function ProgressBar({ Percentage }) {
  return (
    <View style={styles.progressBackground}>
      <View style={[styles.Progress, { width: Percentage }]}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  progressBackground: {
    width: "100%",
    height: 13,
    borderRadius: 34,
    backgroundColor: "#EFEFEF",
    zIndex: 1,
  },
  Progress: {
    backgroundColor: "#1401F5",
    borderRadius: 34,
    height: 13,
    zIndex: 10,
  },
});
export default ProgressBar;
