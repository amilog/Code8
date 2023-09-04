import { StatusBar } from "expo-status-bar";
import Tab from "./src/stacks/Tab";
import { NavigationContainer } from "@react-navigation/native";
import Animation from "./src/screens/Animation";
import Onboarding from "./src/screens/Onboarding";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" translucent />
      {/* <Tab /> */}
      <Animation/>
    </NavigationContainer>
  );
}
