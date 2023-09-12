import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AboutTeam, AboutTeamType } from "../data/About";

const About = () => {
  const renderItem = ({ item }: { item: AboutTeamType }) => {
    return (
      <View
        style={[
          styles.itemContainer,
          Platform.OS === "android" && styles.androidShadow,
          Platform.OS === "ios" && styles.iosShadow,
        ]}
      >
        <LinearGradient
          colors={[
            "rgba(255, 63, 60, 1)",
            "rgba(255, 66, 121, 1)",
            "rgba(223, 58, 154, 1)",
            "rgba(141, 68, 235, 1)",
            "rgba(43, 159, 239, 1)",
          ]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.gradient}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </LinearGradient>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.positionText}>{item.position}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>
        Bu tətbiq aşağıdakı <Text style={styles.boldText}>Code Academy</Text>{" "}
        əməkdaşları və tələbələri tərəfindən hazırlanmışdır.
      </Text>
      <FlatList
        scrollEnabled={false}
        ListFooterComponent={<View style={{ height: 50 }} />}
        ListHeaderComponent={<View style={{ height: 10 }} />}
        data={AboutTeam}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 14,
    fontWeight: "400",
    color: "#4b4b4b",
    lineHeight: 20,
    letterSpacing: 0.25,
    marginHorizontal: 16,
    marginTop: 16,
  },
  boldText: {
    fontWeight: "600",
    color: "#4b4b4b",
  },
  itemContainer: {
    flexDirection: "row",
    borderWidth: 0.5,
    marginVertical: 6,
    borderColor: "#C2C2C2",
    padding: 16,
    borderRadius: 16,
    width: "95%",
    height: 80,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  gradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 25,
  },
  textContainer: {
    justifyContent: "space-between",
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: "#000",
  },
  positionText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontWeight: "400",
    color: "#868686",
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

export default About;
