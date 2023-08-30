import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
type Props = React.ComponentProps<typeof TextInput> & {
  label: string;
};
const TextField: React.FC<Props> = (props) => {
  const { label, style, onBlur, onFocus, ...restOfProps } = props;
  const [isFocused, setIsFocused] = useState(false);

  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [focusAnim, isFocused]);

  return (
    <View style={style}>
      <TextInput
        style={[styles.input, { borderColor: isFocused ? "#6750A4" : "#000" }]}
        {...restOfProps}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
      />
      <Animated.View
        style={[
          styles.labelContainer,
          {
            top: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [15, -12],
            }),
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.label,
            {
              fontSize: focusAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [16, 12],
              }),
              color: isFocused ? "#6750A4" : "#9B9B9B",
            },
          ]}
        >
          {label}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    color: '#1D1B20'
  },
  labelContainer: {
    position: "absolute",
    left: 16,
    top: -6,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});
export default TextField;
