import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const CircleIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle
      cx={17}
      cy={17}
      r={0.65}
      fill="#DDD"
      stroke="#fff"
      strokeWidth={0.7}
    />
    <Circle cx={17} cy={17} r={5} fill="#fff" />
  </Svg>
);
export default CircleIcon;
