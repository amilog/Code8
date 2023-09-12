import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { setStatus } from "../redux/onboard/OnboardSlice";
import OnboardingItem from "../components/OnboardingItem";
import BackButton from "../assets/icons/onboardingSvgs/BackButton";
import NextButton from "../assets/icons/onboardingSvgs/NextButton";
import { OnboardingData } from "../data/Onboarding";

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.backButton, { opacity: currentIndex === 0 ? 0 : 1 }]}
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <BackButton style={styles.backButton} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.nextButton,
            { opacity: currentIndex === OnboardingData.length - 1 ? 0.5 : 1 },
          ]}
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
    justifyContent: "space-between",
    alignItems: "center",
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
  indicator: {
    marginTop: "10%",
  },
});

export default Onboarding;
