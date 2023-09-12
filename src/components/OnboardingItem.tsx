import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const textContainerHeightPercentage = SCREEN_HEIGHT < 800 ? '35%' : '25%';

const OnboardingItem = ({ item }: any) => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={item.image}
        style={styles.imageBackground}
        resizeMode="cover"   
      >
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
  textContainer: {
    paddingHorizontal: "5%",
    gap: 12,
    height: "15%",
    marginBottom: textContainerHeightPercentage,
  },
  content: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
