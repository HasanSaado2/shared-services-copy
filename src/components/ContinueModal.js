import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Modal,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");
function ContinueModal({ showContinue, setShowContinue }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showContinue}
      onRequestClose={() => {
        setShowContinue(!showContinue);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>dsfdsfsds</Text>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    top: height - 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height: 100,
  },
});

export default ContinueModal;
