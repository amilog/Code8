import React, { useState, useEffect } from "react";
import { View, Image, Animated, Easing, StyleSheet } from "react-native";
import WhiteCodeIcon from "../assets/icons/animationSvgs/WhiteCodeIcon";
import GradientCodeIcon from "../assets/icons/animationSvgs/GradientCodeIcon";
import Code8Text from "../assets/icons/animationSvgs/Code8Text";
import FromCodeText from "../assets/icons/animationSvgs/FromCodeText";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getStatus } from "../redux/onboard/OnboardSlice";

//biraz sağa sürüşdürmək lazım
const Animation = ({ navigation }: any) => {
  const [fadeAnimation] = useState(new Animated.Value(0));
  const [iconOpacity] = useState(new Animated.Value(0));
  const [textTranslateX] = useState(new Animated.Value(-300));
  const [textOpacity] = useState(new Animated.Value(0));
  const [fromCodeTextTranslateY] = useState(new Animated.Value(-30));
  const [startFromCodeTextAnimation, setStartFromCodeTextAnimation] =
    useState(false);
  const totalAnimationDuration = 300;
  const initialImageDuration = 800;
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector<
    RootState,
    { isOnboarded: boolean; loading: boolean }
  >((state) => state.onBoard);

  useEffect(() => {
    startAnimation();
    dispatch(getStatus());
  }, []);

  const startAnimation = () => {
    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: totalAnimationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        fadeAnimation.setValue(1);

        // Icon animation
        Animated.timing(iconOpacity, {
          toValue: 1,
          duration: totalAnimationDuration,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();

        // Text animation
        setTimeout(() => {
          Animated.timing(textTranslateX, {
            toValue: 1,
            duration: totalAnimationDuration * 1.6,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();

          // Text opacity animation
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: totalAnimationDuration * 5,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        }, 500);

        // FromCodeText animation
        setTimeout(() => {
          setStartFromCodeTextAnimation(true);
        }, totalAnimationDuration * 4.5);
      });
    }, 500);
  };

  useEffect(() => {
    if (startFromCodeTextAnimation) {
      Animated.timing(fromCodeTextTranslateY, {
        toValue: 0,
        duration: totalAnimationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        if (state.isOnboarded) {
          navigation.replace("Tabs");
        } else {
          navigation.replace("OnBoarding");
        }
      }, 300);
    }
  }, [startFromCodeTextAnimation]);

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <GradientCodeIcon style={styles.centeredIcon0} />
      <Animated.Image
        source={require("../assets/images/Gradient.jpg")}
        style={[styles.backgroundImage, { opacity: fadeAnimation }]}
      />
      <Animated.View style={[styles.centeredIcon, { opacity: iconOpacity }]}>
        <WhiteCodeIcon />
      </Animated.View>
      <Animated.View
        style={[
          styles.centeredText,
          {
            transform: [{ translateX: textTranslateX }],
            opacity: textOpacity,
          },
        ]}
      >
        <Code8Text style={styles.centeredText} />
      </Animated.View>
      {startFromCodeTextAnimation && (
        <Animated.View
          style={[
            styles.fromCodeTextContainer,
            {
              transform: [{ translateY: fromCodeTextTranslateY }],
            },
          ]}
        >
          <FromCodeText style={styles.fromCodeTextContainer} />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  centeredIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 0 }, { translateY: -2 }],
    width: 144,
    height: 36,
  },
  centeredIcon0: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 0 }, { translateY: -2 }],
    width: 144,
    height: 36,
  },
  centeredText: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 8.5 }, { translateY: 0 }],
    width: 117,
    height: 26.28,
  },
  fromCodeTextContainer: {
    position: "absolute",
    transform: [{ translateX: 1 }, { translateY: 32 }],
    justifyContent: "center",
    alignItems: "center",
    width: 136,
    height: 13,
  },
});

export default Animation;
