import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Text,
} from "react-native";
import React, { useEffect } from "react";
import CircleIcon from "../assets/icons/animationCardSvgs/circleIcon";
import Code8Text from "../assets/icons/animationSvgs/Code8Text";
import SentyabrText from "../assets/icons/animationCardSvgs/sentyabrText";
import ArrowRightIcon from "../assets/icons/animationCardSvgs/arrowRightIcon";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimationCard = () => {
  const scale = useSharedValue(0);
  const progress = useSharedValue(0.7);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: progress.value,
    };
  });

  useEffect(() => {
    scale.value = withRepeat(withTiming(3, { duration: 1000 }), -1);
  }, []);

  return (
    <View style={styles.view}>
      <ImageBackground
        style={styles.gif}
        source={require("../assets/images/AnimationCard.gif")}
      >
        <View style={styles.cardView}>
          <View style={{ position: "relative" }}>
            <CircleIcon style={styles.circleIcon} />
            <Animated.View style={[styles.circle, rStyle]} />
          </View>
          {/* <Code8Text style={styles.codeText} /> */}
          <SentyabrText style={styles.sentyabrText} />
          <CircleIcon style={styles.circleIcon} />
        </View>
        <View style={styles.infoView}>
          <View style={styles.subtitleView}>
            <View style={styles.subtitles}>
              <ArrowRightIcon style={styles.arrowIcon} />
              <Text style={styles.subtitleText}>Toplam 84 iştirakçı</Text>
            </View>
            <View style={styles.subtitles}>
              <ArrowRightIcon style={styles.arrowIcon} />
              <Text style={styles.subtitleText}>6 komanda</Text>
            </View>
            <View style={styles.subtitles3}>
              <ArrowRightIcon style={styles.arrowIcon3} />
              <Text
                style={styles.subtitleText}
              >{`Hər komandada 13 \nüzv`}</Text>
            </View>
          </View>
          <Image
            source={require("../assets/images/exampleImg1.png")}
            style={styles.image}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default AnimationCard;

const styles = StyleSheet.create({
  view: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  gif: {
    width: "100%",
    height: Dimensions.get("window").height / 4,
    borderRadius: 16,
    overlayColor: "white",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    marginHorizontal: 26,
    alignItems: "center",
  },
  circleIcon: {
    width: 16,
    height: 16,
  },
  codeText: {
    width: 120,
    height: 30,
  },
  sentyabrText: {
    width: 180,
    height: 22,
  },
  infoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    alignItems: "center",
    bottom: 20,
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  subtitleView: {
    flexDirection: "column",
    gap: 8,
  },
  subtitleText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ffffff",
  },
  subtitles: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  subtitles3: {
    flexDirection: "row",
    gap: 6,
  },
  arrowIcon3: {
    width: 24,
    height: 24,
    marginTop: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 11,
  },
  circle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "white",
  },
});
