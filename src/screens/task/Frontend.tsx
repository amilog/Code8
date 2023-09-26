import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import GradientHeader from "../../components/GradientHeader";

const Frontend = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <GradientHeader title="Front-End" showArrow navigation={navigation} />
    </View>
  );
};

export default Frontend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
});
