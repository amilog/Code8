import React from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import GradientHeader from "../components/GradientHeader";
import InfoTopNavigation from "../stacks/InfoTopNav";
import { useFocusEffect } from "@react-navigation/native";

const Information = ({ route, navigation }: any) => {
  const name = route?.params;

  return (
    <View style={styles.container}>
      <GradientHeader title={"Məlumatlar"} />
      <InfoTopNavigation navigation={navigation} routeName={name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
});

export default Information;
