import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { ValuationState, getResultState } from "../redux/data/ValuationSlice";
import SvgTeamIcon from "../assets/icons/teamColorIcon";
import { TeamsModel } from "../models/dataModels";
import GradientHeader from "../components/GradientHeader";

const Result = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector<RootState, ValuationState>(
    (state: any) => state.valuation
  );

  const team = useSelector<RootState, any>((state) => state.team).teams;

  useEffect(() => {
    dispatch(getResultState());
  }, [dispatch]);

  const getTeamColorById = (teamId: string) => {
    const foundTeam = team.find((item: TeamsModel) => item._id === teamId);
    return foundTeam ? foundTeam.color : "#000";
  };

  const sortedData = [...state.result].sort((a, b) => {
    return (
      (b.juryAverage * 20 + b.coachAverage) / 2 -
      (a.juryAverage * 20 + a.coachAverage) / 2
    );
  });

  const renderItem = ({ item }: { item: any }) => (
    <View
      style={[
        styles.teamCard,
        Platform.OS === "android" && styles.androidShadow,
        Platform.OS === "ios" && styles.iosShadow,
      ]}
    >
      <SvgTeamIcon fill={getTeamColorById(item._id)} />
      <View style={{ gap: 4 }}>
        <Text style={styles.nameText}>{item.name}</Text>
        {renderLine("Münsiflərin qiyməti:", item.juryAverage.toFixed(2))}
        {renderLine("Texniki heyət qiyməti:", item.coachAverage.toFixed(2))}
        {renderLine(
          "Ortalama:",
          `${((item.juryAverage * 20 + item.coachAverage) / 2).toFixed(2)}/100`
        )}
      </View>
    </View>
  );

  const renderLine = (label: string, value: string | number) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "72%",
      }}
    >
      <Text style={styles.altLine}>{label}</Text>
      <Text style={styles.result}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <GradientHeader title="Nəticələr" showArrow navigation={navigation} />
      <FlatList
        refreshing={false}
        onRefresh={() => dispatch(getResultState())}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>
            Bu hissədə hər bir komandaya bu vaxta qədər verilmiş ortalama balı
            görə bilərsiniz.
          </Text>
        )}
        data={sortedData}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
  teamCard: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#C2C2C2",
    padding: 16,
    borderRadius: 16,
    width: "95%",
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
  },
  androidShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 15,
  },
  iosShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 15,
    },
  },
  altLine: {
    color: "#868686",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  result: {
    color: "#393939",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    paddingRight: 8,
  },
  nameText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  listHeader: {
    color: "#4B4B4B",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.25,
    padding: 16,
  },
});
