import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from "react-native-svg";
const SvgArrow = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1995_534)">
      <Path
        opacity={0.4}
        d="M16.19 22L7.81 22C4.17 22 2 19.83 2 16.19L2 7.82C2 4.17 4.17 2 7.81 2L16.18 2C19.82 2 21.99 4.17 21.99 7.81L21.99 16.19C22 19.83 19.83 22 16.19 22Z"
        fill="url(#paint0_linear_1995_534)"
      />
      <Path
        d="M18.53 12.5301L14.24 16.8201C13.95 17.1101 13.47 17.1101 13.18 16.8201C12.89 16.5301 12.89 16.0501 13.18 15.7601L16.19 12.7501L6 12.7501C5.59 12.7501 5.25 12.4101 5.25 12.0001C5.25 11.5901 5.59 11.2501 6 11.2501L16.19 11.2501L13.18 8.2401C12.89 7.9501 12.89 7.4701 13.18 7.1801C13.33 7.0301 13.52 6.9601 13.71 6.9601C13.9 6.9601 14.09 7.0301 14.24 7.1801L18.53 11.4701C18.67 11.6101 18.75 11.8001 18.75 12.0001C18.75 12.2001 18.67 12.3901 18.53 12.5301Z"
        fill="url(#paint1_linear_1995_534)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1995_534"
        x1={-7.99502}
        y1={-6.4127}
        x2={37.0207}
        y2={35.2685}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.171543} stopColor="#FF3F3C" />
        <Stop offset={0.256275} stopColor="#FF4279" />
        <Stop offset={0.377517} stopColor="#DF3A9A" />
        <Stop offset={0.586152} stopColor="#8D44EB" />
        <Stop offset={0.722348} stopColor="#2B9FEF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1995_534"
        x1={-1.5}
        y1={2.72115}
        x2={20.7293}
        y2={30.3078}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.171543} stopColor="#FF3F3C" />
        <Stop offset={0.256275} stopColor="#FF4279" />
        <Stop offset={0.377517} stopColor="#DF3A9A" />
        <Stop offset={0.586152} stopColor="#8D44EB" />
        <Stop offset={0.722348} stopColor="#2B9FEF" />
      </LinearGradient>
      <ClipPath id="clip0_1995_534">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0 24) rotate(-90)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgArrow;
