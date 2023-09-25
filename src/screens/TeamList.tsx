import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TeamsModel } from "../models/dataModels";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { TeamState, getTeamState } from "../redux/data/TeamSlice";
import SvgTeamIcon from "../assets/icons/teamColorIcon";
import Metrics from "../styling/Metrics";

const TeamList = ({ navigation }: any) => {
  const teamState = useSelector<RootState, TeamState>((state) => state.team);
  const dispatch = useDispatch<AppDispatch>();

  const renderVerticalItem = ({ item }: { item: TeamsModel }) => {
    return (
      <TouchableOpacity
        style={[
          styles.teamCard,
          Platform.OS === "android" && styles.androidShadow,
          Platform.OS === "ios" && styles.iosShadow,
        ]}
        onPress={() =>
          navigation.navigate("MemberList", {
            teamName: item.name,
            teamId: item._id,
          })
        }
      >
        <SvgTeamIcon fill={item.color} />
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
                  {member.name}
                  {index < 30 ? ", " : ""}
                </Text>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {teamState.loading ? (
        <View
          style={[
            styles.container,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <ActivityIndicator size="large" color="gray" />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            refreshing={false}
            onRefresh={() => {
              dispatch(getTeamState());
            }}
            data={teamState.teams}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={renderVerticalItem}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            ListHeaderComponent={() => <View style={{ height: 32 }} />}
            ListFooterComponent={() => <View style={{ height: 50 }} />}
          />
        </View>
      )}
    </>
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
    alignItems: "center",
  },
  teamName: {
    fontSize: 16 * Metrics.rem,
    fontWeight: "500",
    color: "#000",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  memberName: {
    fontSize: 14 * Metrics.rem,
    color: "#868686",
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
