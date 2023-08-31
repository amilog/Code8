import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GradientHeader from "../components/GradientHeader";
import HorizontalTabBar from "../components/TopNavigation";

const ValutionForm = () => {
  const [focusedItem, setFocusedItem] = useState("Qiymetlendirme");

  const tabs = ["Qiymetlendirme", "Netice"];

  const renderScreen = () => {
    if (focusedItem === "Qiymetlendirme") {
      return null;
    } else {
      return null;
    }
  };
  return (
    <View style={styles.container}>
      <GradientHeader title="Qiymetlendirme" />
      <View style={styles.tabContainer}>
        <HorizontalTabBar
          tabs={tabs}
          focusedItem={focusedItem}
          setFocusedItem={setFocusedItem}
        />
      </View>
      {renderScreen()}
    </View>
  );
};

export default ValutionForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight! + 20,
  },
  tabContainer: {
    borderBottomWidth: 0.5,
    height: 70,
    borderBottomColor: "#F3D1FF",
  },
  tabList: {
    marginTop: 10,
  },
  tab: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "500",
  },
  focusedTabIcon: {
    position: "absolute",
    bottom: -9,
  },
});
