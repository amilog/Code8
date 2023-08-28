import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";
import { StatusBar } from "react-native";
import { Teams } from "../data/Team";
import { TeamsModel } from "../models/TeamsModel";

const Home = () => {
  const renderVerticalItem = ({ item }: { item: TeamsModel }) => {
    return (
      <TouchableOpacity style={styles.teamCard}>
        <Image source={item.teamPic} style={styles.teamPic} />
        <View style={styles.teamLabel}>
          <Text style={styles.teamName}>{item.name}</Text>
          <View style={styles.memberLabel}>
            {item.members.slice(0, 3).map((member, index) => {
              if (index === 2) {
                return (
                  <Text key={member._id} style={styles.memberName}>
                    ...
                  </Text>
                );
              }
              return (
                <Text key={member._id} style={styles.memberName}>
                  {member.fullName}
                  {", "}
                </Text>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <GradientHeader title={"Layihe"} />
      <FlatList
        data={Teams}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderVerticalItem}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight! + 20,
  },
  teamCard: {
    width: "95%",
    height: Dimensions.get("window").height / 7,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    padding: 16,
  },

  teamName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  memberName: {
    fontSize: 16,
    color: "#868686",
  },
  teamPic: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    borderRadius: 38,
  },
  teamLabel: {
    height: 69,
    marginLeft: 16,
    gap: 6,
  },
  contentContainerStyle: {
    paddingBottom: 20,
    paddingTop: 20,
    flexGrow: 1,
  },
  memberLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
});
