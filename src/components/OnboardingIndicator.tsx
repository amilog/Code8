import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

const OnboardingIndicator = ({ currentIndex, totalScreens }: any) => {
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
