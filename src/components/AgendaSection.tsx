import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import Metrics from "../styling/Metrics";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const AgendaData = [
  {
    id: 1,
    title: "Qeydiyyat",
    time: "08:30 - 09:00",
  },
  {
    id: 2,
    title: "Səhər yeməyi",
    time: "09:00 - 09:45",
  },
  {
    id: 3,
    title: "Açılış mərasimi",
    time: "09:45 - 10:00",
  },
  {
    id: 4,
    title: "Gerisayım başlayır",
    time: "10:00 - 10:01",
  },
  {
    id: 5,
    title: "Hər kəsə uğurlar!",
    time: "10:01 - 12:30",
  },
  {
    id: 6,
    title: "Nahar",
    time: "12:30 - 13:30",
  },
  {
    id: 7,
    title: "Hər kəsə uğurlar!",
    time: "13:30 - 18:00",
  },
  {
    id: 8,
    title: "Gerisayım dayanır",
    time: "18:00 - 18:01",
  },
  {
    id: 9,
    title: "Gerisayım dayanır",
    time: "18:01 - 19:01",
  },
  {
    id: 10,
    title: "“Karyeranı yüksəlt” haqqında məlumat",
    time: "18:30 - 19:00",
  },
  {
    id: 11,
    title: "Lahiyələrin təqdimatı",
    time: "19:00 - 20:30",
  },
  {
    id: 13,
    title: "Qalibin açıqlanması",
    time: "21:00 - 21:01",
  },
];

const SCREEN_HEIGHT = Dimensions.get("window").height;
const viewHeight = SCREEN_HEIGHT < 840 ? 10.5 : 8;

const getCurrentAgendaItem = () => {
  const currentTimeUTC4 = moment().utcOffset(240).format("HH:mm");

  for (const item of AgendaData) {
    const [start, end] = item.time.split(" - ");
    if (currentTimeUTC4 >= start && currentTimeUTC4 <= end) {
      return item.id;
    }
  }

  return null;
};

const getNextAgendaItem = (currentId: number | null) => {
  const currentIndex = AgendaData.findIndex((item) => item.id === currentId);

  if (currentIndex !== -1 && currentIndex < AgendaData.length - 1) {
    return AgendaData[currentIndex + 1].id;
  }

  return null;
};

const Samm = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [nextId, setNextId] = useState<number | null>(null);
  const sectionRef = useRef<SectionList>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSectionIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      sectionRef.current?.scrollToLocation({
        sectionIndex: currentSectionIndex,
        itemIndex: currentSectionIndex,
        viewOffset: 0,
        animated: true,
      });

      const currentAgendaItemId = getCurrentAgendaItem();
      setCurrentId(currentAgendaItemId);

      const nextAgendaItemId = getNextAgendaItem(currentAgendaItemId);
      setNextId(nextAgendaItemId);
    }, 5000);

    const initialCurrentId = getCurrentAgendaItem();
    setCurrentId(initialCurrentId);
    const initialNextId = getNextAgendaItem(initialCurrentId);
    setNextId(initialNextId);

    return () => clearInterval(intervalId);
  }, [currentSectionIndex]);

  const getTitleById = (id: number | null) => {
    const item = AgendaData.find((item) => item.id === id);
    return item ? item.title : "Hər kəsə uğurlar!";
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Carousel
        vertical
        enabled={false}
        width={200}
        height={60}
        autoPlayInterval={3000}
        autoPlay={true}
        data={[
          {
            title: "indi:",
            data: [
              {
                title: getTitleById(currentId),
              },
            ],
          },
          {
            title: "Daha sonra:",
            data: [
              {
                title: getTitleById(nextId),
              },
            ],
          },
        ]}
        scrollAnimationDuration={1500}
        renderItem={({ item }) => (
          <View style={{ width: 200 }}>
            <View
              style={{
                backgroundColor: item.title === "indi:" ? "#228E09" : "#EC7F00",
                width: item.title === "indi:" ? 50 : 100,
                borderRadius: 6,
                justifyContent: "center",
              }}
            >
              <Text style={[styles.sectionHeader]}>{item.title}</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Text style={styles.text}>
                {item.data[0].title.slice(0, 25)}
                {item.data[0].title.length > 25 && "..."}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Samm;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    lineHeight: 20,
    letterSpacing: 0.1,
    marginTop: 10,
  },
  sectionHeader: {
    borderRadius: 6,
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    lineHeight: 20,
    letterSpacing: 0.25,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
