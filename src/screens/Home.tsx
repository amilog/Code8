import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
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
                  width: '24%',
                  height: '100%',
                  resizeMode: "contain",
                  borderRadius: Dimensions.get("window").height / 2
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
    width: "85%",
    height: Dimensions.get("window").height / 8,
    // height: 96
    flexDirection: "row",
    padding:16,
    borderWidth: 1,
    alignSelf: "center",
  },
});
