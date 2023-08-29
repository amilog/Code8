import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const LastHackathon = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Code Academy - Hackathon 2023</Text>
      </View>
      <Image
        source={require("../assets/images/LastHackathon1.jpg")}
        style={styles.image}
      />
      <View style={styles.label}>
        <Text style={styles.labelText}>
          6 may 2023-cü ildə baş tutan ilk Hackathon - Code8 tədbirində
          komandalar maliyyə sahəsində bir problemin həlli üzərində işlədilər.
          {"\n\n  "}Data Science, Cyber Security, BackEnd, FrontEnd, UX/UI,
          Mobile App sahələrində layihənin fərqli sahələrini həyata keçirdilər
          və komanda işinin nəticəsi olaraq layihələrini münsiflər qarşısında
          təqdim etdilər.
        </Text>
      </View>
      <Image
        source={require("../assets/images/LastHackathon2.jpg")}
        style={styles.image}
      />
      <View style={styles.label}>
        <Text style={styles.labelHeader}>Format</Text>
        <Text style={styles.labelText}>
          Hər qrupdan iki nəfər tələbə olmaqla 14 nəfərlik 1 komanda
          formalaşdırıldı. 7 komandanın hər birinə təhsil mentorları Team leader
          olaraq təyin olundu.
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
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 22,
  },
  label: {
    margin: 16,
  },
  labelText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    width: "100%",
    height: 240,
  },
  labelHeader: {
    color: "#000",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    height: 36,
  },
});
