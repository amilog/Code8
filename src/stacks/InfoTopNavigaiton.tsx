import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LastHackathon from "../screens/LastHackathon";
import AdvanceCareer from "../screens/AdvanceCareer";

const Tab = createMaterialTopTabNavigator();

const InfoTopNavigation = () => {
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
        name="AdvanceCareer"
        component={AdvanceCareer}
        options={{
          title: "Karyeranı yüksəlt",
        }}
      />
      <Tab.Screen
        name="LastHackathon"
        component={LastHackathon}
        options={{
      title: "Öncəki hackathon",
        }}
      />
    </Tab.Navigator>
  );
};

export default InfoTopNavigation;
