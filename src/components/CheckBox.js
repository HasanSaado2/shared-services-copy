import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";

import Checked_CheckBox from "../../assets/Checked_CheckBox.png";
import UnChecked_CheckBox from "../../assets/UnChecked_CheckBox.png";

function CheckBox({ SR_Id, SR_Text, setSelectedSR_List, selectedSR_List }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    var srLisk =
      selectedSR_List && selectedSR_List?.filter((c) => c.SR_Id != SR_Id);
    if (isChecked) {
      var newSR = {
        SR_Id: SR_Id,
        SR_Text: SR_Text,
      };
      srLisk && srLisk.push(newSR);
      setSelectedSR_List(srLisk);
    }
  }, [isChecked]);
  return (
    <View>
      <Pressable onPress={() => setIsChecked(!isChecked)}>
        <Image
          source={isChecked ? Checked_CheckBox : UnChecked_CheckBox}
        ></Image>
      </Pressable>
    </View>
  );
}

export default CheckBox;
