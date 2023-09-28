import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import CircleIcon from "../assets/icons/animationCardSvgs/circleIcon";
import ArrowRightIcon from "../assets/icons/animationCardSvgs/arrowRightIcon";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Metrics from "../styling/Metrics";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Carousel from "react-native-reanimated-carousel";
import { TeamState } from "../redux/data/TeamSlice";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const AnimationCard = () => {
  const teams = useSelector<RootState, TeamState>((state) => state.team);
  const imageRef = useRef<Image>(null);
  const getRandomTeam = () => {
    const randomIndex = Math.floor(Math.random() * teams.teams.length);
    return teams.teams[randomIndex];
  };
  const randomTeam = getRandomTeam();
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
          <Carousel
            loop
            enabled={false}
            width={Dimensions.get("window").width / 1.8}
            height={30}
            autoPlay={true}
            autoPlayInterval={3000}
            data={[
              {
                id: 1,
                text: "CODE8",
              },
              {
                id: 2,
                text: "30 SENTYABR",
              },
            ]}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => {
              return (
                <>
                  <Text
                    style={{
                      fontWeight: "900",
                      fontSize: 28 * Metrics.rem,
                      lineHeight: 36,
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    {item.text}
                  </Text>
                </>
              );
            }}
          />

          <View style={{ position: "relative" }}>
            <CircleIcon style={styles.circleIcon} />
            <Animated.View style={[styles.circle, rStyle]} />
          </View>
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
              >{`Hər komandada 14 \nüzv`}</Text>
            </View>
          </View>
          <Carousel
            loop
            vertical
            enabled={false}
            width={100}
            height={100}
            autoPlay={true}
            data={randomTeam.members}
            scrollAnimationDuration={1000}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            renderItem={({ item }) => {
              return (
                <>
                  {item.image === "" ? (
                    <View
                      style={{
                        position: "absolute",
                        top: 40,
                        left: 30,
                      }}
                    >
                      <ActivityIndicator size="large" color="#fff" />
                    </View>
                  ) : (
                    <Image
                      ref={imageRef}
                      style={styles.image}
                      source={{
                        uri: item.image,
                      }}
                    />
                  )}
                  <View
                    style={{
                      position: "absolute",
                      top: 40,
                      left: 30,
                    }}
                  >
                    <ActivityIndicator size="large" color="#fff" />
                  </View>
                </>
              );
            }}
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
    height:
      heightPercentageToDP("24%") < 200 ? 200 : heightPercentageToDP("24%"),
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
    fontSize: 18 * Metrics.rem,
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
    width: 100,
    height: 100,
    borderRadius: 12,
    zIndex: 900,
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
