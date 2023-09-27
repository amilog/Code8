import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GradientHeader from "../components/GradientHeader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { TeamState } from "../redux/data/TeamSlice";
import CoachValuateCard from "../components/CoachValuateCard";
import {
  ValuationState,
  getCoachValuationState,
} from "../redux/data/ValuationSlice";
import FlashMessage, { showMessage } from "react-native-flash-message";

const CoachValuation = ({ navigation, route }: any) => {
  const teams = useSelector<RootState, TeamState>((state) => state.team);
  const state = useSelector<RootState, ValuationState>(
    (state) => state.valuation
  );
  const type: string = route.params.type;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCoachValuationState(type));
  }, []);

  if (state.loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="small" color="#FF647C" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <FlashMessage />
      <GradientHeader
        title="Qiymətləndirmə"
        navigation={navigation}
        showArrow={true}
      />
      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <FlatList
          data={teams.teams}
          scrollEnabled={false}
          ListHeaderComponent={renderListHeader}
          ListFooterComponent={() => <View style={{ height: 80 }} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }: any) => (
            <CoachValuateCard
              showSucessMessage={() => {
                showMessage({
                  message: "Qiymətləndirməniz uğurla qeydə alındı",
                  type: "success",
                  icon: "success",
                });
              }}
              showFailureMessage={() => {
                showMessage({
                  message: "Qiymətləndirmənin doğru olduğundan əmin olun",
                  type: "danger",
                  icon: "danger",
                });
              }}
              givenScore={
                state.coachValuation.find((x) => x.toTeam._id === item._id)
                  ?.givenScore
              }
              item={item}
              type={type}
            />
          )}
          keyExtractor={(item) => item._id.toString()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const renderListHeader = () => (
  <Text style={styles.listHeader}>
    Zəhmət olmasa təyin etdiyiniz texniki tapşırıq üzrə hər bir komandanı
    qiymətləndirin. “Yadda saxla” düyməsinə klik edənə qədər verdiyiniz qiymətdə{" "}
    <Text style={styles.boldText}>dəyişiklik edə bilərsiniz</Text>. Lakin “Yadda
    saxla” düyməsinə klik etdikdən sonra seçiminizi{" "}
    <Text style={styles.boldText}>dəyişə bilməyəcəksiniz.</Text>
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
  separator: {
    height: 12,
  },
  listHeader: {
    padding: 16,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  boldText: {
    fontWeight: "500",
  },
});

export default CoachValuation;
