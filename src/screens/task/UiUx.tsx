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

const UiUx = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <GradientHeader title="UX/UI" showArrow navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ediləcəklər: FormApp, Dashboard</Text>
          <Text style={styles.text}>1. FormApp: (45 bal)</Text>
          <View style={styles.steps}>
            <Text style={styles.text}>
              Screens: Logo screen, Login, Home (about form details: status,
              date .etc), Profile settings, Visual Design
            </Text>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>2. Benchmark və Ideation:(10 bal)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Hədəf auditoriyasını, ehtiyaclarını, üstünlüklərini və ağrı
                nöqtələrini araşdırın. Güclü və zəif tərəfləri müəyyən etmək
                üçün mövcud həlləri və ya oxşar tətbiqləri təhlil edin. Fərqli
                istifadəçi axınlarını və interfeys tərtibatlarını nəzərə alaraq,
                beyin fırtınası edin və çoxlu dizayn konsepsiyalarını çəkin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Verilən user flow-a uyğunlaşan ideyalara üstünlük verin.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>3. Dashboard: (45 bal)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Sizə verilən dataya uyğun admin panel hazırlayın
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Bu mərhələdə göndərilən sorğunun nəticəsi qəbul ya da rədd
                olaraq qeyd olunacaq.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Screens: Login (10 bal)</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Admin panel (account names,status, date etc.) (35 bal)
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>Prototyping (Optional):</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Ola bilsinki kamandanızdakı developerlər məhdud vaxt ərzində
                kodlamanı tamamlaya bilməsin. Təqdimat zamanı bu kimi hadisələr
                kamandanı uğursuz göstərir. Məsləhət görərdim ki, developerlər
                kodlama edən zaman dizaynerlər də prototip üzərində işləsinlər.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>Təqdimatın hazırlanması: </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Problemi, həll yolunu, istifadəçi səyahətini və vizual dizaynı
                vurğulayan qısa təqdimat hazırlayın. Dizayn qərarlarınızın
                arxasında duran məntiqi izah etməyə hazır olun.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            Hazırlanan product üçün aktiv olaraq dev-lərlə əlaqədə olun:{" "}
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Dizaynı ardıcıllıq, aydınlıq və layihənin məqsədlərinə uyğunluğu
                üçün nəzərdən keçirin. Test zamanı və ya komanda üzvlərindən
                alınan rəy əsasında dəqiqləşdirmələr edin.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>User Testing (Optional): </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Vaxt imkan verirsə, prototip haqqında rəy toplamaq üçün
                potensial istifadəçilər və ya komanda üzvləri ilə sürətli
                istifadə testləri keçirin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Hər hansı istifadə problemini müəyyənləşdirin və lazımi
                düzəlişlər edin.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>Yekun təqdimat: </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Dizaynınızı hakaton zamanı münsiflərə və tamaşaçılara təqdim
                edin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Müraciət etdiyiniz problemi, tətbiq etdiyiniz istifadəçi
                mərkəzli yanaşmanı və dizaynınızın problemi necə effektiv
                şəkildə həll etdiyini aydın şəkildə bildirin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Unutmayın ki, hakatonda vaxt məhduddur, ona görə də diqqəti
                verilmiş vaxt çərçivəsində dəqiq müəyyən edilmiş və təsirli həll
                yolu yaratmağa yönəldin. Komanda üzvləri ilə əməkdaşlıq və yol
                boyu rəy toplamaq UX/UI dizaynınızın keyfiyyətini əhəmiyyətli
                dərəcədə artıra bilər.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 20 }} />
          <Text style={styles.text}>Uğurlar!</Text>
          <View style={{ height: 10 }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UiUx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
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
