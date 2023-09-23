import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTriangle = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M7 10L12 15L17 10H7Z" fill="black" />
  </Svg>
);
export default SvgTriangle;
