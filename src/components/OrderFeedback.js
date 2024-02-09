import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import smilyface from "@assets/smilyface.png";
import straightFace from "@assets/straightFace.png";
import notHappyFace from "@assets/notHappyFace.png";
import baristaPerson from "@assets/baristaPerson.png";
import { useState } from "react";
import MainButton from "./MainButton";

function OrderFeedback() {
  const [feedback, setFeedback] = useState("");
  const [emotionInt, setEmotionInt] = useState(0);
  return (
    <View>
      <View>
        <Text style={styles.howExpe}>How was your experience? </Text>
        <View style={styles.emotionRow}>
          <Image source={baristaPerson} style={styles.m20}></Image>
          <View style={styles.m20}>
            <Text style={styles.barsitaText}>Barista</Text>
            <Text style={styles.barsitaNameText}>Abduallah</Text>
          </View>
        </View>
        <View style={styles.emotionRow}>
          <EmotionButton
            selectedIndex={emotionInt}
            setSelectedIndex={setEmotionInt}
            myIndex={0}
            emotion={smilyface}
          />

          <EmotionButton
            selectedIndex={emotionInt}
            setSelectedIndex={setEmotionInt}
            myIndex={1}
            emotion={straightFace}
          />

          <EmotionButton
            selectedIndex={emotionInt}
            setSelectedIndex={setEmotionInt}
            myIndex={2}
            emotion={notHappyFace}
          />
        </View>
        <View style={styles.m20}>
          <TextInput
            style={styles.feedbackArea}
            onChangeText={setFeedback}
            value={feedback}
            placeholder="Write Feedback"
          />
          <MainButton text="Submit" height={43} fontSize={14} />
          <TouchableOpacity>
            <Text style={styles.problemService}>
              Got a problem in your service?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function EmotionButton({ selectedIndex, setSelectedIndex, myIndex, emotion }) {
  return (
    <TouchableOpacity onPress={() => setSelectedIndex(myIndex)}>
      <Image
        source={emotion}
        style={[
          styles.emotionImage,
          { opacity: myIndex == selectedIndex ? 1 : 0.1 },
        ]}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  problemService: {
    textDecorationLine: "underline",
    alignSelf: "center",
    fontSize: 12,
    marginTop: 10,
  },
  feedbackArea: {
    height: 79,
    borderWidth: 1,
    padding: 10,
    borderColor: "#101010",
    borderRadius: 8,
    margin: 10,
  },
  m20: {
    margin: 20,
  },
  barsitaText: {
    fontSize: 12,
    fontFamily: "MontserratRegular",
  },
  barsitaNameText: {
    fontSize: 12,
    fontFamily: "MontserratSemiBold",
  },

  howExpe: {
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
    alignSelf: "center",
  },
  emotionRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  emotionImage: {
    marginLeft: 20,
    marginRight: 20,
  },
});
export default OrderFeedback;
