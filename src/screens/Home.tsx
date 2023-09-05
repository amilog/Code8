import { Dimensions, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import GradientHeader from "../components/GradientHeader";
import { StatusBar } from "react-native";
import TeamList from "./TeamList";
import HorizontalTabBar from "../components/TopNavigation";

const Home = ({ navigation }: any) => {
  const Tabs = ["Komandalar", "Texniki Tapsiriqlar", "Haqqinda"];

  const [focusedItem, setFocusedItem] = useState("Komandalar");

  const renderScreen = () => {
    if (focusedItem === "Komandalar") {
      return <TeamList navigation={navigation} />;
    } else if (focusedItem === "Texniki Tapsiriqlar") {
      return null;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <GradientHeader
        showArrow={false}
        title={"Layihe"}
        navigation={navigation}
      />
      <View style={styles.tabContainer}>
        <HorizontalTabBar
          tabs={Tabs}
          focusedItem={focusedItem}
          setFocusedItem={setFocusedItem}
        />
      </View>
      {renderScreen()}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight! + 20,
  },
  teamCard: {
    width: "95%",
    height: Dimensions.get("window").height / 7,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    padding: 16,
  },

  teamName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  memberName: {
    fontSize: 16,
    color: "#868686",
  },
  teamPic: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    borderRadius: 38,
  },
  teamLabel: {
    height: 69,
    marginLeft: 16,
    gap: 6,
  },
  contentContainerStyle: {
    paddingBottom: 20,
    paddingTop: 20,
    flexGrow: 1,
  },
  memberLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabContainer: {
    borderBottomWidth: 0.5,
    height: 70,
    borderBottomColor: "#F3D1FF",
  },
});
