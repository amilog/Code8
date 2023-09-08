import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import BackButton from "../assets/icons/onboardingSvgs/BackButton";
import NextButton from "../assets/icons/onboardingSvgs/NextButton";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { setStatus } from "../redux/onboard/OnboardSlice";
import onboardingImages from "../data/onboardingImages";
import onboardingTextData from "../data/onboardingTextData";
import OnboardingIndicator from "../components/OnboardingIndicator";


const Onboarding = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const images = onboardingImages;
  const textData = onboardingTextData;

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === 2) {
      dispatch(setStatus(true)).then(() => {
        navigation.navigate("Tabs");
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images[currentIndex]}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.indicator}>
          <OnboardingIndicator
            currentIndex={currentIndex}
            totalScreens={images.length}
          />
        </View>

        <View style={{ flex: 1 }} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{textData[currentIndex].title}</Text>
          <Text style={styles.content}>{textData[currentIndex].content}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[{ opacity: currentIndex === 0 ? 0 : 1 }]}
            onPress={handlePrev}
            disabled={currentIndex === 0}
          >
            <BackButton style={styles.backButton} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ opacity: currentIndex === images.length - 1 ? 0.5 : 1 }]}
            onPress={handleNext}
          >
            <NextButton style={styles.nextButton} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  textContainer: {
    paddingHorizontal: "5%",
    gap: 12,
    height: "15%",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: "12%",
    marginHorizontal: "11%",
    justifyContent: "space-between",
  },
  backButton: {
    width: 60,
    height: 60,
  },
  nextButton: {
    width: 60,
    height: 60,
  },
  indicator: {
    marginTop: '10%',
  },
});

export default Onboarding;
