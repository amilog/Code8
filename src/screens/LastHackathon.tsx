import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import * as Animatable from "react-native-animatable";
import SvgPlayButton from "../assets/icons/PlayButton";

const LastHackathon = () => {
  const video = useRef<Video>(null);
  const [showController, setShowController] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStatus = (status: any) => {
    setIsPlaying(status.isPlaying);
  };

  const toggleVideoPlayback = async () => {
    if (isPlaying) {
      await video.current?.pauseAsync();
    } else {
      setShowController(false);
      await video.current?.playAsync();
      video.current?._setFullscreen(true);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let controllerTimeout: any;

    if (showController) {
      controllerTimeout = setTimeout(() => {
        setShowController(false);
      }, 3000);
    }

    return () => {
      clearTimeout(controllerTimeout);
    };
  }, [showController]);

  const renderVideoController = () => {
    const controllerAnimation = showController ? "fadeIn" : "fadeOut";

    return (
      <Animatable.View
        animation={controllerAnimation}
        style={styles.videoController}
      >
        <TouchableOpacity onPress={toggleVideoPlayback}>
          <SvgPlayButton />
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={[styles.sectionHeader, { marginTop: 12 }]}>
          Code Academy - Hackathon 2023
        </Text>
      </View>
      <Pressable
        onPress={() => {
          setShowController((prev) => !prev);
        }}
        style={styles.videoContainer}
      >
        <Video
          ref={video}
          source={require("../assets/videos/code8.mp4")}
          resizeMode={ResizeMode.COVER}
          isLooping
          onPlaybackStatusUpdate={handleStatus}
          onFullscreenUpdate={(status: any) => {
            if (status.fullscreenUpdate === 3 && status.status.isPlaying) {
              setIsPlaying(false);
              video.current?.pauseAsync();
            }
          }}
          style={styles.video}
        />
        {renderVideoController()}
      </Pressable>
      <Image
        source={require("../assets/images/LastHackathon1.jpeg")}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          6 may 2023-cü ildə baş tutan ilk Hackathon - Code8 tədbirində
          komandalar maliyyə sahəsində bir problemin həlli üzərində işlədilər.
          {"\n\n"}
          Data Science, Cyber Security, BackEnd, FrontEnd, UX/UI, Mobile App
          sahələrində layihənin fərqli sahələrini həyata keçirdilər və komanda
          işinin nəticəsi olaraq layihələrini münsiflər qarşısında təqdim
          etdilər.
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
    marginBottom: 12,
  },
  sectionHeader: {
    color: "#000",
    fontWeight: "400",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
  },
  sectionText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
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
    bottom: 10,
    width: "100%",
  },
});
