import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login, Home, AdminHome } from "../screens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Settings from "../screens/Settings";
import CardXpress from "../screens/CardXpress";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

function Navigator() {
  const [userType, setUserType] = useState("");
  const [load, setLoad] = useState(false);

  const [userId, setUserId] = useState(5000047);

  useEffect(() => {
    getUserType();
  }, [load]);

  const getUserType = async () => {
    await AsyncStorage.getItem("userType").then((val) => {
      console.warn("USERTYPE: ", userType);
      setUserType(val);
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleStyle: {
            fontSize: 30,
            color: "#4D4D4D",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          // initialParams={{
          //   setLoad: setLoad,
          //   load: load,
          // }}
        />
        {/* {"Admin" === userType ? (
          <Stack.Screen
            name="AdminHome"
            component={AdminHome}
            options={{ headerShown: false }}
            initialParams={{
              setLoad: setLoad,
              load: load,
            }}
          />
        ) : "MeetingRoom" === userType ? (
          <>
            <Stack.Screen
              name="UserHome"
              component={Home}
              options={{ headerShown: false }}
              initialParams={{
                setLoad: setLoad,
                load: load,
                userId: userId,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={Home}
            options={{ headerShown: false }}
            initialParams={{
              setLoad: setLoad,
              load,
            }}
          />
        )}

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
          initialParams={{
            setLoad: setLoad,
            load: load,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          initialParams={{
            setLoad: setLoad,
            load: load,
          }}
        />
        <Stack.Screen
          name="CardXpress"
          component={CardXpress}
          options={{ headerShown: false }}
          initialParams={{
            setLoad: setLoad,
            load: load,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
          initialParams={{
            setLoad: setLoad,
            load: load,
            userId: userId,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
