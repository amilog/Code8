import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GradientHeader from "../components/GradientHeader";
import SvgFocusedTab from "../icons/FocusedNavigation";

const Information = () => {
  const [focusedItem, setFocusedItem] = useState("");

  useEffect(() => {
    setFocusedItem("Son hackathon");
  }, []);

  return (
    <View style={styles.container}>
      <GradientHeader title={"Melumat"} />
      <View
        style={{
          borderBottomWidth: 0.5,
          height: 70,
          borderBottomColor: "#F3D1FF",
        }}
      >
        <FlatList
          style={{ marginTop: 10 }}
          horizontal
          data={["Son hackathon", "Karyerani yukselt"]}
          renderItem={({ item }: { item: string }) => {
            const isFocused = focusedItem === item;
            return (
              <TouchableOpacity
                onPress={() => setFocusedItem(item)}
                style={{
                  height: 50,
                  width: Dimensions.get("window").width / 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    color: isFocused ? "#6750A4" : "#49454F",
                  }}
                >
                  {item}
                </Text>
                {isFocused && (
                  <View style={{ position: "absolute", bottom: -10 }}>
                    <SvgFocusedTab />
                  </View>
                )}
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
      {focusedItem === "Son hackathon" ? (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E" }}>
            Son hackathon
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E" }}>
            2021-04-10
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E" }}>
            2021-04-11
          </Text>
        </View>
      ) : (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E" }}>
            Karyerani yukselt
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E" }}>
            2021-04-10
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#5E5E5E" }}>
            2021-04-11
          </Text>
        </View>
      )}
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
