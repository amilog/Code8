import * as React from "react"
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg"
const BackButton = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m32 38-8-8 8-8"
    />
    <Rect
      width={59}
      height={59}
      x={59.5}
      y={59.5}
      stroke="url(#b)"
      rx={29.5}
      transform="rotate(180 59.5 59.5)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={35.365}
        x2={7.394}
        y1={46}
        y2={30.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.172} stopColor="#FF3F3C" />
        <Stop offset={0.256} stopColor="#FF4279" />
        <Stop offset={0.378} stopColor="#DF3A9A" />
        <Stop offset={0.586} stopColor="#8D44EB" />
        <Stop offset={0.722} stopColor="#2B9FEF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={145.238}
        x2={20.127}
        y1={30}
        y2={165.052}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.172} stopColor="#FF3F3C" />
        <Stop offset={0.256} stopColor="#FF4279" />
        <Stop offset={0.378} stopColor="#DF3A9A" />
        <Stop offset={0.586} stopColor="#8D44EB" />
        <Stop offset={0.722} stopColor="#2B9FEF" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default BackButton
