import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Valuation from "../screens/Valuation";
import Result from "../screens/Result";
import CoachValuation from "../screens/CoachValuation";
import JuryValuation from "../screens/JuryValuation";

const ValutionStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="Valuation" component={Valuation} />
      <Stack.Screen name="JuryValuation" component={JuryValuation} />
      <Stack.Screen name="CoachValuation" component={CoachValuation} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

export default ValutionStack;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 0,
    elevation: 0,
    height: Platform.OS === "ios" ? 100 : 80,
  },
});
