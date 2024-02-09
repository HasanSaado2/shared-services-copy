import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

function CustomTextInput({
  placeholder,
  inputWidth,
  keyboardType,
  secureTextEntry,
  value,
  setValue
}) {

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={(e) => setValue(e)}
        style={[styles.input, { width: inputWidth }]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 11,
    height: 67,
    paddingLeft: 30,
    fontSize: 18,
    color: "#8D8D8D",
    fontFamily: "MontserratMedium"
  },
});

export default CustomTextInput;
