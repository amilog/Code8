import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoCard = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M11 17h2v-6h-2v6Zm1-8a.968.968 0 0 0 .713-.288A.964.964 0 0 0 13 8a.968.968 0 0 0-.288-.713A.964.964 0 0 0 12 7a.968.968 0 0 0-.713.288A.964.964 0 0 0 11 8c0 .283.096.521.288.713.192.192.43.288.712.287Zm0 13a9.733 9.733 0 0 1-3.9-.788 10.114 10.114 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.755 9.755 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.114 10.114 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.755 9.755 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.114 10.114 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.138 3.175A9.72 9.72 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.114 10.114 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.138A9.72 9.72 0 0 1 12 22Z"
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
        <Stop offset={0.172} stopColor="#D9403D" />
        <Stop offset={0.256} stopColor="#BA385E" />
        <Stop offset={0.378} stopColor="#A23173" />
        <Stop offset={0.586} stopColor="#794FB0" />
        <Stop offset={0.722} stopColor="#2584C6" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default InfoCard
