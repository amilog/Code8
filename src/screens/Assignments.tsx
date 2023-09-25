import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import UiUxIcon from "../assets/icons/taskCardIcons/UiUxIcon";
import BackendIcon from "../assets/icons/taskCardIcons/BackendIcon";
import CyberSecIcon from "../assets/icons/taskCardIcons/CyberSecIcon";
import DataScienceIcon from "../assets/icons/taskCardIcons/DataScienceIcon";
import FrontIcon from "../assets/icons/taskCardIcons/FrontIcon";
import MobileIcon from "../assets/icons/taskCardIcons/MobileIcon";
import TaskCard from "../components/TaskCard";

interface TaskData {
  title: string;
  icon: JSX.Element;
}

const taskData: TaskData[] = [
  { title: "UX/UI üzrə texniki tapşırıq", icon: <UiUxIcon /> },
  { title: "Front-end üzrə texniki tapşırıq", icon: <FrontIcon /> },
  { title: "Backend üzrə texniki tapşırıq", icon: <BackendIcon /> },
  { title: "Mobile developer üzrə texniki tapşırıq", icon: <MobileIcon /> },
  { title: "Data Science üzrə texniki tapşırıq", icon: <DataScienceIcon /> },
  { title: "Cyber Security üzrə texniki tapşırıq", icon: <CyberSecIcon /> },
];

const Assignments = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={taskData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListHeaderComponent={() => <View style={{ height: 32 }} />}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
        renderItem={({ item, index }) => (
          <TaskCard title={item.title} icon={item.icon} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Assignments;
