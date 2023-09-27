import {
  Dimensions,
  FlatList,
  Keyboard,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import GradientHeader from "../components/GradientHeader";
import BottomSheet, { BottomSheetRefProps } from "../components/BottomSheet";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { TeamState } from "../redux/data/TeamSlice";
import SvgTeamIcon from "../assets/icons/teamColorIcon";
import Metrics from "../styling/Metrics";
import { TeamsModel } from "../models/dataModels";
import Rate from "../components/Rate";
import SvgOldu from "../assets/icons/postButton";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { postJuryValuateState } from "../redux/data/ValuationSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height } = Dimensions.get("window");
const JuryValuation = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<BottomSheetRefProps>(null);
  const teams = useSelector<RootState, TeamState>((state) => state.team);
  const state = useSelector<RootState, any>((state) => state.valuation);

  const [rating, setRating] = useState<{
    teamId: string;
    rating: number[];
  }>({
    teamId: "",
    rating: [0, 0, 0, 0, 0],
  });
  const [selectedTeamId, setSelectedTeamId] = useState<string>("");
  useEffect(() => {
    if (!ref.current?.isActive()) {
      setRating({
        teamId: "",
        rating: [0, 0, 0, 0, 0],
      });
    }
  }, [ref.current?.isActive()]);

  const renderVerticalItem = ({ item }: { item: TeamsModel }) => {
    const toggleSheet = () => {
      Keyboard.dismiss();
      ref?.current?.scrollTo(-height + 50);
    };

    const juryValuationItem = state.juryValuation.find(
      (rating: any) => rating.toTeam._id === item._id
    );

    const averageScore = juryValuationItem
      ? Number(juryValuationItem.givenScore) / 5
      : "(təyin olunmayıb)";

    return (
      <TouchableOpacity
        disabled={juryValuationItem ? true : false}
        style={[
          styles.teamCard,
          {
            backgroundColor: juryValuationItem ? "#F3F3F3" : "#fff",
          },
          Platform.OS === "android" && styles.androidShadow,
          Platform.OS === "ios" && styles.iosShadow,
        ]}
        onPress={() => {
          setSelectedTeamId(item._id);
          toggleSheet();
        }}
      >
        <SvgTeamIcon fill={item.color} />
        <View style={styles.teamLabel}>
          <Text style={styles.teamName}>{item.name}</Text>
          <Text style={styles.altLine}>
            Ortalama:{" "}
            <Text
              style={{
                fontWeight: "500",
                color: "#393939",
              }}
            >
              {averageScore}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListHeader = () => (
    <Text style={styles.listHeader}>
      Zəhmət olmasa əvvəlcədən sizə verilmiş başlıqlar üzrə hər bir komandanı
      qiymətləndirin. “Yadda saxla” düyməsinə klik edənə qədər verdiyiniz
      qiymətdə <Text style={styles.boldText}>dəyişiklik edə bilərsiniz</Text>.
      Lakin “Yadda saxla” düyməsinə klik etdikdən sonra seçiminizi{" "}
      <Text style={styles.boldText}>dəyişə bilməyəcəksiniz.</Text>
    </Text>
  );

  return (
    <View style={styles.container}>
      <FlashMessage />
      <GradientHeader
        title="Qiymətləndirmə"
        navigation={navigation}
        showArrow={true}
      />
      <FlatList
        data={teams.teams}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
        renderItem={renderVerticalItem}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
        keyExtractor={(item) => item._id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <BottomSheet ref={ref}>
        <ScrollView style={{ flex: 1, zIndex: 90 }}>
          <Text style={styles.sheetHeader}>
            Zəhmət olmasa, komandanı verilmiş suallar üzrə 5 bal üzərindən
            qiymətləndirin{" "}
            <Text style={{ fontWeight: "600", color: "#393939" }}>
              (Yadda saxla düyməsinə klik etdikdən sonra qiymətləndirməni dəyişə
              bilmərsiniz).
            </Text>
          </Text>
          <View style={styles.question}>
            <Text style={styles.questionText}>
              1 - İnnovativ yanaşma və texnologiyalardan nə dərəcədə istifadə
              olunub? (user interface)
            </Text>
            <Rate
              value={rating.rating[0]}
              onChange={(rate) => {
                setRating((prevRatings) => {
                  const newRatings = { ...prevRatings };
                  newRatings.teamId = selectedTeamId;
                  newRatings.rating[0] = rate;
                  return newRatings;
                });
              }}
            />
          </View>
          <View style={styles.question}>
            <Text style={styles.questionText}>
              2 - Funksionallıq cəhətdən uyğunluğunu necə qiymətləndirirsiniz?
              (usability)
            </Text>
            <Rate
              value={rating.rating[1]}
              onChange={(rate) => {
                setRating((prevRatings) => {
                  const newRatings = { ...prevRatings };
                  newRatings.teamId = selectedTeamId;
                  newRatings.rating[1] = rate;
                  return newRatings;
                });
              }}
            />
          </View>
          <View style={styles.question}>
            <Text style={styles.questionText}>
              3 - İstifadəçi təhlükəsizliyini necə qiymətləndirirsiniz? (user
              security)
            </Text>
            <Rate
              value={rating.rating[2]}
              onChange={(rate) => {
                setRating((prevRatings) => {
                  const newRatings = { ...prevRatings };
                  newRatings.teamId = selectedTeamId;
                  newRatings.rating[2] = rate;
                  return newRatings;
                });
              }}
            />
          </View>
          <View style={styles.question}>
            <Text style={styles.questionText}>
              4 - Əlçatanlıq cəhətdən necə qiymətləndirirsiniz? (accessibility)
            </Text>
            <Rate
              value={rating.rating[3]}
              onChange={(rate) => {
                setRating((prevRatings) => {
                  const newRatings = { ...prevRatings };
                  newRatings.teamId = selectedTeamId;
                  newRatings.rating[3] = rate;
                  return newRatings;
                });
              }}
            />
          </View>
          <View style={styles.question}>
            <Text style={styles.questionText}>
              5 - Komandanın təqdimat bacarığını necə qiymətləndirirsiniz? (soft
              skills)
            </Text>
            <Rate
              value={rating.rating[4]}
              onChange={(rate) => {
                setRating((prevRatings) => {
                  const newRatings = { ...prevRatings };
                  newRatings.teamId = selectedTeamId;
                  newRatings.rating[4] = rate;
                  return newRatings;
                });
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (rating.rating.includes(0)) {
                showMessage({
                  message: "Bütün suallara cavab verin",
                  type: "danger",
                  icon: "danger",
                });
              } else {
                showMessage({
                  message: "Qiymətləndirməniz qeydə alındı",
                  type: "success",
                  icon: "success",
                });
                const sum = rating.rating.reduce((a, b) => a + b, 0);
                AsyncStorage.getItem("secure_deviceid").then((deviceId) => {
                  if (deviceId) {
                    dispatch(
                      postJuryValuateState({
                        id: rating.teamId,
                        score: sum,
                        deviceId: deviceId,
                      })
                    );
                    ref?.current?.scrollTo(0);
                  }
                });
              }
            }}
          >
            <SvgOldu />
          </TouchableOpacity>
          <View style={{ height: 50 }} />
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default JuryValuation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
  button: {
    alignSelf: "center",
    marginTop: Platform.OS == "android" ? 24 : 32,
    marginBottom: 16,
  },
  separator: {
    height: 12,
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
  teamName: {
    fontSize: 16 * Metrics.rem,
    fontWeight: "500",
    color: "#000",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  teamLabel: {
    marginLeft: 16,
    gap: 6,
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
  altLine: {
    color: "#868686",
    fontSize: 14 * Metrics.rem,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  sheetHeader: {
    color: "#868686",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.3,
    paddingHorizontal: 16,
  },
  question: {
    marginTop: Platform.OS === "android" ? 18 : 24,
    paddingHorizontal: 16,
  },
  questionText: {
    color: "#393939",
    fontSize: Platform.OS === "android" ? 12 : 14,
    fontWeight: "500",
    lineHeight: Platform.OS === "android" ? 16 : 20,
    letterSpacing: 0.1,
    marginBottom: 16,
  },
});
