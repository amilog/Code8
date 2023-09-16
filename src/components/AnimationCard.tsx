import { StyleSheet, View, Image, Dimensions } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const AnimationCard = () => {
  return (
    <View style={styles.view}>
      {/* <BlurView intensity={100}   style={styles.blurView}> */}
      <Image
        style={styles.gif}
        source={require("../assets/images/AnimationCard.gif")}
      />
      {/* </BlurView> */}
    </View>
  );
};

export default AnimationCard;

const styles = StyleSheet.create({
  view: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  gif: {
    width: "100%",
    height: Dimensions.get("window").height / 4,
    borderRadius: 16,
    overlayColor: "white",
  },
//   blurView: {
//     width: "100%",
//     backgroundColor: "red",
//   },
});
