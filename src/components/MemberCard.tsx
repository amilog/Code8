import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  FadeIn,
  FadeOut,
  withTiming,
} from "react-native-reanimated";
import SvgTriangle from "../assets/icons/triangleBottom";
import SvgTopTriangle from "../assets/icons/triangleTop";
import SvgLinkedIn from "../assets/icons/linkedIn";
import SvgBehance from "../assets/icons/behance";
import SvgGithub from "../assets/icons/github";
import { MembersModel } from "../models/dataModels";
import Metrics from "../styling/Metrics";
import * as WebBrowser from "expo-web-browser";

const MemberCard = ({ item }: { item: MembersModel }) => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  const cardHeight = useSharedValue(80);

  const toggleCardHeight = () => {
    cardHeight.value = withTiming(expanded ? 80 : 160, {
      duration: 300,
    });

    runOnJS(setExpanded)(!expanded);
  };

  const cardStyle = useAnimatedStyle(() => {
    return {
      height: cardHeight.value,
    };
  });

  const openLinkInBrowser = async (url: string) => {
    try {
      await WebBrowser.openBrowserAsync(url);
    } catch (error) {
      showErrorAlert("Link açılmadı");
    }
  };

  const showErrorAlert = (message: string) => {
    Alert.alert("Xəta baş verdi", message, [
      {
        text: "Bağla",
        style: "cancel",
      },
    ]);
  };

  return (
    <Pressable
      style={[
        styles.teamCard,
        Platform.OS === "android" && styles.androidShadow,
        Platform.OS === "ios" && styles.iosShadow,
      ]}
      onPress={toggleCardHeight}
    >
      <Animated.View style={[cardStyle, styles.cardContainer]}>
        <View style={styles.contentContainer}>
          <View>
            <Image
              onLoadEnd={() => {
                setLoading(false);
              }}
              source={{
                uri: `https://firebasestorage.googleapis.com/v0/b/image-36a5a.appspot.com/o/${item._id}.jpeg?alt=media&token=2f7c16fd-dc5b-4406-8c9e-4e0dfabb4ff6&_gl=1*143gb7z*_ga*MTIwMTQwNTUzNS4xNjk1OTA5MTg2*_ga_CW55HF8NVT*MTY5NTkyMjU3NC4yLjEuMTY5NTkyMjg2Ny4zLjAuMA..`,
              }}
              style={styles.profileImage}
            />
            <Image
              source={require("../assets/images/noProfile.jpeg")}
              style={[
                styles.profileImage,
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: loading ? 1 : 0,
                },
              ]}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.roleText}>{item.role}</Text>
            {!item.attend && (
              <Text style={styles.attendText}>(iştirak etmir)</Text>
            )}
          </View>
        </View>
        {expanded && (
          <Animated.View
            entering={FadeIn.duration(800)}
            exiting={FadeOut.duration(200)}
            style={styles.socialIconsContainer}
          >
            {item.linkedIn.length > 0 && (
              <TouchableOpacity
                onPress={() => openLinkInBrowser(item.linkedIn)}
              >
                <SvgLinkedIn />
              </TouchableOpacity>
            )}
            {item.behance.length > 0 && (
              <TouchableOpacity onPress={() => openLinkInBrowser(item.behance)}>
                <SvgBehance />
              </TouchableOpacity>
            )}
            {item.github.length > 0 && (
              <TouchableOpacity onPress={() => openLinkInBrowser(item.github)}>
                <SvgGithub />
              </TouchableOpacity>
            )}
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
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  androidShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 15,
  },
  iosShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
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
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  attendText: {
    color: "red",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  socialIconsContainer: {
    marginTop: 20,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignSelf: "center",
  },
  triangleContainer: {
    position: "absolute",
    top: 40,
    right: 16,
  },
});

export default MemberCard;
