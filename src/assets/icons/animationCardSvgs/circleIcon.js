import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const CircleIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={8} cy={8} r={8} fill="#fff" />
  </Svg>
)
export default CircleIcon

