import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tab from "./src/stacks/Tab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" translucent />
      <Tab />
    </NavigationContainer>
  );
}

