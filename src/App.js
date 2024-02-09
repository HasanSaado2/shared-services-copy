import { registerRootComponent } from "expo";
import Navigator from "../src/navigation";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LogBox } from "react-native";
const queryClient = new QueryClient();

function App() {
  // LogBox.ignoreLogs(["Warning: ..."]);
  // LogBox.ignoreLogs(["Warning: ..."]);
  const [isLoaded] = useFonts({
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratBlack: require("../assets/fonts/Montserrat-Black.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!isLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
}

export default registerRootComponent(App);
