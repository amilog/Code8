import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SvgOpenEye from "../assets/icons/openEye";
import SvgCloseEye from "../assets/icons/closeEye";

type Props = React.ComponentProps<typeof TextInput> & {
  label: string;
  isPasswordCorrect?: boolean;
  secureTextEntry?: boolean;
  inputValue: string;
};

const TextField: React.FC<Props> = (props) => {
  const {
    label,
    secureTextEntry,
    isPasswordCorrect,
    style,
    onBlur,
    onFocus,
    inputValue,
    ...restOfProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(false);
  const [eyeIconScale, setEyeIconScale] = useState(new Animated.Value(1));

  const animateEyeIconZoomIn = () => {
    Animated.spring(eyeIconScale, {
      toValue: 0.8,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const animateEyeIconZoomOut = () => {
    Animated.spring(eyeIconScale, {
      friction: 3,
      useNativeDriver: true,
      toValue: 1,
    }).start();
  };

  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused ? 1 : inputValue.length > 0 ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [focusAnim, isFocused]);

  const inputRef = useRef<TextInput>(null);

  return (
    <View style={style}>
      <TextInput
        ref={inputRef}
        value={inputValue}
        secureTextEntry={secureText}
        inlineImageLeft="search_icon"
        cursorColor={
          isPasswordCorrect === false
            ? "#B3261E"
            : isFocused
            ? "#6750A4"
            : "#000"
        }
        style={[
          styles.input,
          {
            borderColor:
              isPasswordCorrect === false
                ? "#B3261E"
                : isFocused
                ? "#6750A4"
                : "#000",
          },
        ]}
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
        <Pressable onPress={() => inputRef.current?.focus()}>
          <Animated.Text
            style={[
              styles.label,
              {
                fontSize: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, 12],
                }),
                color:
                  isPasswordCorrect === false
                    ? "#B3261E"
                    : isFocused
                    ? "#6750A4"
                    : "#000",
              },
            ]}
          >
            {label}
          </Animated.Text>
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.eyeIconContainer,
          {
            transform: [{ scale: eyeIconScale }],
          },
        ]}
      >
        {secureText ? (
          <TouchableOpacity
            onPress={() => {
              animateEyeIconZoomIn();
              setSecureText(!secureText);
              setTimeout(animateEyeIconZoomOut, 200);
            }}
            style={styles.eyeIcon}
          >
            <SvgCloseEye />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              animateEyeIconZoomIn();
              setSecureText(!secureText);
              setTimeout(animateEyeIconZoomOut, 200);
            }}
            style={styles.eyeIcon}
          >
            <SvgOpenEye />
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    paddingLeft: 16,
    paddingRight: 50,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    color: "#1D1B20",
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
  eyeIconContainer: {
    position: "absolute",
    right: 15,
    top: 15,
    width: 24,
    height: 24,
  },
  eyeIcon: {
    flex: 1,
  },
});
export default TextField;
