import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgFocusedTab(props) {
  return (
    <Svg
      width={84}
      height={3}
      viewBox="0 0 84 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M.5 3a3 3 0 013-3h77a3 3 0 013 3H.5z" fill="#863BAC" />
    </Svg>
  )
}

export default SvgFocusedTab
