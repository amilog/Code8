import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Information from "../screens/Information";
import SvgHomeInactive from "../assets/icons/HomeInactive";
import { View, Text, StyleSheet, Platform } from "react-native";
import SvgInfoInactive from "../assets/icons/InfoInactive";
import SvgHomeActive from "../assets/icons/HomeActive";
import SvgInfoActive from "../assets/icons/InfoActive";
import HomeStack from "./HomeStack";
import Metrics from "../styling/Metrics";

const Tab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "#fff",
        borderTopWidth: 0,
        elevation: 0,
        height: Platform.OS === "ios" ? 100 : 80,
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              {focused ? (
                <View style={styles.zoomedTabItem}>
                  <SvgHomeActive />
                </View>
              ) : (
                <View style={styles.normalTabItem}>
                  <SvgHomeInactive />
                </View>
              )}
              <Text
                style={[
                  styles.labelText,
                  { color: focused ? "#54226C" : "#5E5E5E" },
                ]}
              >
                Əsas səhifə
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              {focused ? (
                <View style={styles.zoomedTabItem}>
                  <SvgInfoActive />
                </View>
              ) : (
                <View style={styles.normalTabItem}>
                  <SvgInfoInactive />
                </View>
              )}
              <Text
                style={[
                  styles.labelText,
                  { color: focused ? "#54226C" : "#5E5E5E" },
                ]}
              >
                Məlumatlar
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 0,
    elevation: 0,
    height: Platform.OS === "ios" ? 100 * Metrics.rem : 80 * Metrics.rem,
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  zoomedTabItem: {
    backgroundColor: "#F3D1FF",
    width: 64,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  normalTabItem: {
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5E5E5E",
    paddingTop: 5,
  },
});

export default Tab;
