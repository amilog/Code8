import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CircleArrow from "../assets/icons/circleArrow";
import { Dimensions } from "react-native";

interface TaskCardProps {
  title: string;
  icon: JSX.Element;
}
const SCREEN_HEIGHT = Dimensions.get("window").height;
const textContainerHeight = SCREEN_HEIGHT < 840 ? "70%" : "75%";

const TaskCard =({ title, icon }: TaskCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View style={styles.view}>
      <View style={styles.iconStyle}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <CircleArrow style={styles.arrowIconStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    padding: 18,
    width: "95%",
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 4,
    width: textContainerHeight,
  },
  arrowIconStyle: {
    width: 24,
    height: 24,
  },
});

export default TaskCard;
