import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import MainButton from "./MainButton";
import closeModal from "@assets/CloseModal.png";
import BlueCheckButton from "./BlueCheckButton";

const { height, width } = Dimensions.get("window");
function SortModal({ showSort, setShowSort, selectedSort, setSelectedSort }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showSort}
      onRequestClose={() => {
        setShowSort(!showSort);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.spaceBetweenRow}>
            <Text style={styles.modalTitle}>Sort</Text>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => setShowSort(false)}
            >
              <Image source={closeModal}></Image>
            </TouchableOpacity>
          </View>

          <BlueCheckButton
            ButtonText="Most Recent"
            myValue="desc"
            selectedValue={selectedSort}
            setSelectedValue={setSelectedSort}
          />
          <BlueCheckButton
            ButtonText="Oldest"
            myValue="asc"
            selectedValue={selectedSort}
            setSelectedValue={setSelectedSort}
          />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  spaceBetweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sortText: {
    fontSize: 16,
    fontFamily: "MontserratRegular",
  },
  sortButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
  },
  modalView: {
    position: "absolute",
    top: height - 250,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
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
    height: 250,
  },
  modalTitle: { fontSize: 24, fontFamily: "MontserratBold" },
});

export default SortModal;
