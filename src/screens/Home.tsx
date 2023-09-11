import { StyleSheet, View, Platform } from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";
import { StatusBar } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <GradientHeader
        title={"CODE8"}
        navigation={navigation}
        showValution={true}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
});
