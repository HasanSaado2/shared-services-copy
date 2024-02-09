import { StyleSheet, TextInput, View } from "react-native";

function CustomFormInput({
  placeholder,
  inputWidth,
  inputHeight,
  value,
  setValue,
}) {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={(e) => setValue(e)}
        style={[styles.input, { width: inputWidth, height: inputHeight }]}
        placeholder={placeholder}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "#101010",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 30,
    fontSize: 12,
    color: "#6A6A6A",
    fontFamily: "MontserratMedium",
  },
});

export default CustomFormInput;
