import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowRightIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" 
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none" {...props}>
    <Path
      fill="#fff"
      d="M6 9.33v5.34c0 3.32 2.35 4.67 5.22 3.02l1.28-.74c.31-.18.5-.51.5-.87V7.92c0-.36-.19-.69-.5-.87l-1.28-.74C8.35 4.66 6 6.01 6 9.33Z"
    />
    <Path
      fill="#fff"
      d="M14 8.79v6.43c0 .39.42.63.75.43l1.1-.64c2.87-1.65 2.87-4.37 0-6.02l-1.1-.64a.503.503 0 0 0-.75.44Z"
      opacity={0.4}
    />
  </Svg>
)
export default ArrowRightIcon
