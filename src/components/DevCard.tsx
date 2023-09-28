import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Svg, { G, Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import { MemberType } from "../data/About";
import Metrics from "../styling/Metrics";

const width = Dimensions.get("window").width;

const DevCard = ({ item }: { item: MemberType }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Svg width={"100%"} height={80} fill="none">
      <G filter="url(#filter0_dd_1791_2298)">
        <Rect
          width={"100%"}
          height={80}
          rx={16}
          fill="url(#paint0_linear_1791_2298)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1791_2298"
          x1={481.968}
          y1={-11}
          x2={410.037}
          y2={307.352}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.171543} stopColor="#FF3F3C" />
          <Stop offset={0.256275} stopColor="#FF4279" />
          <Stop offset={0.377517} stopColor="#DF3A9A" />
          <Stop offset={0.586152} stopColor="#8D44EB" />
          <Stop offset={0.722348} stopColor="#2B9FEF" />
        </LinearGradient>
        <View style={styles.itemContainer}>
          <View>
            <Image
              source={{ uri: item.image }}
              onLoad={() => setLoading(false)}
              style={[
                styles.image,
                { width: 50, height: 50, borderWidth: 1, borderColor: "#fff" },
              ]}
            />
            <Image
              source={require("../assets/images/noProfile.jpeg")}
              style={{
                opacity: loading ? 1 : 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: 49,
                height: 49,
                borderRadius: 100,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.nameText, { color: "#fff" }]}>
              {item.name}
            </Text>
            <Text style={[styles.positionText, { color: "#dddddd" }]}>
              {item.position}
            </Text>
          </View>
        </View>
      </Defs>
    </Svg>
  );
};

export default DevCard;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 25,
  },
  textContainer: {
    gap: 4,
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: "#000",
  },
  positionText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontWeight: "400",
    color: "#868686",
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
