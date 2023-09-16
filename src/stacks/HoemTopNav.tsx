import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TeamList from "../screens/TeamList";
import Assignments from "../screens/Assignments";
import Agenda from "../screens/Agenda";
import Rules from "../screens/Rules";

const Tab = createMaterialTopTabNavigator();

const HomeTabNav = ({routeName}: {routeName:string}) => {
  return (
    <Tab.Navigator
      initialRouteName={routeName ? routeName : "Teams"}
      screenOptions={{
        swipeEnabled: false,
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
        name="Teams"
        component={TeamList}
        options={{
          title: "Komandalar",
        }}
      />
      <Tab.Screen
        name="Assignments"
        component={Assignments}
        options={{
          title: "Texniki tapşırıqlar",
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          title: "Agenda",
        }}
      />
      <Tab.Screen
        name="Rules"
        component={Rules}
        options={{
          title: "Qaydalar",
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNav;
