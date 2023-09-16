import {
  StyleSheet,
  View,
  Platform,
  Text,
  SectionList,
  Button,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import GradientHeader from "../components/GradientHeader";
import { StatusBar } from "react-native";
import moment from "moment";
import AgendaSection from "../components/AgendaSection";
import TimeContainer from "../components/TimeContainer";
import AnimationCard from "../components/AnimationCard";

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

  return (
    <View style={styles.container}>
      <GradientHeader
        title={"CODE8"}
        navigation={navigation}
        showValution={true}
      />
      
      <AnimationCard />
      <View style={styles.card}>
        <AgendaSection />
        <TimeContainer time={time} />
      </View>
      <Button
        title="Go to Teams"
        onPress={() => navigation.navigate("MemberList")}
      />
    </View>
  );
};

export default Home;

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
  },

  timeContainer: {
    backgroundColor: "red",
    width: 70,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
