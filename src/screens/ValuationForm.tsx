import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";

const ValutionForm = () => {
  return (
    <View style={styles.container}>
      <GradientHeader title="Qiymetlendirme" />
    </View>
  );
};

export default ValutionForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
});
