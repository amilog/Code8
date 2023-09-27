import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import SvgTriangle from "../assets/icons/triangleBottom";
import SvgTopTriangle from "../assets/icons/triangleTop";
import { TeamsModel } from "../models/dataModels";
import Metrics from "../styling/Metrics";
import SvgTeamIcon from "../assets/icons/teamColorIcon";
import { LinearGradient } from "expo-linear-gradient";
import SvgSaveButton from "./SaveButton";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { postCoachValuateState } from "../redux/data/ValuationSlice";

interface CoachValuateCardProps {
  item: TeamsModel;
  type: string;
  showSucessMessage?: () => void;
  showFailureMessage?: () => void;
  givenScore?: number;
}

const CoachValuateCard: React.FC<CoachValuateCardProps> = ({
  item,
  type,
  showSucessMessage,
  showFailureMessage,
  givenScore,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(givenScore ? givenScore.toString() : "");
  console.log("value", value);

  const dispatch = useDispatch<AppDispatch>();
  const cardHeight = useSharedValue(70);
  console.log("givenScore", givenScore);

  const toggleCardHeight = () => {
    cardHeight.value = withSpring(expanded ? 70 : 260, {
      damping: 10,
    });

    runOnJS(setExpanded)(!expanded);
  };

  const cardStyle = useAnimatedStyle(() => {
    return {
      height: cardHeight.value,
    };
  });

  return (
    <Pressable
      style={[
        styles.teamCard,
        { backgroundColor: givenScore ? "#F2F2F2" : "#fff" },
        Platform.OS === "android" && styles.androidShadow,
        Platform.OS === "ios" && styles.iosShadow,
      ]}
      onPress={() => (givenScore ? {} : toggleCardHeight())}
    >
      <Animated.View style={[cardStyle, styles.cardContainer]}>
        <View style={styles.contentContainer}>
          <SvgTeamIcon fill={item.color} />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.roleText}>
              Qiymət: {givenScore ? `${givenScore}/100` : "(Təyin olunmayıb)"}
            </Text>
          </View>
        </View>
        {givenScore
          ? null
          : expanded && (
              <Animated.View
                entering={FadeIn.duration(800)}
                exiting={FadeOut.duration(200)}
                style={styles.socialIconsContainer}
              >
                <Text style={styles.infoText}>
                  Zəhmət olmasa, komandanı hazırladığınız texniki tapşırıq üzrə
                  100 bal üzərindən qiymətləndirin{" "}
                  <Text style={styles.boldText}>
                    (Yadda saxla düyməsinə klik etdikdən sonra qiymətləndirməni
                    dəyişə bilmərsiniz)
                  </Text>
                </Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>
                    {type} üzrə texniki tapşırıq
                  </Text>
                  <LinearGradient
                    colors={[
                      "rgba(255, 63, 60, 1)",
                      "rgba(255, 66, 121, 1)",
                      "rgba(223, 58, 154, 1)",
                      "rgba(141, 68, 235, 1)",
                      "rgba(43, 159, 239, 1)",
                    ]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={styles.gradient}
                  >
                    <TextInput
                      inputMode="numeric"
                      editable={givenScore ? false : true}
                      keyboardType="numeric"
                      cursorColor={"rgba(255, 63, 60, 1)"}
                      onChangeText={(text) => {
                        const numericValue = Math.min(
                          100,
                          Math.max(0, parseInt(text) || 0)
                        );
                        setValue(numericValue.toString());
                      }}
                      value={value}
                      style={styles.ratingInput}
                    />
                    <Text style={styles.ratingScale}>/100</Text>
                  </LinearGradient>
                </View>
                <TouchableOpacity
                  style={styles.saveButtonContainer}
                  onPress={() => {
                    if (value.length > 0) {
                      dispatch(
                        postCoachValuateState({
                          id: item._id,
                          type: type,
                          score: parseInt(value),
                        })
                      );
                      toggleCardHeight();
                      setValue("");
                      showSucessMessage && runOnJS(showSucessMessage)();
                    }
                    if (value.length === 0 || value === "0") {
                      showFailureMessage && runOnJS(showFailureMessage)();
                    }
                  }}
                >
                  <SvgSaveButton />
                </TouchableOpacity>
              </Animated.View>
            )}
      </Animated.View>
      <View style={styles.triangleContainer}>
        {expanded ? <SvgTopTriangle /> : <SvgTriangle />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  teamCard: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#C2C2C2",
    padding: 16,
    borderRadius: 16,
    width: "95%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  saveButtonContainer: {
    alignSelf: "center",
    marginTop: 24,
    marginLeft: 16,
  },
  gradient: {
    height: 41,
    width: 91,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  androidShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 5,
  },
  iosShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 15,
    },
  },
  cardContainer: {
    flexDirection: "column",
  },
  contentContainer: {
    flexDirection: "row",
    gap: 16,
  },
  textContainer: {
    gap: 6,
    marginTop: 8,
  },
  nameText: {
    color: "#000",
    fontSize: 16 * Metrics.rem,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  roleText: {
    fontSize: 14 * Metrics.rem,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.25,
    color: "#868686",
  },
  socialIconsContainer: {
    marginTop: 10,
    marginBottom: 8,
    width: "100%",
    alignSelf: "center",
  },
  triangleContainer: {
    position: "absolute",
    top: 40,
    right: 16,
  },
  infoText: {
    color: "#868686",
    fontSize: 9,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.3,
  },
  boldText: {
    color: "#000",
    fontWeight: "700",
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    color: "#393939",
    width: 200,
  },
  ratingInput: {
    height: 39,
    width: 89,
    borderRadius: 3,
    backgroundColor: "#fff",
    paddingLeft: 12,
    paddingBottom: Platform.OS === "ios" ? 6 : 0,
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.15,
    color: "#393939",
  },
  ratingScale: {
    position: "absolute",
    right: 10,
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.15,
    color: "#393939",
  },
});

export default CoachValuateCard;
