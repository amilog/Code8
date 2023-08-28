import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientHeader = ({ title }:{title:string}) => {
  return (
    <LinearGradient
      colors={[
        "rgba(255, 63, 60, 1)",
        "rgba(255, 66, 121, 1)",
        "rgba(223, 58, 154, 1)",
        "rgba(141, 68, 235, 1)",
        "rgba(43, 159, 239, 1)",
      ]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.grediant}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </LinearGradient>
  );
};

export default GradientHeader;

const styles = StyleSheet.create({
  grediant: {
    height: 80,
    width: "100%",
  },
  buttonContainer: {
    flex: 1.0,
    backgroundColor: "#ffffff",
    width: "100%",
    marginBottom: 1,
    justifyContent: "flex-end",
  },
  buttonText: {
    color: "#000",
    marginLeft: 16,
    marginBottom: 12,
    fontSize: 28,
  },
});
