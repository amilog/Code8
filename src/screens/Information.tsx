import { FlatList, StatusBar, StyleSheet, View, Text, Dimensions } from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";

const Information = () => {
  return (
    <View style={styles.container}>
      <GradientHeader title={"Melumat"} />
      <FlatList
        style={{ marginTop: 10 }}
        horizontal
        data={["Son hackathon", "Karyerani yukselt"]}
        renderItem={({ item }: { item: string }) => {
          return (
            <View
              style={{
                height: 50,
                width: Dimensions.get("window").width / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{
                fontSize:18,
                fontWeight: "500",
                color: "#49454F",
              }}>{item}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight! + 20,
  },
});
