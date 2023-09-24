import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const CyberSecIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M1.687.13C1.148.238.54.692.272 1.184c-.286.53-.272.118-.272 7.95 0 5.124.014 7.229.052 7.407.117.543.51 1.101.984 1.383.53.314-.244.295 10.964.295s10.434.018 10.964-.296c.478-.285.872-.848.99-1.41.032-.165.041-2.565.037-7.505l-.014-7.266-.108-.267c-.24-.59-.76-1.092-1.34-1.289-.226-.08-.84-.084-10.435-.09C6.342.093 1.804.107 1.687.13Zm10.716 3.61a3.042 3.042 0 0 1 2.484 2.076c.108.328.127.482.15 1.162l.024.788h.38c.445 0 .623.084.75.342.07.155.075.431.065 3.145l-.014 2.981-.178.174-.173.178H8.11l-.174-.178-.178-.174-.014-2.98c-.01-2.715-.005-2.991.065-3.146.127-.258.305-.342.75-.342h.38l.023-.788c.024-.68.043-.834.15-1.162.394-1.22 1.496-2.049 2.827-2.124.056 0 .263.019.464.047Z"
    />
    <Path
      fill="url(#b)"
      d="M11.681 5a1.819 1.819 0 0 0-1.415 1.369 5.669 5.669 0 0 0-.047.797v.6h3.572l-.02-.718c-.023-.782-.07-.96-.35-1.364-.357-.506-1.13-.81-1.74-.684Z"
    />
    <Path fill="url(#c)" d="M9 11.188v2.156h6V9.03H9v2.156Z" />
    <Path
      fill="url(#d)"
      d="M9.525 20.75c-.45.272-.427.853.042 1.087.146.076.361.085 2.433.085s2.287-.01 2.433-.085c.469-.234.492-.815.042-1.087-.15-.09-.244-.094-2.475-.094s-2.325.005-2.475.094Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={34.084}
        x2={-1.523}
        y1={27.28}
        y2={-23.603}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.172} stopColor="#D9403D" />
        <Stop offset={0.256} stopColor="#BA385E" />
        <Stop offset={0.378} stopColor="#A23173" />
        <Stop offset={0.586} stopColor="#794FB0" />
        <Stop offset={0.722} stopColor="#2584C6" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={15.293}
        x2={9.74}
        y1={9.163}
        y2={1.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.172} stopColor="#D9403D" />
        <Stop offset={0.256} stopColor="#BA385E" />
        <Stop offset={0.378} stopColor="#A23173" />
        <Stop offset={0.586} stopColor="#794FB0" />
        <Stop offset={0.722} stopColor="#2584C6" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={17.524}
        x2={9.203}
        y1={15.5}
        y2={3.003}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.172} stopColor="#D9403D" />
        <Stop offset={0.256} stopColor="#BA385E" />
        <Stop offset={0.378} stopColor="#A23173" />
        <Stop offset={0.586} stopColor="#794FB0" />
        <Stop offset={0.722} stopColor="#2584C6" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={17.154}
        x2={16.091}
        y1={22.555}
        y2={17.484}
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
export default CyberSecIcon
