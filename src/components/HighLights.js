import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import API_URL from "../Constants";
import axios from "axios";

import highlight1 from "../../assets/highlight1.png";
import React, { useCallback, useState, useEffect } from "react";

function HighLights() {
  const [highLightData, setHighLights] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    console.log("hightlighs");
    axios
      .get(`${API_URL}/api/Highlight/GetAll`)
      .then(function (response) {
        console.log(response.data);
        setHighLights([]);
        setHighLights(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {});
  }, []);

  const HighLightView = highLightData.map((highlight, index) => {
    return (
      <HighLightComponent
        key={index}
        visibleIndex={visibleIndex}
        Title={highlight.title}
        Description={highlight.description}
        index={index}
      />
    );
  });

  const CarouselButtons = highLightData.map((highlight, index) => {
    return (
      <CarouselSelect
        key={index}
        selectedIndex={visibleIndex}
        myIndex={index}
        setSelectedIndex={setVisibleIndex}
      />
    );
  });

  return (
    <View>
      <View>{HighLightView}</View>
      <View style={styles.carouselButtonsWrap}>{CarouselButtons}</View>
    </View>
  );
}

function CarouselSelect({ selectedIndex, myIndex, setSelectedIndex }) {
  return (
    <TouchableOpacity
      onPress={() => setSelectedIndex(myIndex)}
      style={
        selectedIndex == myIndex ? styles.selectedBtn : styles.unSelectedBtn
      }
    ></TouchableOpacity>
  );
}

function HighLightComponent({ Title, Description, visibleIndex, index }) {
  return (
    visibleIndex == index && (
      <View style={styles.highlightScreen}>
        <Image style={styles.hightLightImage} source={highlight1}></Image>
        <View style={styles.m10}>
          <Text style={styles.highLightMainText}>{Title}</Text>
          <Text style={styles.subDescText}>{Description}</Text>
          <View>{/* <Text style={styles.readMore}>Read More</Text> */}</View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  carouselButtonsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  selectedBtn: {
    width: 25,
    height: 3,
    backgroundColor: "#070085",
    marginLeft: 5,
    marginRight: 5,
  },
  unSelectedBtn: {
    width: 25,
    height: 3,
    backgroundColor: "#11316180",
    marginLeft: 5,
    marginRight: 5,
  },
  readMore: {
    textDecorationLine: "underline",
    fontSize: 8,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  m10: {
    margin: 10,
  },
  subDescText: {
    fontSize: 12,
    fontFamily: "MontserratLight",
    maxWidth: "65%",
    marginTop: 10,
    marginBottom: 10,
  },

  highLightMainText: {
    fontSize: 14,
    fontFamily: "MontserratBold",
    maxWidth: "70%",
  },
  highlightScreen: {
    borderRadius: 15,
    backgroundColor: "#EAF3FF",
    margin: 20,
    display: "flex",
    flexDirection: "row",
  },
  hightLightImage: {
    borderRadius: 15,
  },
  main: {
    marginTop: 50,

    paddingBottom: 30,
  },
});

export default HighLights;
