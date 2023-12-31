import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import UiUxIcon from "../assets/icons/taskCardIcons/UiUxIcon";
import BackendIcon from "../assets/icons/taskCardIcons/BackendIcon";
import CyberSecIcon from "../assets/icons/taskCardIcons/CyberSecIcon";
import DataScienceIcon from "../assets/icons/taskCardIcons/DataScienceIcon";
import FrontIcon from "../assets/icons/taskCardIcons/FrontIcon";
import MobileIcon from "../assets/icons/taskCardIcons/MobileIcon";
import TaskCard from "../components/TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Text } from "react-native";

interface TaskData {
  title: string;
  icon: JSX.Element;
  screen: string;
}

const taskData: TaskData[] = [
  { title: "UX/UI üzrə texniki tapşırıq", icon: <UiUxIcon />, screen: "UiUx" },
  {
    title: "Front-End üzrə texniki tapşırıq",
    icon: <FrontIcon />,
    screen: "Frontend",
  },
  {
    title: "Back-End üzrə texniki tapşırıq",
    icon: <BackendIcon />,
    screen: "Backend",
  },
  {
    title: "Mobile Development üzrə texniki tapşırıq",
    icon: <MobileIcon />,
    screen: "Mobile",
  },
  {
    title: "Data Science üzrə texniki tapşırıq",
    icon: <DataScienceIcon />,
    screen: "DataScience",
  },
  {
    title: "Cyber Security üzrə texniki tapşırıq",
    icon: <CyberSecIcon />,
    screen: "CyberSec",
  },
];

const Assignments = () => {
  const state = useSelector<RootState, any>((state: any) => state.valuation);

  return (
    <View style={styles.container}>
      {state.isStarted[0].start ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={taskData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          ListHeaderComponent={() => <View style={{ height: 32 }} />}
          ListFooterComponent={() => <View style={{ height: 50 }} />}
          renderItem={({ item, index }) => (
            <TaskCard
              title={item.title}
              icon={item.icon}
              screen={item.screen}
            />
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>
            Yarışmanın başlamasını gözləyin...
          </Text>
        </View>
      )}
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
