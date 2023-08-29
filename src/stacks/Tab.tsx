import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Valuation from "../screens/Valuation";
import Information from "../screens/Information";
import SvgHomeInactive from "../assets/icons/HomeInactive";
import { View, Text, StyleSheet } from "react-native";
import SvgValutionInactive from "../assets/icons/ValutionInactive";
import SvgInfoInactive from "../assets/icons/InfoInactive";
import SvgHomeActive from "../assets/icons/HomeActive";
import SvgValutionActive from "../assets/icons/ValutionActive";
import SvgInfoActive from "../assets/icons/InfoActive";

const Tab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              {focused ? (
                <View
                  style={styles.zoomedTabItem}
                >
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
                Lahiye
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Valuation"
        component={Valuation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              {focused ? (
                <View
                  style={styles.zoomedTabItem}
                >
                  <SvgValutionActive />
                </View>
              ) : (
                <View style={styles.normalTabItem}>
                  <SvgValutionInactive />
                </View>
              )}
              <Text
                style={[
                  styles.labelText,
                  { color: focused ? "#54226C" : "#5E5E5E" },
                ]}
              >
                Qiymetlendirme
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
                <View
                  style={styles.zoomedTabItem}
                >
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
                Melumat
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
    height: 80,
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
