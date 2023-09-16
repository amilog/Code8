import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Teams } from "../data/Team";
import { TeamsModel } from "../models/TeamsModel";
import { StatusBar } from "react-native";
import { Dimensions } from "react-native";
import GradientHeader from "../components/GradientHeader";

const TeamList = ({ navigation }: any) => {
  const renderVerticalItem = ({ item }: { item: TeamsModel }) => {
    return (
      <TouchableOpacity
        style={[
          styles.teamCard,
          Platform.OS === "android" && styles.androidShadow,
          Platform.OS === "ios" && styles.iosShadow,
        ]}
        onPress={() =>
          navigation.navigate("MemberList", { teamName: item.name })
        }
      >
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
      <FlatList
        data={Teams}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={renderVerticalItem}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListHeaderComponent={() => <View style={{ height: 32 }} />}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
      />
    </View>
  );
};

export default TeamList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  teamCard: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#C2C2C2",
    padding: 16,
    borderRadius: 16,
    width: "95%",
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  teamName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  memberName: {
    fontSize: 16,
    color: "#868686",
  },
  teamPic: {
    width: 64,
    height: 64,
    resizeMode: "contain",
    borderRadius: 32,
  },
  teamLabel: {
    marginLeft: 16,
    gap: 6,
  },
  memberLabel: {
    flexDirection: "row",
    alignItems: "center",
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
});
