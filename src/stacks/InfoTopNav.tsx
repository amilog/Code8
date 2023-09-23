import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LastHackathon from "../screens/LastHackathon";
import AdvanceCareer from "../screens/AdvanceCareer";
import About from "../screens/About";
import { useFocusEffect } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const InfoTopNavigation = ({ navigation, routeName }: any) => {
  useFocusEffect(
    React.useCallback(() => {
      if (routeName?.routeName == "About") {
        navigation.navigate("About");
      } else if (routeName?.routeName == "LastHackathon") {
        navigation.navigate("LastHackathon");
      } else {
        navigation.navigate("AdvanceCareer");
      }

      return () => {
        routeName = "AdvanceCareer";
      };
    }, [navigation, routeName])
  );

  return (
    <Tab.Navigator
      initialRouteName={routeName || "AdvanceCareer"}
      screenOptions={{
        swipeEnabled: false,
        animationEnabled: true,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingTop: 10,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#F3D1FF",
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
        tabBarScrollEnabled: true,
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
      <Tab.Screen
        name="About"
        component={About}
        options={{
          title: "Haqqımızda",
        }}
      />
    </Tab.Navigator>
  );
};

export default InfoTopNavigation;
