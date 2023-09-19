import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Platform,
  Pressable,
  Text,
  Image,
  Dimensions,
} from "react-native";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import GradientHeader from "../components/GradientHeader";
import AgendaSection from "../components/AgendaSection";
import TimeContainer from "../components/TimeContainer";
import AnimationCard from "../components/AnimationCard";
import { AboutTeam } from "../data/About";
import SvgArrow from "../assets/icons/arrow";
import SvgRules from "../assets/icons/rules";
import SvgCareer from "../assets/icons/career";

const Home = ({ navigation }: any) => {
  const [time, setTime] = useState(
    moment().utcOffset("+04:00").format("HH:mm")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentSeconds = moment().seconds();
      if (currentSeconds === 0) {
        setTime(moment().utcOffset("+04:00").format("HH:mm"));
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const renderTeamMembers = () => {
    return AboutTeam.Stuff.slice(0, 3).map((item, index) => (
      <LinearGradient
        key={index}
        colors={[
          "rgba(255, 63, 60, 1)",
          "rgba(255, 66, 121, 1)",
          "rgba(223, 58, 154, 1)",
          "rgba(141, 68, 235, 1)",
          "rgba(43, 159, 239, 1)",
        ]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={[
          styles.gradient,
          {
            left: (index + 0.5) * 25,
            zIndex: AboutTeam.Students.length - index,
          },
        ]}
      >
        <Image source={{ uri: item.image }} style={styles.teamMemberImage} />
      </LinearGradient>
    ));
  };

  return (
    <View style={styles.container}>
      <GradientHeader
        title={"CODE8"}
        navigation={navigation}
        showValution={true}
      />
      <Pressable
        onPress={() => navigation.navigate("HomeCard", { routeName: "Teams" })}
      >
        <AnimationCard />
      </Pressable>
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("HomeCard", { routeName: "Agenda" })}
      >
        <AgendaSection />
        <TimeContainer time={time} />
      </Pressable>
      <View style={styles.row}>
        <Pressable style={styles.button} onPress={()=>navigation.navigate("HomeCard",{routeName:"Rules"})}>
          <View style={styles.buttonContent}>
            <SvgRules />
            <Text style={styles.buttonText}>Qaydalar</Text>
          </View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTextContent}>
              Komandadaxili hansı qaydaları bilməliyəm?
            </Text>
          </View>
          <SvgArrow />
        </Pressable>
        <Pressable style={styles.button}>
          <View style={styles.buttonContent}>
            <SvgCareer />
            <Text style={styles.buttonText}>Karyeranı Yüksəlt</Text>
          </View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTextContent}>
              Karyeranı Yüksəlt Təqaüd Proqramı
            </Text>
          </View>
          <SvgArrow />
        </Pressable>
      </View>
      <Pressable
        style={styles.teamContainer}
        onPress={() =>
          navigation.navigate("Information", { routeName: "About" })
        }
      >
        <View style={styles.teamMembers}>{renderTeamMembers()}</View>
        <View style={styles.teamInfo}>
          <Text style={styles.teamInfoText}>Tətbiqdə əməyi keçənlər...</Text>
          <SvgArrow />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
  card: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#C2C2C2",
    padding: 16,
    borderRadius: 16,
    height: 110,
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    gap: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    padding: 16,
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#C2C2C2",
    borderRadius: 16,
  },
  buttonContent: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 4,
    color: "#868686",
    fontSize: 9,
    fontWeight: "600",
    lineHeight: 16,
  },
  buttonTextContainer: {
    width: "90%",
    marginBottom: 12,
    height: 60,
  },
  buttonTextContent: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#000",
    letterSpacing: 0.1,
  },
  teamContainer: {
    backgroundColor: "#fff",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderColor: "#C2C2C2",
    borderRadius: 16,
  },
  teamMembers: {
    justifyContent: "center",
    alignItems: "center",
  },
  teamInfo: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
    gap: 30,
    marginRight: 16,
  },
  teamMemberImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  gradient: {
    width: 42,
    height: 42,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    position: "absolute",
  },
  teamInfoText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    lineHeight: 16,
    letterSpacing: 0.5,
  },
});

export default Home;
