import React from "react";
import { View, StyleSheet } from "react-native";

const OnboardingIndicator = ({ currentIndex, totalScreens }: any) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalScreens }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            {
              backgroundColor:
                currentIndex === index ? "#B464DB" : "#FBF0FF",
              borderRadius: 20,
              width: currentIndex === index ? 28 : 10,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  indicator: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default OnboardingIndicator;
