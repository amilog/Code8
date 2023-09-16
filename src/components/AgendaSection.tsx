import { SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const samm = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionRef = useRef<SectionList>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSectionIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      sectionRef.current?.scrollToLocation({
        sectionIndex: currentSectionIndex,
        itemIndex: 0,
        viewOffset: 0,
        animated: true,
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSectionIndex]);

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
              title: "Tasklarin ve Texniki tapsiriqlarin yoxlanilmasi",
            },
          ],
        },
        {
          title: "Daha sonra:",
          data: [
            {
              title: "Neticelerin Hesablanmasi ve qaliblerin aciqlanmasi",
            },
          ],
        },
      ]}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          style={[
            styles.sectionHeader,
            {
              backgroundColor: title === "indi:" ? "#228E09" : "#EC7F00",
              width: title === "indi:" ? 50 : 100,
            },
          ]}
        >
          {title}
        </Text>
      )}
    />
  );
};

export default samm;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    lineHeight: 20,
    letterSpacing: 0.1,
    width: "80%"
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    lineHeight: 20,
    letterSpacing: 0.25,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
});
