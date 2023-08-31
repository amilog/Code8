import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MemberList from "../screens/MemberList";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MemberList" component={MemberList} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
