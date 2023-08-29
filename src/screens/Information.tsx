import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from "react-native";
import GradientHeader from "../components/GradientHeader";
import SvgFocusedTab from "../assets/icons/FocusedNavigation";
import LastHackathon from "./LastHackathon";
import AdvanceCareer from "./AdvanceCareer";

const Information = () => {
  const [focusedItem, setFocusedItem] = useState("Son hackathon");

  const tabs = ["Son hackathon", "Kariyerini yükselt"];

  const isTabFocused = (tab: string) => focusedItem === tab;

  return (
    <View style={styles.container}>
      <GradientHeader title={"Məlumat"} />
      <View style={styles.tabContainer}>
        <FlatList
          style={styles.tabList}
          horizontal
          data={tabs}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setFocusedItem(item)}
              style={[
                styles.tab,
                {
                  width: Dimensions.get("window").width / tabs.length,
                },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color: isTabFocused(item) ? "#6750A4" : "#49454F",
                  },
                ]}
              >
                {item}
              </Text>
              {isTabFocused(item) && (
                <View style={styles.focusedTabIcon}>
                  <SvgFocusedTab />
                </View>
              )}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      {focusedItem === "Son hackathon" ? <LastHackathon /> : <AdvanceCareer />}
    </View>
  );
};

export default Information;

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
    bottom: -10,
  },
});
