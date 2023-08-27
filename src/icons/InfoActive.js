import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgInfoActive(props) {
  return (
    <Svg
      width={35}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.4}
        d="M11.083 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46h-1.75c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.4 0 .96-.21 1.26-.46l1.59-1.36z"
        fill="#54226C"
      />
      <Path
        d="M12.333 16.87c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1zM12.333 13.72c-.41 0-.75-.34-.75-.75V8.13c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 .42-.33.76-.75.76z"
        fill="#54226C"
      />
    </Svg>
  )
}

export default SvgInfoActive
