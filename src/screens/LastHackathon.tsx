import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

const LastHackathon = () => {
  const video = React.useRef<Video>(null);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={[styles.sectionHeader, { marginTop: 12 }]}>
          Code Academy - Hackathon 2023
        </Text>
      </View>
      <Video
        ref={video}
        source={require("../assets/videos/code8.mp4")}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        onPlaybackStatusUpdate={(status: any) => {
          if (status.isPlaying && status.isLoaded) {
            video.current?._setFullscreen(true);
          }
        }}
        style={{ width: "100%", height: 584, marginBottom: 16 }}
      />
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
});

export default LastHackathon;
