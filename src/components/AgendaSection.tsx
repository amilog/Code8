import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import Metrics from "../styling/Metrics";
import { heightPercentageToDP } from "react-native-responsive-screen";

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
    time: "10:00",
  },
  {
    id: 5,
    title: "Hər kəsə uğurlar!",
    time: "10:00 - 12:30",
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
    title: "Şam yeməyi",
    time: "18:00 - 19:00",
  },
  {
    id: 9,
    title: "Gerisayım dayanır",
    time: "19:00",
  },
  {
    id: 10,
    title: "Təqdimat",
    time: "19:00 - 20:30",
  },
  {
    id: 11,
    title: "Diplom və sertifikatların verilməsi",
    time: "20:30 - 21:00",
  },
  {
    id: 12,
    title: "Qalibin açıqlanması",
    time: "21:00",
  },
];

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
    <SectionList
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
      ref={sectionRef}
      SectionSeparatorComponent={() => <View style={{ height: 8 }} />}
      sections={[
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
      keyExtractor={(item, index) => `${item.title}-${index}`}
      renderItem={({ item }) => (
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )}
      style={{
        height: 60,
      }}
      renderSectionHeader={({ section: { title } }) => (
        <View
          style={{
            backgroundColor: title === "indi:" ? "#228E09" : "#EC7F00",
            width: title === "indi:" ? 50 : 100,
            borderRadius: 6,
            justifyContent: "center",
          }}
        >
          <Text style={[styles.sectionHeader]}>{title}</Text>
        </View>
      )}
    />
  );
};

export default Samm;

const styles = StyleSheet.create({
  text: {
    fontSize: 14 * Metrics.rem,
    fontWeight: "500",
    color: "#000",
    lineHeight: 20,
    letterSpacing: 0.1,
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
