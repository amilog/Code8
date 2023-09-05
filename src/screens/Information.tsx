import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import GradientHeader from "../components/GradientHeader";
import LastHackathon from "./LastHackathon";
import AdvanceCareer from "./AdvanceCareer";
import HorizontalTabBar from "../components/TopNavigation";

const Information = () => {
  const [focusedItem, setFocusedItem] = useState("Son hackathon");

  const tabs = ["Son hackathon", "Karyerani yukselt"];

  const renderScreen = () => {
    if (focusedItem === "Son hackathon") {
      return <LastHackathon />;
    } else {
      return <AdvanceCareer />;
    }
  };

  return (
    <View style={styles.container}>
      <GradientHeader title={"Məlumat"} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight! + 20,
  },
  tabContainer: {
    borderBottomWidth: 0.5,
    height: 70,
    borderBottomColor: "#F3D1FF",
  },
});

export default Information;
