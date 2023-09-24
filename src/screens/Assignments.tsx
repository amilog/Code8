import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { SVGProps } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { TeamState } from "../redux/data/TeamSlice";
import Metrics from "../styling/Metrics";
import TaskCard from "../components/TaskCard";

const Assignments = () => {
  return (
    <View style={styles.container}>
 
    </View>
  );
};

export default Assignments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
