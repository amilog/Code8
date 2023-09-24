import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const MobileIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M2.312.34A2.814 2.814 0 0 0 .536 1.818c-.103.216-.206.52-.234.67-.07.394-.07 16.632 0 17.025.178.976.993 1.861 1.964 2.124.342.098.45.098 5.212.098 3.324 0 4.94-.014 5.11-.051.459-.094 1.003-.394 1.35-.745.346-.352.656-.91.745-1.35.033-.16.051-1.12.047-2.72v-2.47l-.108.286c-.225.61-.52.957-1.008 1.186-.225.103-.323.122-.708.122-.384 0-.483-.019-.712-.126-.328-.15-.647-.441-.788-.713-.108-.197-.117-.206-.394-.234a1.996 1.996 0 0 1-.59-.174c-.267-.126-.455-.29-1.58-1.415-1.055-1.06-1.294-1.322-1.392-1.538-.253-.553-.253-1.031 0-1.584.098-.216.337-.478 1.392-1.538 1.125-1.125 1.313-1.289 1.58-1.415.886-.413 1.88-.075 2.32.792.061.122.131.314.145.426.033.193.043.179.324-.651.295-.863.403-1.083.684-1.364.15-.15.657-.427.783-.427.075 0 .08-3.248.005-3.618-.202-.97-1.05-1.847-2.016-2.077-.44-.103-9.96-.099-10.355.005Zm8.836 2.274c-.398 1.003-.539 1.214-.96 1.444l-.305.169H5.148L4.9 4.114c-.445-.201-.652-.487-1.036-1.444-.183-.46-.333-.848-.333-.872 0-.018 1.79-.032 3.98-.032h3.98l-.343.848ZM9.892 17.872c.46.342.46.914 0 1.256-.131.094-.187.099-2.297.113-1.439.009-2.222 0-2.339-.038-.473-.136-.656-.787-.333-1.176.235-.277.207-.277 2.625-.263 2.161.01 2.213.01 2.344.108Z"
    />
    <Path
      fill="url(#b)"
      d="M14.805 7.034c-.314.136-.338.202-1.52 3.741-.623 1.866-1.129 3.44-1.129 3.506.005.338.296.666.647.731.216.043.549-.093.684-.276.066-.094.544-1.463 1.243-3.558 1.106-3.328 1.134-3.412 1.082-3.61-.121-.459-.6-.712-1.007-.534Z"
    />
    <Path
      fill="url(#c)"
      d="M11.008 8.103c-.164.033-.347.197-1.397 1.247-.666.661-1.242 1.261-1.28 1.331a.802.802 0 0 0 0 .638c.103.187 2.47 2.526 2.602 2.564.59.178 1.083-.281.965-.9-.028-.15-.168-.314-.928-1.078L10.075 11l.872-.881c.483-.483.895-.938.923-1.008a.743.743 0 0 0-.862-1.008Z"
    />
    <Path
      fill="url(#d)"
      d="M16.66 8.098a.733.733 0 0 0-.576.718.95.95 0 0 0 .056.318c.033.056.45.502.929.985l.876.88-.876.877c-.479.488-.896.933-.928.99-.118.234-.057.604.136.825.192.22.613.29.876.154.075-.042.68-.619 1.34-1.284 1.67-1.678 1.67-1.444 0-3.122-.66-.666-1.246-1.233-1.298-1.261a.812.812 0 0 0-.534-.08Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={20.831}
        x2={-21.91}
        y1={32.471}
        y2={1.343}
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
        x1={17.371}
        x2={4.035}
        y1={19.042}
        y2={12.472}
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
        x1={13.464}
        x2={2.133}
        y1={16.84}
        y2={9.171}
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
        x1={21.287}
        x2={9.956}
        y1={16.83}
        y2={9.145}
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
export default MobileIcon