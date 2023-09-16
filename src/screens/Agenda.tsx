import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AgendaData } from "../data/Agenda";

const Agenda = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.header}>Agenda</Text>
      <View style={styles.agenda}>
        {AgendaData.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: "row" }}>
              <Text style={styles.text}>{item.time}</Text>
              <Text style={[styles.text, { fontWeight: "400" }]}>
                {" – "}
                {item.title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Agenda;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "400",
    color: "#000",
    lineHeight: 28,
    marginTop: 16,
  },
  agenda: {
    width: "100%",
    marginTop: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});
