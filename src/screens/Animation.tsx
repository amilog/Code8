import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import WhiteCodeIcon from "../assets/icons/animationSvgs/WhiteCodeIcon";
import GradientCodeIcon from "../assets/icons/animationSvgs/GradientCodeIcon";
import Code8Text from "../assets/icons/animationSvgs/Code8Text";
import FromCodeText from "../assets/icons/animationSvgs/FromCodeText";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getStatus } from "../redux/onboard/OnboardSlice";
import { getTeamState } from "../redux/data/TeamSlice";
import {
  getResultState,
  startHackathonState,
} from "../redux/data/ValuationSlice";

const Animation = ({ navigation }: any) => {
  const fadeAnimation = useSharedValue(0);
  const iconOpacity = useSharedValue(0);
  const textTranslateX = useSharedValue(-300);
  const textOpacity = useSharedValue(0);
  const fromCodeTextTranslateY = useSharedValue(-30);
  const startFromCodeTextAnimation = useState(false);
  const totalAnimationDuration = 300;
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector<
    RootState,
    { isOnboarded: boolean; loading: boolean }
  >((state) => state.onBoard);

  useEffect(() => {
    startAnimation();
    dispatch(getStatus());
    dispatch(getTeamState());
    dispatch(startHackathonState());
    dispatch(getResultState());
    dispatch(getResultState());
  }, []);

  const startAnimation = () => {
    setTimeout(() => {
      fadeAnimation.value = withTiming(1, {
        duration: totalAnimationDuration,
        easing: Easing.ease,
      });

      iconOpacity.value = withTiming(1, {
        duration: totalAnimationDuration,
        easing: Easing.ease,
      });

      setTimeout(() => {
        textTranslateX.value = withTiming(1, {
          duration: totalAnimationDuration * 1.6,
          easing: Easing.ease,
        });

        textOpacity.value = withTiming(1, {
          duration: totalAnimationDuration * 5,
          easing: Easing.ease,
        });
      }, 500);

      setTimeout(() => {
        startFromCodeTextAnimation[1](true);
      }, totalAnimationDuration * 4.5);
    }, 500);
  };

  useEffect(() => {
    if (startFromCodeTextAnimation[0]) {
      fromCodeTextTranslateY.value = withTiming(0, {
        duration: totalAnimationDuration,
        easing: Easing.ease,
      });
      setTimeout(() => {
        if (state.isOnboarded) {
          navigation.replace("Tabs");
        } else {
          navigation.replace("OnBoarding");
        }
      }, 400);
    }
  }, [startFromCodeTextAnimation[0]]);

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnimation.value,
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      opacity: iconOpacity.value,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: textTranslateX.value }],
      opacity: textOpacity.value,
    };
  });

  const animatedFromCodeTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: fromCodeTextTranslateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <GradientCodeIcon style={styles.centeredIcon0} />
      <Animated.Image
        source={require("../assets/images/Gradient.jpg")}
        style={[styles.backgroundImage, animatedImageStyle]}
      />
      <Animated.View style={[styles.centeredIcon, animatedIconStyle]}>
        <WhiteCodeIcon />
      </Animated.View>
      <Animated.View style={[styles.centeredText, animatedTextStyle]}>
        <Code8Text style={styles.centeredText} />
      </Animated.View>
      {startFromCodeTextAnimation[0] && (
        <Animated.View
          style={[styles.fromCodeTextContainer, animatedFromCodeTextStyle]}
        >
          <FromCodeText style={styles.fromCodeTextContainer} />
        </Animated.View>
      )}
    </View>
  );
};

export default Animation;

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
