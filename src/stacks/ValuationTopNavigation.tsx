import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LastHackathon from "../screens/LastHackathon";
import AdvanceCareer from "../screens/AdvanceCareer";
import Sample from "../screens/Sample";

const Tab = createMaterialTopTabNavigator();

const ValuationTopNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingTop: 10,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#863BAC",
          height: 3,
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
        },
        tabBarActiveTintColor: "#863BAC",
        tabBarInactiveTintColor: "#000",
        tabBarPressColor: "#F3D1FF",
        tabBarLabelStyle: {
          textTransform: "none",
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Sample"
        component={Sample}
        options={{
          title: "Karyeranı yüksəlt",
        }}
      />
      <Tab.Screen
        name="Sample2"
        component={Sample}
        options={{
      title: "Öncəki hackathon",
        }}
      />
    </Tab.Navigator>
  );
};

export default ValuationTopNavigation;
