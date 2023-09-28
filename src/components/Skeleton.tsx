import React, { useEffect } from "react";
import { StyleSheet, View, Animated, Platform } from "react-native";

export default function Skeleton() {
  const circleAnimatedValue = new Animated.Value(0);

  const circleAnimated = () => {
    circleAnimatedValue.setValue(0);
    Animated.timing(circleAnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      requestAnimationFrame(circleAnimated);
    });
  };

  useEffect(() => {
    circleAnimated();
  }, []);

  const translateX = circleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 100],
  });

  const translateX2 = circleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 200],
  });

  return (
    <View
      style={[
        styles.teamCard,
        Platform.OS === "android" && styles.androidShadow,
        Platform.OS === "ios" && styles.iosShadow,
      ]}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 60,
          backgroundColor: "#ECEFF1",
          overflow: "hidden",
          marginRight: 16,
        }}
      >
        <Animated.View
          style={{
            width: "30%",
            opacity: 0.5,
            height: "100%",
            backgroundColor: "white",
            transform: [{ translateX: translateX }],
          }}
        ></Animated.View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          overflow: "hidden",
        }}
      >
        <Animated.View style={{ backgroundColor: "#ECEFF1", height: 20 }}>
          <Animated.View
            style={{
              width: "20%",
              height: "100%",
              backgroundColor: "white",
              opacity: 0.5,
              transform: [{ translateX: translateX2 }],
            }}
          ></Animated.View>
        </Animated.View>
        <View style={{ backgroundColor: "#ECEFF1", height: 20 }}>
          <Animated.View
            style={{
              width: "20%",
              height: "100%",
              backgroundColor: "white",
              opacity: 0.5,
              transform: [{ translateX: translateX2 }],
            }}
          ></Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECEFF1",
    paddingHorizontal: 16,
  },
  card: {
    padding: 16,
    borderRadius: 20,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
  },
  teamCard: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#C2C2C2",
    padding: 16,
    borderRadius: 16,
    width: "95%",
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  androidShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 15,
  },
  iosShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 15,
    },
  },
});
