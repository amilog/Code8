import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MemberList from "../screens/MemberList";
import HomeCard from "../screens/HomeCard";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeCard" component={HomeCard} />
      <Stack.Screen name="MemberList" component={MemberList} options={{
        animation: "slide_from_right",
      }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
