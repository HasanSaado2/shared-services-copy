import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import {
  Title,
  Greeting,
  Question,
  CarouselCards,
  IconButton,
  CategoryMenuButton,
  SquareMenuButton,
  CustomFormInput,
} from "@components";

import HeaderTop from "../components/HeaderTop";
import CategoryChoice from "../components/CategoryChoice";
import CategoryItemList from "../components/CategoryItemList";
import SubCategoryView from "../components/SubCategoryView";

const pixelDensity = PixelRatio.get();

function Home({ navigation, route }) {
  const [viewState, setViewState] = useState(0);

  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedSubCategory, setSelectedSubCategory] = useState();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <HeaderTop navigation={navigation} />
        {viewState == 0 && (
          <>
            <CategoryChoice
              selectedCategoryId={selectedCategoryId}
              setSelectedCategoryId={setSelectedCategoryId}
            />
            <CategoryItemList
              selectedCategoryId={selectedCategoryId}
              setSelectedSubCategory={setSelectedSubCategory}
              setViewState={setViewState}
            />
          </>
        )}
        {viewState == 1 && (
          <SubCategoryView
            selectedSubCategory={selectedSubCategory}
            setViewState={setViewState}
          />
        )}

        <CarouselCards />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
  },
  main: {
    marginTop: 50,

    paddingBottom: 30,
  },
});

export default Home;
