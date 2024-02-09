import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Image,
} from "react-native";
import API_URL from "../Constants";
import axios from "axios";
import GoBackButton from "../components/GoBackButton";
import React, { useCallback, useState, useEffect } from "react";
import ProfileRow from "../components/ProfileRow";
import moment from "moment";
// import Email from "@assets/Email.png";
import Email from "../../assets/Email.png";
import call from "../../assets/call.png";
import sector from "../../assets/sector.png";
import join from "../../assets/join.png";
import cake from "../../assets/cake.png";
import room from "../../assets/room.png";
import stairs from "../../assets/stairs.png";
import division from "../../assets/division.png";

import dude from "../../assets/dude.png";
import { MainButton } from "../components";

function Profile({ navigation, route }) {
  const { userId } = route.params;
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    console.log("userinfo");
    // console.log(userId);
    axios
      .get(`${API_URL}/User/GetUser/${userId}`)
      .then(function (response) {
        console.log("ddd");
        // console.log(response);
        setUserInfo(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {});
  }, [userId]);

  return (
    <View style={styles.mainScreen}>
      <GoBackButton
        SubCategoryText=""
        onPress={() => navigation.navigate("Home")}
      />

      <View>
        <View style={styles.centerHeader}>
          <Image source={dude} style={styles.profileImage}></Image>
          <Text style={styles.FullName}>
            {userInfo?.firstName + " " + userInfo?.lastName}
          </Text>
          <Text style={styles.Division}>{userInfo?.division}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <ProfileRow ImageSrc={Email} TextValue={userInfo?.email} />
          <ProfileRow ImageSrc={call} TextValue={userInfo?.mobile} />
          <ProfileRow
            ImageSrc={cake}
            TextValue={moment(userInfo?.birthDate).format("DD MMMM YYYY")}
          />
          <ProfileRow ImageSrc={join} TextValue={userInfo?.joiningDate} />
          <ProfileRow ImageSrc={room} TextValue={userInfo?.unit} />
          <ProfileRow ImageSrc={stairs} TextValue={userInfo?.office} />
          <ProfileRow ImageSrc={division} TextValue={userInfo?.division} />
          <ProfileRow ImageSrc={sector} TextValue={userInfo?.sector} />
        </View>
        <View style={{ marginTop: 20 }}>
          <MainButton
            color="#070085"
            text="Edit Profile"
            height={43}
            fontSize={14}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Division: { fontSize: 12, fontFamily: "MontserratSemiBold" },
  FullName: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "MontserratBold",
  },
  centerHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainScreen: {
    margin: 20,
    marginTop: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageCenter: {
    alignSelf: "center",
  },
});
export default Profile;
