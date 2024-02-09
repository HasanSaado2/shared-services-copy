import Lottie from "lottie-react-native";
import loading from "@assets/97102-loading.json";

function LoadingLottie({ showLoading }) {
  return (
    showLoading && (
      <Lottie source={loading} autoPlay loop style={{ marginTop: 200 }} />
    )
  );
}

export default LoadingLottie;
