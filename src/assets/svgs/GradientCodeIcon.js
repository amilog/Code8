import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const GradientCodeIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path fill="url(#a)" d="M6.249 36H0L18.751 0H25L6.249 36Z" />
        <Defs>
            <LinearGradient
                id="a"
                x1={15.591}
                x2={2.964}
                y1={-1.261}
                y2={36.682}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FEBE10" />
                <Stop offset={0.048} stopColor="#F9A41B" />
                <Stop offset={0.172} stopColor="#F16522" />
                <Stop offset={0.228} stopColor="#EE4523" />
                <Stop offset={0.269} stopColor="#D9403D" />
                <Stop offset={0.341} stopColor="#BA385E" />
                <Stop offset={0.405} stopColor="#A23173" />
                <Stop offset={0.46} stopColor="#902C81" />
                <Stop offset={0.503} stopColor="#852A8A" />
                <Stop offset={0.529} stopColor="#81298E" />
                <Stop offset={0.795} stopColor="#2584C6" />
                <Stop offset={1} stopColor="#02AE4D" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export default GradientCodeIcon
