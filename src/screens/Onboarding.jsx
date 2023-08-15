import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";

const Onboarding = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/images/OnboardingImg1.jpg")}
        style={styles.imageBackground}
      >
        <View>
          <Text style={{ color: "red" }}>PAW</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

export default Onboarding;
