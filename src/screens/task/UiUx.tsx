import { StyleSheet, View, Platform, StatusBar } from "react-native";
import React from "react";
import GradientHeader from "../../components/GradientHeader";

const UiUx = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <GradientHeader title="UX/UI" showArrow navigation={navigation} />
    </View>
  );
};

export default UiUx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
});
