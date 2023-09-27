import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  SectionList,
  Alert,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AboutTeam, MemberType } from "../data/About";
import DevCard from "../components/DevCard";
import * as WebBrowser from "expo-web-browser";

const About = () => {
  const renderItem = ({ item }: { item: MemberType }) => {
    if (item.position === "Developer (Proqramçı)") {
      return <RenderStudent item={item} />;
    } else {
      return <RenderStuff item={item} />;
    }
  };

  const openLinkInBrowser = async (url: string) => {
    try {
      await WebBrowser.openBrowserAsync(url);
    } catch (error) {
      Alert.alert("Link açılmadı");
    }
  };

  const RenderStuff = ({ item }: { item: MemberType }) => {
    return (
      <TouchableOpacity
        onPress={() => openLinkInBrowser(item.linkedIn)}
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
      </TouchableOpacity>
    );
  };

  const RenderStudent = ({ item }: { item: MemberType }) => {
    return (
      <TouchableOpacity
        onPress={() => openLinkInBrowser(item.linkedIn)}
        style={[
          styles.itemContainer,
          Platform.OS === "android" && styles.androidShadow,
          Platform.OS === "ios" && styles.iosShadow,
          { padding: 0 },
        ]}
      >
        <DevCard item={item} />
      </TouchableOpacity>
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
          { title: "Əməkdaşlar (Staff)", data: AboutTeam.Stuff },
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
