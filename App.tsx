import { StatusBar } from "expo-status-bar";
import Tab from "./src/stacks/Tab";
import { NavigationContainer } from "@react-navigation/native";
import Animation from "./src/screens/Animation";
import Onboarding from "./src/screens/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ValutionStack from "./src/stacks/ValuationStack";

const App = () => {
  const Stack = createNativeStackNavigator();
  // AsyncStorage.clear();s
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar translucent style="dark" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        >
          <Stack.Screen name="Animation" component={Animation} />
          <Stack.Screen name="OnBoarding" component={Onboarding} />
          <Stack.Screen name="Tabs" component={Tab} />
          <Stack.Screen
            name="ValuationStack"
            component={ValutionStack}
            options={{
              animation: "slide_from_right",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
