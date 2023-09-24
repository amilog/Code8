import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const CircleArrow = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      opacity={0.4}
    />
    <Path
      fill="url(#b)"
      d="M10.74 16.28c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3-3-3-3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={30.413}
        x2={-11.291}
        y1={-8}
        y2={37.017}
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
        x1={17.131}
        x2={0.947}
        y1={3.444}
        y2={13.703}
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
export default CircleArrow
