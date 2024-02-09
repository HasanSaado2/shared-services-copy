import { useState } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { Title, CustomTextInput, MainButton } from "../components";
import { useMutation } from "@tanstack/react-query";
import API_URL from "../Constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isEmpty } from "lodash";

export default function Login({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { setLoad, load } = route.params;
  const [errorMessage, setErrorMessage] = useState("");

  const login = useMutation({
    mutationFn: (fields) => {
      return axios.post(API_URL + `/auth/login`, fields);
    },
    onSuccess: async (data) => {
      await AsyncStorage.setItem("token", data?.data?.token);
      await AsyncStorage.setItem("userType", data?.data?.usertype);
      await AsyncStorage.setItem("userId", data?.data?.userid.toString());
      // setLoad(!load);
    },
    onError: async (error) => {
      setErrorMessage(error?.message);
    },
  });

  const handleOnPress = async () => {
    login.mutate({
      username: email,
      password: password,
    });
  };

  console.warn("HELLOOOOO");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.title}>
          <Title orientation="center" />
        </View>
        <View style={styles.input}>
          <CustomTextInput
            placeholder="Email"
            keyboardType="email-address"
            secureTextEntry={false}
            value={email}
            setValue={setEmail}
          />
        </View>
        <View style={styles.input}>
          <CustomTextInput
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
          />
        </View>
        {!isEmpty(errorMessage) && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}
        <View style={styles.signIn}>
          <MainButton text="Sign In" onPress={handleOnPress} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "center",
  },

  title: {
    marginBottom: 50,
  },

  input: {
    marginBottom: 20,
    width: "60%",
  },

  signIn: {
    marginTop: 20,
    width: "60%",
  },

  errorText: {
    fontFamily: "MontserratSemiBold",
    color: "#C90000",
  },
});
