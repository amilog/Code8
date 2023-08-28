import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";

const Valuation = () => {
  return (
    <View style={styles.container}>
      <GradientHeader title={"Qiymetlendirme"} />
    </View>
  );
};

export default Valuation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight! + 20,
  },
});
