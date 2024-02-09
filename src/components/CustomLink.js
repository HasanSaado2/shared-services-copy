import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

function CustomLink({ url = "https://google.com", title = "Google" }) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  });

  return (
    <View style={styles.container}>
      <Button title={title} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomLink;
