import { StyleSheet, Text, View } from "react-native";
import React from "react";
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

const styles = StyleSheet.create({});
