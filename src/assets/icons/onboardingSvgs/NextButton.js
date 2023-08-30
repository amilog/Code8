import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from "react-native-svg"
const NextButton = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path fill="url(#b)" d="M61.48 60H.008V0H61.48v60Z" />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="m27 22 8 8-8 8"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={87.338}
        x2={-37.505}
        y1={-30}
        y2={108.071}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.172} stopColor="#FF3F3C" />
        <Stop offset={0.256} stopColor="#FF4279" />
        <Stop offset={0.378} stopColor="#DF3A9A" />
        <Stop offset={0.586} stopColor="#8D44EB" />
        <Stop offset={0.722} stopColor="#2B9FEF" />
      </LinearGradient>
      <ClipPath id="a">
        <Rect width={60} height={60} fill="#fff" rx={30} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default NextButton
