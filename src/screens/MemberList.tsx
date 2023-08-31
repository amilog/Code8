import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";
import { StatusBar } from "react-native";

const MemberList = ({ navigation, route }: any) => {
  const { teamName } = route.params;
  return (
    <View style={styles.container}>
      <GradientHeader
        title={teamName}
        showArrow={true}
        navigation={navigation}
      />
    </View>
  );
};

export default MemberList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight! + 20,
  },
});
