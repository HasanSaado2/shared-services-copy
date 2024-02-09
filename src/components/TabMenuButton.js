import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  PixelRatio,
} from "react-native";

const pixelDensity = PixelRatio.get();

function TabMenuButton({
  ButtonText,
  selected,
  ButtonIndex,
  setActiveIndex,
  selectedId,
  setSelectedId,
  width,
  PixelRatio,
}) {
  const onMenuButtonClick = () => {
    setActiveIndex(ButtonIndex);
    setSelectedId(selectedId);
  };
  return (
    <View>
      <TouchableOpacity
        style={[
          selected == ButtonIndex ? styles.selectedButton : styles.button,
          { width: width, maxWidth: width },
        ]}
        onPress={() => onMenuButtonClick()}
      >
        <Text style={styles.buttonTextt}>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonTextt: {
    fontSize: 18 / pixelDensity,
    fontWeight: 600,
    alignSelf: "center",
  },

  button: {
    backgroundColor: "white",
    alignItems: "center",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 87 / pixelDensity,
    borderRadius: 12,
  },
  selectedButton: {
    backgroundColor: "white",
    borderColor: "#6D13FF",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 87 / pixelDensity,
  },
});
export default TabMenuButton;
