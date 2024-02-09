import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";

function CategoryMenuButton({
  icon,
  selectedIcon,
  buttonText,
  handlePress,
  index,
  selectedIndex,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.categoryButton,
        index == selectedIndex
          ? styles.selectedButton
          : styles.unselectedButton,
      ]}
    >
      <View style={styles.row}>
        <Image
          source={index == selectedIndex ? selectedIcon : icon}
          style={styles.image}
        />

        <Text
          style={[
            styles.buttonText,
            index == selectedIndex
              ? styles.selectedText
              : styles.unselectedText,
          ]}
        >
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  categoryButton: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 18,
    width: 150,
    height: 50,
    borderRadius: 7,

    elevation: 3,
    marginTop: 7,
    marginBottom: 7,
  },
  unselectedButton: {
    backgroundColor: "#F5F7FF",
  },
  selectedButton: {
    backgroundColor: "#002FFF",
  },

  image: {
    marginTop: 5,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
  buttonText: {
    marginLeft: 10,
    fontFamily: "MontserratSemiBold",
    fontSize: 13,
    maxWidth: 90,
  },
  unselectedText: {
    color: "#000000",
  },
  selectedText: {
    color: "white",
  },
});
export default CategoryMenuButton;
