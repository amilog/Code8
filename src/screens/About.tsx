import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  SectionList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AboutTeam, DeveloperType, StuffType } from "../data/About";

const About = () => {
  const renderItem = ({ item }: { item: DeveloperType | StuffType }) => {
    if (item.position === "Developer (Proqramçı)") {
      return <RenderStudent item={item} />;
    } else {
      return <RenderStuff item={item} />;
    }
  };

  const RenderStuff = ({ item }: { item: StuffType }) => {
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

  const RenderStudent = ({ item }: { item: DeveloperType }) => {
    return (
      <LinearGradient
        colors={[
          "rgba(255, 63, 60, 1)",
          "rgba(223, 58, 154, 1)",
          "rgba(141, 68, 235, 1)",
          "rgba(43, 159, 239, 1)",
        ]}
        end={{ x: 1, y: 0.5 }}
        start={{ x: 0, y: 0.9 }}
        locations={[0.2, 0.6, 0.9, 1]}
        style={[
          styles.itemContainer,
          Platform.OS === "android" && styles.androidShadow,
          Platform.OS === "ios" && styles.iosShadow,
        ]}
      >
        <Image
          source={{ uri: item.image }}
          style={[
            styles.image,
            { width: 50, height: 50, borderWidth: 1, borderColor: "#000" },
          ]}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.nameText, { color: "#fff" }]}>{item.name}</Text>
          <Text style={[styles.positionText, { color: "#dddddd" }]}>
            {item.position}
          </Text>
        </View>
      </LinearGradient>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>
        Bu tətbiq aşağıdakı <Text style={styles.boldText}>Code Academy</Text>{" "}
        əməkdaşları və tələbələri tərəfindən hazırlanmışdır.
      </Text>
      <SectionList
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
        sections={[
          { title: "Tələbələr (Students)", data: AboutTeam.Students },
          { title: "Əməkdaşlar (Stuff)", data: AboutTeam.Stuff },
        ]}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
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
  sectionHeader: {
    color: "#4B4B4B",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.25,
    marginTop: 24,
    marginLeft: 16,
  },
});

export default About;
