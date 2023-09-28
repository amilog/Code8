import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import GradientHeader from "../../components/GradientHeader";
import Unorderedlist from "react-native-unordered-list";

const Mobile = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <GradientHeader
        title="Mobile Development"
        showArrow
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            React Native CLI ilə aşağıdakı ekranları və funksiyonları
            hazırlayın:
          </Text>
          <Text style={styles.headerText}>1. Başlanğıc Ekranı (25 bal):</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İstifadəçi tətbiqi açdıqda, tətbiq avtomatik olaraq cihazın
                DeviceID-ni oxuyub /api/register-device endpointinə
                göndərməlidir. Bu ilə backenddə user yaradılır.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>2. Müraciətlər Ekranı (20 bal):</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İstifadəçinin müraciətlərinin göstərildiyi ekran.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Müraciətlərin statusu, tarixi və digər əlaqədar detalları bu
                ekranda göstərilməlidir.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Back-end tərəfindən təyin edilmiş /api/applicants endpointi ilə
                integrasiya. Gələn DeviceID dəyərinə uyğun müraciətlər geri
                qaytarılmalıdır.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            3. Kursa Qoşulma və Müraciət Ekranları (45 bal):
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İstifadəçinin kursa qoşulmaq və kursa müraciət etmək üçün
                ekranları.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Back-end tərəfindən təyin edilmiş /api/join-course və
                /api/apply-course endpointləri ilə integrasiya.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>4. Bildirişlər (10 bal):</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İstifadəçiyə qeydiyyatdan keçdikdən sonra, kursa qoşulduqda və
                ya müraciət etdikdə push bildirişi göndərmək.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>Digər Tələblər:</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                UI tərəfindən təyin edilmiş dizayna uyğun olmalıdır.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Uygulamanın performansı yaxşı olmalıdır.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Təqdimat zamanı kodun təmiz və oxuna bilən olması çox önəmlidir.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Hər hansı bir xətanı dərhal aradan qaldırmağa çalışın və komanda
                ilə əməkdaşlıqda olun.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                UX/UI tərəfindən verilmiş prototiplərə və feedbacklərə riayət
                edin.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 20 }} />
          <Text style={styles.headerText}>Uğurlar!</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.headerText}>
            Bu dəyişikliklərlə, mobil tətbiqda yalnız müraciət detallarına
            baxma, kursa qoşulma və bildirişlər funksiyaları olacaq!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Mobile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000000",
    lineHeight: 26,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
    lineHeight: 26,
  },
  textContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 26,
  },
  steps: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 26,
    marginBottom: 16,
  },
});
