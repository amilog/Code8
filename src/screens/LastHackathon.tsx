import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import * as Animatable from "react-native-animatable";
import SvgPlayButton from "../assets/icons/PlayButton";
import { useFocusEffect } from "@react-navigation/native";

const LastHackathon = () => {
  const video = useRef<Video>(null);
  const [showController, setShowController] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleStatus = (status: any) => {
    setIsPlaying(status.isPlaying);
    if (status.isLoaded) {
      setLoading(false);
    }
  };

  const toggleVideoPlayback = async () => {
    if (isPlaying) {
      await video.current?.pauseAsync();
    } else {
      setShowController(false);
      await video.current?.playAsync();
      video.current?._setFullscreen(true);
      StatusBar.setHidden(true);
    }
    setIsPlaying(!isPlaying);
  };

  useFocusEffect(
    useCallback(() => {
      let controllerTimeout: NodeJS.Timeout;

      if (showController) {
        controllerTimeout = setTimeout(() => {
          setShowController(false);
        }, 3000);
      }

      return () => {
        clearTimeout(controllerTimeout);
        video.current?.pauseAsync();
      };
    }, [showController])
  );

  const renderVideoController = () => {
    const controllerAnimation = loading
      ? undefined
      : showController
      ? "fadeIn"
      : "fadeOut";

    return (
      <Animatable.View
        animation={controllerAnimation}
        style={styles.videoController}
      >
        <TouchableOpacity
          disabled={loading || !showController}
          onPress={toggleVideoPlayback}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#F3D1FF" />
          ) : (
            <SvgPlayButton />
          )}
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable
        onPress={() => {
          setShowController((prev) => !prev);
        }}
        style={styles.videoContainer}
      >
        <Video
          ref={video}
          source={{
            uri: "https://drive.google.com/uc?id=1RN6mmABw3GiBwpp74zfZFdaDWZ-KWO2D",
          }}
          resizeMode={ResizeMode.COVER}
          isLooping
          onPlaybackStatusUpdate={handleStatus}
          onFullscreenUpdate={(status: any) => {
            if (status.fullscreenUpdate === 3 && status.status.isPlaying) {
              StatusBar.setHidden(false);
              setIsPlaying(false);
              video.current?.pauseAsync();
            } else if (
              status.fullscreenUpdate === 3 &&
              !status.status.isPlaying
            ) {
              StatusBar.setHidden(false);
            }
          }}
          style={styles.video}
        />
        {renderVideoController()}
      </Pressable>
      <View style={styles.section}>
        <Text style={[styles.sectionHeader, { marginTop: 12 }]}>
          Code Academy - Hackathon 2023
        </Text>
      </View>
      <Image
        source={require("../assets/images/LastHackathon1.jpeg")}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          8 may 2023-cü ildə baş tutan ilk Hackathon - Code8 tədbirində
          komandalar maliyyə sahəsində bir problemin həlli üzərində işlədilər.
          {"\n\n"}
          Data Science, Cyber Security, BackEnd, FrontEnd, UX/UI, Mobile App
          sahələrində layihənin fərqli sahələrini həyata keçirdilər və komanda
          işinin nəticəsi olaraq layihələrini münsiflər qarşısında təqdim
          etdilər. etdilər.
        </Text>
      </View>
      <Image
        source={require("../assets/images/LastHackathon2.jpg")}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Format</Text>
        <Text style={styles.sectionText}>
          Hər qrupdan iki nəfər tələbə olmaqla 14 nəfərlik 1 komanda
          formalaşdırıldı. 7 komandanın hər birinə təhsil mentorları Team leader
          olaraq təyin olundu.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Nə zaman?</Text>
        <Text style={styles.sectionText}>
          7 fərqli tədris sahəsindən qoşulan 90 tələbə, 7 mentor və 7 müəllim
          heyəti ilə şənbə günü 8 saat davam etməklə həyata keçirildi.
        </Text>
      </View>
      <Image
        source={require("../assets/images/LastHackathon3.jpeg")}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Harada?</Text>
        <Text style={styles.sectionText}>
          8 may tarixində Nizami Kinoteatrının 5-ci mərtəbəsindəki GLA - Game
          League Azerbaijan-da keçirildi.
        </Text>
      </View>
      <View style={styles.credits}>
        <Text style={styles.creditsText}>
          Sonda isə qalib komandamız müxtəlif hədiyyələrlə mükafatlandırıldı.
        </Text>
      </View>
    </ScrollView>
  );
};

export default LastHackathon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 6,
  },
  sectionHeader: {
    color: "#000",
    fontWeight: "400",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 0.15,
  },
  sectionText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  image: {
    width: "100%",
    height: 240,
    marginBottom: 16,
  },
  credits: {
    alignItems: "center",
    marginVertical: 16,
  },
  creditsText: {
    fontWeight: "500",
    color: "#000",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    textAlign: "center",
    width: "80%",
  },
  videoContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  video: {
    width: "100%",
    height: 584,
  },
  videoController: {
    position: "absolute",
    alignItems: "center",
    transform: [{ translateX: 0 }, { translateY: 250 }],
    width: "100%",
  },
});
