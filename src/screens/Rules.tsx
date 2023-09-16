import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";

const Rules = () => {
  const data = [
    {
      title: "Tədbirə vaxtında qatılın – ",
      text: "Saat 09:00 – da qeyd olunan məkanda olun.\n",
    },
    {
      title: "Açılış prosesində aktiv olun – ",
      text: "Şərtləri və gözləntiləri aydın şəkildə başa düşə bilmək üçün hackathonun açılış mərasimində iştirak edin.\n",
    },
    {
      title: "Layihəni dəqiqləşdirin – ",
      text: "Hackathon zamanı komandanız ilə üzərində işləyəcəyiniz layihə haqqında bütün detallara hakim olun.\n",
    },
    {
      title: "Tapşırıqları bölüşdürün – ",
      text: "Komanda üzvlərinizin bilik və bacarıqlarına uyğun olaraq taskları düzgün bölüşdürün.\n",
    },
    {
      title: "Müntəzəm yoxlanışlar edin – ",
      text: "problemləri müəyyənləşdirmək və birlikdə müzakirə etmək, düzəlişlər aparmaq üçün komanda üzvləri ilə əlaqədə olun.\n",
    },
    {
      title: "Enerjinizi qoruyun – ",
      text: "8 saatlıq hackathon boyunca enerjinizi saxlaya bilməniz üçün maye qəbul edin və yemək fasiləsinə çıxın.\n",
    },
    {
      title: "Mövcud resurslardan istifadə edin – ",
      text: "layihənizi təkmilləşdirmək üçün mentorlarla əlaqə qurun və digər əlavə resurslardan istifadə edin.\n\n",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.containerItem}>
        <Text style={styles.header}>Bilməli olduqlarım{"\n"}</Text>
        <Text style={styles.text}>
          Nə zaman mən burada olmalıyam?{"\n\n"}
          08:30 - 09:00 vaxt aralığında qeydiyyatdan keçməyən şəxslərin iştirakı
          təsdiqlənməyəcək.{"\n\n\n"}
          Açılış mərasimində nə etməliyəm?{"\n\n"}
          Şərtləri və gözləntiləri aydın şəkildə başa düşə bilmək üçün
          hackathonun açılış mərasimində aktiv iştirak etmək lazımdır.{"\n\n\n"}
          Layihə ilə bağlı nələri bilməliyəm?{"\n\n"}
          Hackathon zamanı komandanız ilə üzərində işləyəcəyiniz layihə haqqında
          bütün detallara hakim olmalısan.{"\n\n\n"}
          Komandadaxili hansı qaydaları bilməliyəm?{"\n\n"}
          Problemləri müəyyənləşdirmək və birlikdə müzakirə etmək, düzəlişlər
          aparmaq üçün komanda üzvləri və sənə təyin olunan kouçla daim əlaqə
          yarat.{"\n\n\n"}
          Enerjimi necə balansda saxlaya bilərəm?{"\n\n"}8 saatlıq hackathon
          boyunca enerjini saxlaya bilməyin üçün maye qəbul et və yemək
          fasiləsinə çıx.{"\n\n"}
        </Text>
        <Text style={styles.header}>Tədbir zamanı{"\n"}</Text>
        {data.map((item, index) => {
          return (
            <Text key={index}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={[styles.text, { fontWeight: "400" }]}>
                {item.text}
              </Text>
            </Text>
          );
        })}
        <Text style={styles.header}>Təqdimat zamanı{"\n"}</Text>
        <Text style={styles.text}>
          Layihənizin təqdimat zamanı inamla, ayrılmış vaxt ərzində və nəzərdə
          tutulduğu formada işləməsi üçün öncədən məşq edin.{"\n\n"}
        </Text>
        <Text style={styles.header}>Tədbir bitdikdən sonra{"\n"}</Text>
        <Text style={styles.text}>
          Digər komandaların da layihələrini izləmək üçün bağlanış mərasimində
          iştirak edin. Hackathon boyunca topladığınız təcrübə, qarşılaşdığınız
          çətinliklər və həll yolları haqqında düşünün və müəyyən nəticəyə
          gəlin. Bu tədbirdən öyrəndiklərinizi daim inkişaf etdirin.{"\n"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Rules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  containerItem: {
    flex: 1,
    padding: 16,
  },
  header: {
    color: "#000",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.15,
  },
});
