import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgPlayButton(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={24} fill="#FBF0FF" />
      <Path
        opacity={0.4}
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"
        fill="url(#paint0_linear_956_1145)"
      />
      <Path
        d="M18.2 24v-2.96c0-3.82 2.7-5.36 6-3.46l2.56 1.48 2.56 1.48c3.3 1.9 3.3 5.02 0 6.92l-2.56 1.48-2.56 1.48c-3.3 1.9-6 .34-6-3.46V24z"
        fill="url(#paint1_linear_956_1145)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_956_1145"
          x1={60.8254}
          y1={-16}
          x2={-22.5818}
          y2={74.0349}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.171543} stopColor="#FF3F3C" />
          <Stop offset={0.256275} stopColor="#FF4279" />
          <Stop offset={0.377517} stopColor="#DF3A9A" />
          <Stop offset={0.586152} stopColor="#8D44EB" />
          <Stop offset={0.722348} stopColor="#2B9FEF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_956_1145"
          x1={37.5135}
          y1={9.53501}
          x2={7.27015}
          y2={40.2219}
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
  )
}

export default SvgPlayButton
