import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GradientHeader from "../components/GradientHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TeamState } from "../redux/data/TeamSlice";
import CoachValuateCard from "../components/CoachValuateCard";
import SvgSaveButton from "../assets/icons/saveButton";

const CoachValuation = ({ navigation, route }: any) => {
  const teams = useSelector<RootState, TeamState>((state) => state.team);
  const type: string = route.params.type;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <GradientHeader
        title="Qiymətləndirmə"
        navigation={navigation}
        showArrow={true}
      />
      <FlatList
        data={teams.teams}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={renderListFooter}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }: any) => (
          <CoachValuateCard item={item} type={type} />
        )}
        keyExtractor={(item) => item._id.toString()}
      />
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

const renderListFooter = () => (
  <TouchableOpacity style={styles.saveButtonContainer}>
    <SvgSaveButton />
  </TouchableOpacity>
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
  saveButtonContainer: {
    alignSelf: "center",
    marginVertical: 16,
  },
});

export default CoachValuation;
