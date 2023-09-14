import { StyleSheet, View, Platform, Text, SectionList } from "react-native";
import React, { useState, useEffect } from "react";
import GradientHeader from "../components/GradientHeader";
import { StatusBar } from "react-native";
import moment from "moment";

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
      <View style={styles.card}>
        <SectionList
          sections={[
            {
              title: "indi:",
              data: [
                {
                  title: "Tasklarin ve Texniki tapsiriqlarin yoxlanilmasi",
                },
              ],
            },
            {
              title: "sonra:",
              data: [
                {
                  title:
                    "Neticelerin Hesablanmasi ve qaliblerin aciqlanmasi",
                },
              ],
            },
          ]}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
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
    height: 85,
    marginHorizontal: 16,
  },
  text: {
    width: "70%",
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "400",
    color: "#4b4b4b",
    lineHeight: 20,
    letterSpacing: 0.25,
    width: "30%",
  },
  timeContainer: {
    backgroundColor: "red",
    width: 70,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
