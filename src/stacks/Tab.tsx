import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Valuation from "../screens/Valuation";
import Information from "../screens/Information";
import SvgHomeInactive from "../icons/HomeInactive";
import { View, Text, StyleSheet } from "react-native";
import SvgValutionInactive from "../icons/ValutionInactive";
import SvgInfoInactive from "../icons/InfoInactive";
import * as Animatable from "react-native-animatable";
import SvgHomeActive from "../icons/HomeActive";
import SvgValutionActive from "../icons/ValutionActive";
import SvgInfoActive from "../icons/InfoActive";

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
              {focused ? <SvgHomeActive /> : <SvgHomeInactive />}
              <Text
                style={[
                  styles.labelText,
                  { color: focused ? "#54226C" : "#5E5E5E" },
                ]}
              >
                Layihe
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
              {focused ? <SvgValutionActive /> : <SvgValutionInactive />}
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
                <Animatable.View
                  animation={"zoomIn"}
                  duration={5000}
                  style={styles.zoomedTabItem}
                >
                  <SvgInfoActive />
                </Animatable.View>
              ) : (
                <View style={styles.normalTabItem}>
                  <SvgInfoInactive />
                </View>
              )}
              <Animatable.Text
                animation={"fadeIn"}
                style={[
                  styles.labelText,
                  { color: focused ? "#54226C" : "#5E5E5E" },
                ]}
              >
                Melumat
              </Animatable.Text>
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
