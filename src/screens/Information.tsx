import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";

const Information = () => {
  return (
    <View style={styles.container}>
      <GradientHeader title={"Melumat"} />
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
});
