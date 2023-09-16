import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import SkipButton from "../assets/icons/onboardingSvgs/SkipButton";

const OnboardingIndicator = ({ currentIndex, totalScreens, press }: any) => {
  const indicatorWidth = 0;
  const animatedValue = useRef(new Animated.Value(currentIndex)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: currentIndex,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {Array.from({ length: totalScreens }).map((_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.indicator,
            {
              backgroundColor: currentIndex === index ? "#B464DB" : "#FBF0FF",
              borderRadius: 20,
              width: currentIndex === index ? 28 : 10,
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [indicatorWidth, 2, -indicatorWidth],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
      <View style={styles.view} />
      <TouchableOpacity
        style={{ opacity: currentIndex === 1 ? 1 : 0 }}
        disabled={currentIndex !== 1}
        onPress={press}
      >
        <SkipButton style={styles.skipButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    alignSelf: "flex-end",
  },
  indicator: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  skipButton: {
    width: 45,
    height: 24,
  },
  view: {
    width: "30%",
  },
});

export default OnboardingIndicator;
