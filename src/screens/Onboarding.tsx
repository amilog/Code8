import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { setStatus } from "../redux/onboard/OnboardSlice";
import OnboardingItem from "../components/OnboardingItem";
import BackButton from "../assets/icons/onboardingSvgs/BackButton";
import NextButton from "../assets/icons/onboardingSvgs/NextButton";
import { OnboardingData } from "../data/Onboarding";
import OnboardingIndicator from "../components/OnboardingIndicator";
import SkipButton from "../assets/icons/onboardingSvgs/SkipButton";

const Onboarding = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const slidersRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < OnboardingData.length - 1) {
      slidersRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === OnboardingData.length - 1) {
      dispatch(setStatus(true)).then(() => {
        navigation.navigate("Tabs");
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      slidersRef.current?.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={OnboardingData}
        ref={slidersRef}
        renderItem={OnboardingItem}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={styles.indicator}>
        <OnboardingIndicator
          currentIndex={currentIndex}
          totalScreens={OnboardingData.length}
          press={handleNext}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ opacity: currentIndex === 0 ? 0 : 1 }}
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <BackButton style={styles.backButton} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            opacity: currentIndex === OnboardingData.length - 1 ? 0.5 : 1,
          }}
          onPress={handleNext}
        >
          <NextButton style={styles.nextButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: "12%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: "11%",
  },
  backButton: {
    width: 60,
    height: 60,
  },
  nextButton: {
    width: 60,
    height: 60,
  },
  skipButton: {
    width: 45,
    height: 24,
    position: "absolute",
    transform: [{ translateY: -6 }],
    right: 0,
  },
  indicatorView: {
    flexDirection: "row",
    position: "absolute",
    top: "10%",
    paddingHorizontal: "50%",
    backgroundColor: "red",
    justifyContent: "center",
  },
  indicator: {
    position: "absolute",
    top: "8%",
    right: 0,
    left: 0,
  },
});

export default Onboarding;


