import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Rect, LinearGradient, Stop } from "react-native-svg";

const TimeContainer = ({ time }: { time: string }) => {
  return (
    <Svg width={86} height={64} viewBox="0 0 86 64" fill="none">
      <Rect width={86} height={64} rx={8} fill="url(#paint0_linear_2007_760)" />
      <LinearGradient
        id="paint0_linear_2007_760"
        x1={122.175}
        y1={-32}
        x2={-2.91514}
        y2={149.446}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.171543} stopColor="#FF3F3C" />
        <Stop offset={0.256275} stopColor="#FF4279" />
        <Stop offset={0.377517} stopColor="#DF3A9A" />
        <Stop offset={0.586152} stopColor="#8D44EB" />
        <Stop offset={0.722348} stopColor="#2B9FEF" />
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </LinearGradient>
    </Svg>
  );
};

export default TimeContainer;

const styles = StyleSheet.create({
  timeText: {
    color: "#F3F3F3",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
  },
});
