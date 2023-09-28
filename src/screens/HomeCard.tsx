import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";
import HomeTabNav from "../stacks/HomeTabNav";

const HomeCard = ({ navigation,route }: any) => {
  const {routeName} = route.params;
  return (
    <View style={styles.container}>
      <GradientHeader
        title={"Code8"}
        navigation={navigation}
        showValution={true}
        showArrow={true}
      />
      <HomeTabNav routeName={routeName} />
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
});
