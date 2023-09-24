import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import UiUxIcon from "../assets/icons/taskCardIcons/UiUxIcon";
import CircleArrow from "../assets/icons/circleArrow";
import { Dimensions } from "react-native";

interface TaskCardProps {
  title: string;
  onPress: () => void;
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const textContainerHeight = SCREEN_HEIGHT < 800 ? "85%" : "66%";

const TaskCard = ({ title, onPress }: TaskCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.view}>
        <UiUxIcon style={styles.iconStyle} />
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
    justifyContent: "space-between",
    padding: 16,
    width: "95%",
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 8,
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
