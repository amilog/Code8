import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Valuation from "../screens/Valuation";
import ValutionForm from "../screens/ValuationForm";

const ValutionStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen name="Valuation" component={Valuation} />
      <Stack.Screen name="ValuationForm" component={ValutionForm} />
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
