import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SvgRules = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.4}
      d="M14.62 8.57326C14.6067 8.69993 14.5867 8.81993 14.5533 8.93993C13.86 8.35326 12.96 7.99993 11.98 7.99993C9.77334 7.99993 7.98 9.79327 7.98 11.9999C7.98 12.9799 8.33334 13.8799 8.92 14.5733C8.8 14.6066 8.68 14.6266 8.55334 14.6399C7.98667 14.6933 7.40667 14.6666 6.80667 14.5666C4.06667 14.0999 1.86 11.8799 1.40667 9.13326C0.653337 4.5666 4.54667 0.673265 9.11334 1.4266C11.86 1.87993 14.08 4.0866 14.5467 6.8266C14.6467 7.4266 14.6733 8.0066 14.62 8.57326Z"
      fill="url(#paint0_linear_1995_1098)"
    />
    <Path
      d="M14.5533 8.94C14.46 9.26667 14.2867 9.56 14.04 9.80667L9.78668 14.06C9.54001 14.3067 9.24668 14.48 8.92001 14.5733C8.33334 13.88 7.98001 12.98 7.98001 12C7.98001 9.79333 9.77334 8 11.98 8C12.96 8 13.86 8.35333 14.5533 8.94Z"
      fill="url(#paint1_linear_1995_1098)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1995_1098"
        x1={20.2557}
        y1={-5.33428}
        x2={-7.54825}
        y2={24.6791}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.171543} stopColor="#FF3F3C" />
        <Stop offset={0.256275} stopColor="#FF4279" />
        <Stop offset={0.377517} stopColor="#DF3A9A" />
        <Stop offset={0.586152} stopColor="#8D44EB" />
        <Stop offset={0.722348} stopColor="#2B9FEF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1995_1098"
        x1={17.3183}
        y1={4.71333}
        x2={3.61174}
        y2={19.5091}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.171543} stopColor="#FF3F3C" />
        <Stop offset={0.256275} stopColor="#FF4279" />
        <Stop offset={0.377517} stopColor="#DF3A9A" />
        <Stop offset={0.586152} stopColor="#8D44EB" />
        <Stop offset={0.722348} stopColor="#2B9FEF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgRules;
