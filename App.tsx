import { StatusBar } from "expo-status-bar";
import Tab from "./src/stacks/Tab";
import { NavigationContainer } from "@react-navigation/native";
import Animation from "./src/screens/Animation";
import Onboarding from "./src/screens/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" translucent />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Animation" component={Animation} />

        <Stack.Screen name="OnBoarding" component={Onboarding} />
        <Stack.Screen name="Tabs" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
