import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Text,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import CircleIcon from "../assets/icons/animationCardSvgs/circleIcon";

const AnimationCard = () => {
  return (
    <View style={styles.view}>
      <ImageBackground
        style={styles.gif}
        source={require("../assets/images/AnimationCard.gif")}
      >
        <BlurView intensity={25}>
          <View>
            <CircleIcon />
            <Text style={{ fontSize: 50 }}>Salam</Text>
          </View>
        </BlurView>
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
  },
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
