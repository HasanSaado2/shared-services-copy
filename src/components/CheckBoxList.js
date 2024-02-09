import CheckBox from "./CheckBox";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

function CheckBoxList({ CheckBoxList, selectedSR_List, setSelectedSR_List }) {
  const checkBoxList = CheckBoxList.map((list) => {
    return (
      <View style={styles.horizontalAlign}>
        <Text style={styles.CheckBoxText}>{list.CheckText}</Text>
        <CheckBox
          SR_Id={list.CheckId}
          setSelectedSR_List={setSelectedSR_List}
          selectedSR_List={selectedSR_List}
          SR_Text={list.CheckText}
        />
      </View>
    );
  });
  return <View>{checkBoxList}</View>;
}
const styles = StyleSheet.create({
  horizontalAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 490,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#8C8C8C",
    margin: 10,
  },
  CheckBoxText: {
    fontWeight: 600,
    fontSize: 14,
  },
});
export default CheckBoxList;
