import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTopTriangle = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M17 14L12 9L7 14L17 14Z" fill="black" />
  </Svg>
);
export default SvgTopTriangle;
