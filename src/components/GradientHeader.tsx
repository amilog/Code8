import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import SvgBackArrow from "../assets/icons/backArrow";
import SvgValutionButton from "../assets/icons/valution";

const GradientHeader = ({
  title,
  navigation,
  showArrow = false,
  showValution = false,
}: {
  title: string;
  navigation?: any;
  showArrow?: boolean;
  showValution?: boolean;
}) => {
  return (
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
      style={styles.grediant}
    >
      <View style={styles.titleContainer}>
        <View style={{ flexDirection: "row", gap: 16 }}>
          {showArrow && (
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() => navigation.goBack()}
            >
              <SvgBackArrow />
            </TouchableOpacity>
          )}
          <Text style={styles.titleText}>{title}</Text>
        </View>
        {showValution && (
          <TouchableOpacity
            style={{ alignItems: "center", marginBottom: 8 }}
            onPress={() => {
              navigation.navigate("ValuationStack");
            }}
          >
            <SvgValutionButton />
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

export default GradientHeader;

const styles = StyleSheet.create({
  grediant: {
    height: 80,
    width: "100%",
  },
  titleContainer: {
    backgroundColor: "#fff",
    flex: 1.0,
    width: "100%",
    marginBottom: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    justifyContent: "space-between",
  },
  titleText: {
    color: "#000",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 36,
  },
});
