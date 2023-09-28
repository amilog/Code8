import { StatusBar } from "expo-status-bar";
import Tab from "./src/stacks/Tab";
import { NavigationContainer } from "@react-navigation/native";
import Animation from "./src/screens/Animation";
import Onboarding from "./src/screens/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import "react-native-gesture-handler";
import ValutionStack from "./src/stacks/ValuationStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DataScience from "./src/screens/task/DataScience";
import UiUx from "./src/screens/task/UiUx";
import Frontend from "./src/screens/task/Frontend";
import Backend from "./src/screens/task/Backend";
import Mobile from "./src/screens/task/Mobile";
import CyberSec from "./src/screens/task/CyberSec";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
            <Stack.Screen
              name="UiUx"
              component={UiUx}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Frontend"
              component={Frontend}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Backend"
              component={Backend}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Mobile"
              component={Mobile}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="DataScience"
              component={DataScience}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="CyberSec"
              component={CyberSec}
              options={{
                animation: "slide_from_right",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
