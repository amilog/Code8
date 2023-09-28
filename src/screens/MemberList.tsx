import {
  FlatList,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect } from "react";
import GradientHeader from "../components/GradientHeader";
import { StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getTeamByIdState } from "../redux/data/TeamSlice";
import { MembersModel } from "../models/dataModels";
import MemberCard from "../components/MemberCard";
import Skleton from "../components/Skeleton";

const MemberList = ({ navigation, route }: any) => {
  const { teamName, teamId } = route.params;

  const state = useSelector<RootState, any>((state: any) => state.team);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTeamByIdState(teamId));
  }, []);

  const renderItem = ({ item }: { item: MembersModel }) => {
    return <MemberCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <GradientHeader
        title={teamName}
        showArrow={true}
        navigation={navigation}
      />
      {state.byIdLoading ? (
        <View style={styles.loadingContainer}>
          <Skleton />
          <Skleton />
          <Skleton />
          <Skleton />
        </View>
      ) : (
        <FlatList
          refreshing={false}
          onRefresh={() => dispatch(getTeamByIdState(teamId))}
          data={state.team.members}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <View style={{ height: 16 }} />}
          ListFooterComponent={() => <View style={{ height: 50 }} />}
          initialNumToRender={6}
          keyExtractor={(item) => item._id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
      )}
    </View>
  );
};

export default MemberList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 2,
    marginTop: 16,
    gap: 12,
  },
});
