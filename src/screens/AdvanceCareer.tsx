import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fields } from "../data/Fields";
import SvgTechnest from "../assets/icons/TechnesLogo";
import SvgCodeAcademy from "../assets/icons/codeAcademyLogo";
import SvgInksaf from "../assets/icons/inksafAgentliyi";
import { codeFields } from "../data/codeFields";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const AdvanceCareer = () => {
  const renderFields = (data: string[]) => {
    return data.map((field, index) => (
      <Animated.View
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(500)}
        key={index}
        style={styles.fieldContainer}
      >
        <Text style={[styles.sectionText, { fontWeight: "500" }]}>
          {index + 1}. {field}
        </Text>
      </Animated.View>
    ));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={require("../assets/images/KaryeranıYüksəlt.jpg")}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          “Karyeranı Yüksəlt Təqaüd Proqramı” haqqında məlumat
        </Text>
        <Text style={styles.sectionText}>
          İnnovasiya və Rəqəmsal İnkişaf Agentliyinin Technest proqramı
          çərçivəsində Code Academy-nin uğurla həyata keçirtdiyi Karyeranı
          Yüksəlt Təqaüd Proqramı karyerasını inkişaf etdirərək, iş həyatında
          yüksəlmək istəyən şəxslər üçün nəzərdə tutulub. Bu təqaüd proqramı
          çərçivəsində IT sektorunda geniş iş imkanları olan 7 sahə üzrə tədris
          keçiriləcək. Karyerasının ilkin mərhələsində olan şəxslər tədrisə
          qoşulmaqla, bilik və bacarıqlarını artıraraq əmək bazarında daha yaxşı
          iş imkanı əldə edə biləcəklər. Technest layihəsi çərçivəsində həyata
          keçirilən bu proqrama qoşulan hər kəs 70% təqaüd qazanacaq. Təqaüd
          proqramından ümumilikdə 105 nəfər faydalana biləcək.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionText, { marginTop: 15 }]}>
          Tədris sahələri aşağıdakılardır:
        </Text>
        {renderFields(Fields)}
      </View>
      <View style={styles.logos}>
        <SvgTechnest />
        <SvgCodeAcademy />
        <SvgInksaf />
      </View>
      <Image
        source={require("../assets/images/codeAcademyTeam.jpeg")}
        style={{
          width: "100%",
          height: 295,
        }}
        resizeMode="contain"
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          Code Academy haqqında qısa məlumat
        </Text>
        <Text style={styles.sectionText}>
          2015-ci ildə fəaliyyətə başlayan Code Academy yüksək texnologiyalar
          sahəsində təcrübəli mütəxəssislər hazırlayan tədris müəssisəsidir. IT
          təməlli tədris sektorunda köklü dəyişikliklərin əsasını qoyan,
          məzunları həm özəl, həm də dövlət sektorunun aparıcı şirkət və
          təşkilatlarında əsas vəzifələrdə işləyən innovativ tədris mərkəzi
          olaraq gələcək kadrları burada yetişdirir. 2021-ci ildə əlavə təhsil
          müəssisəsi kimi lisenziya qazandı və Azərbaycan Respublikası Elm və
          Təhsil Nazirliyi ilə əməkdaşlıq etməyə başladı.
        </Text>
        <Text style={[styles.sectionText, { marginTop: 15 }]}>
          Tədris sahələri aşağıdakılardır:
        </Text>
        {renderFields(codeFields)}
      </View>
      <View style={{ height: 12 }} />
    </ScrollView>
  );
};

export default AdvanceCareer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 450,
    marginVertical: 16,
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 6,
  },
  sectionHeader: {
    color: "#000",
    fontWeight: "400",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
  },
  sectionText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  fieldContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  logos: {
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
    flexDirection: "row",
  },
});
