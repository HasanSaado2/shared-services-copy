import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import GoBackButton from "./GoBackButton";
import ItemList from "./ItemList";
import ContinueModal from "./ContinueModal";

function SubCategoryView({ selectedSubCategory, setViewState }) {
  const [parentId, setParentId] = useState();
  const [showContinue, setShowContinue] = useState(false);

  const [itemsInOrder, setItemsInOrder] = useState([]);

  useEffect(() => {
    if (itemsInOrder.length > 0) {
      setShowContinue(true);
    } else {
      setShowContinue(false);
    }
  }, [itemsInOrder]);

  useEffect(() => {
    setParentId(selectedSubCategory.categoryId);
  }, [selectedSubCategory]);

  return (
    <View style={styles.mainView}>
      <GoBackButton
        SubCategoryText={selectedSubCategory.categoryName}
        onPress={() => setViewState(0)}
      />
      {selectedSubCategory.categoryType == 0 && (
        <ItemList
          parentId={parentId}
          setParentId={setParentId}
          itemsInOrder={itemsInOrder}
          setItemsInOrder={setItemsInOrder}
        />
      )}

      <ContinueModal
        showContinue={showContinue}
        setShowContinue={setShowContinue}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    margin: 20,
  },
});

export default SubCategoryView;
