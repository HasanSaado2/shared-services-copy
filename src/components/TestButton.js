import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";

function TestButton({ ButtonText, selected, ButtonIndex, setActiveIndex }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{ButtonText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonTextt: {
    fontSize: 16,
    fontWeight: 600,
    alignSelf: "center",
  },

  button: {
    alignItems: "center",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    minWidth: 250,
    height: 78,
  },
  selectedButton: {
    flex: 1,
    borderColor: "#6D13FF",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 250,
    height: 78,
  },
});
export default TestButton;
