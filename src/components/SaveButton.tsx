import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const width = Dimensions.get("window").width * 0.75;
const SvgSaveButton = () => (
  <Svg width={width} height={40} viewBox={`0 0 ${width} 40`} fill="none">
    <Rect
      width={width}
      height={40}
      rx={20}
      fill="url(#paint0_linear_1548_3074)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1548_3074"
        x1={465.968}
        y1={-20}
        x2={447.306}
        y2={145.194}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.171543} stopColor="#FF3F3C" />
        <Stop offset={0.256275} stopColor="#FF4279" />
        <Stop offset={0.377517} stopColor="#DF3A9A" />
        <Stop offset={0.586152} stopColor="#8D44EB" />
        <Stop offset={0.722348} stopColor="#2B9FEF" />
      </LinearGradient>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 24,
            letterSpacing: 0.15,
          }}
        >
          Yadda Saxla
        </Text>
      </View>
    </Defs>
  </Svg>
);
export default SvgSaveButton;
