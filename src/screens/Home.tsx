import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";
import { StatusBar } from "react-native";
import { Teams } from "../data/Team";
import { TeamsModel } from "../models/TeamsModel";

const Home = () => {
  return (
    <View style={styles.container}>
      <GradientHeader title={"Layihe"} />
      <FlatList
        data={Teams}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{
          paddingBottom: 20,
          paddingTop: 20,
          flexGrow: 1,
        }}
        renderItem={({ item }: { item: TeamsModel }) => {
          return (
            <View style={styles.teamCard}>
              <Image
                source={item.teamPic}
                style={{
                  width: 75,
                  height: 75,
                  resizeMode: "contain",
                  borderRadius: 38,
                }}
              />
            </View>
          );
        }}
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
    flexDirection: "row",
    padding: 16,
    borderWidth: 1,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 16,
    alignItems: "center",
  },
});
