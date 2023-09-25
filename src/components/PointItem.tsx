import React from "react";
import { Platform, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";

const PointItem = ({
  index,
  isSelect = false,
}: {
  index: string;
  isSelect?: boolean;
}) => {
  let size = Platform.OS === "ios" ? 32 : 28;
  const renderSelected = () => (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Rect
        x={0.5}
        y={0.5}
        width={size - 1}
        height={size - 1}
        rx={15.5}
        fill="url(#paint0_linear)"
      />
      <Rect
        x={0.5}
        y={0.5}
        width={size - 1}
        height={size - 1}
        rx={15.5}
        stroke="url(#paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={45.4603}
          y1={-16}
          x2={-21.2654}
          y2={56.0279}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.171543} stopColor="#FF3F3C" />
          <Stop offset={0.256275} stopColor="#FF4279" />
          <Stop offset={0.377517} stopColor="#DF3A9A" />
          <Stop offset={0.586152} stopColor="#8D44EB" />
          <Stop offset={0.722348} stopColor="#2B9FEF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={45.4603}
          y1={-16}
          x2={-21.2654}
          y2={56.0279}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.171543} stopColor="#FF3F3C" />
          <Stop offset={0.256275} stopColor="#FF4279" />
          <Stop offset={0.377517} stopColor="#DF3A9A" />
          <Stop offset={0.586152} stopColor="#8D44EB" />
          <Stop offset={0.722348} stopColor="#2B9FEF" />
        </LinearGradient>
        <View style={styles.textContainer}>
          <Text
            style={[styles.text, { color: isSelect ? "#F3F3F3" : "#4B4B4B" }]}
          >
            {index}
          </Text>
        </View>
      </Defs>
    </Svg>
  );

  const renderUnselected = () => (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Rect
        x={0.5}
        y={0.5}
        width={size - 1}
        height={size - 1}
        rx={15.5}
        fill="#FBF0FF"
      />
      <Rect
        x={0.5}
        y={0.5}
        width={size - 1}
        height={size - 1}
        rx={15.5}
        stroke="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={45.4603}
          y1={-16}
          x2={-21.2654}
          y2={56.0279}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.171543} stopColor="#FF3F3C" />
          <Stop offset={0.256275} stopColor="#FF4279" />
          <Stop offset={0.377517} stopColor="#DF3A9A" />
          <Stop offset={0.586152} stopColor="#8D44EB" />
          <Stop offset={0.722348} stopColor="#2B9FEF" />
        </LinearGradient>
      </Defs>
      <View style={styles.textContainer}>
        <Text
          style={[styles.text, { color: isSelect ? "#F3F3F3" : "#4B4B4B" }]}
        >
          {index}
        </Text>
      </View>
    </Svg>
  );

  return isSelect ? renderSelected() : renderUnselected();
};
export default PointItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
