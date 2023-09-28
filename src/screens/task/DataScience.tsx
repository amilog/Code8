import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import GradientHeader from "../../components/GradientHeader";
import Unorderedlist from "react-native-unordered-list";
import InfoCard from "../../assets/icons/infoCard";
import * as WebBrowser from "expo-web-browser";
import CircleArrow from "../../assets/icons/circleArrow";

const DataScience = ({ navigation }: any) => {
  const openLinkInBrowser = async () => {
    try {
      await WebBrowser.openBrowserAsync(
        "https://st2.depositphotos.com/1823785/7833/i/950/depositphotos_78333908-stock-photo-many-people-hands-hlding-red.jpg"
      );
    } catch (error) {
      showErrorAlert("Link açılmadı");
    }
  };

  const showErrorAlert = (message: string) => {
    Alert.alert("Xəta", message, [{ text: "Bağla" }]);
  };

  return (
    <View style={styles.container}>
      <GradientHeader title="Data Science" showArrow navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>1. Data Understanding(15 bal)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Addımlar</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İlkin məlumatları toplayın: Datanı analiz alətinizə yükləyin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Məlumatları təsvir edin: Məlumatı yoxlayın və məlumat formatı,
                qeydlərin sayı və ya sahə identifikasiyası kimi səth
                xüsusiyyətlərini sənədləşdirin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Məlumatları araşdırın: Məlumatları daha dərindən araşdırın. Onu
                sorğulayın, vizuallaşdırın və məlumatlar arasında əlaqələri
                müəyyənləşdirin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Məlumatın keyfiyyətini yoxlayın: Məlumat nə qədər
                təmiz/çirklidir? İstənilən keyfiyyət problemini sənədləşdirin.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            2. Data Preparation(30 bal){"\n"}Izahat
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Addımlar</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Bu mərhələ modelləşdirmə üçün son məlumat dəstini hazırlayır.
                Onun 3 vəzifəsi var:
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Verilənləri seçin: Hansı məlumat dəstlərinin istifadə
                ediləcəyini müəyyənləşdirin və daxil edilmə/çıxarılma
                səbəblərini qeyd edin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Məlumatları təmizləyin</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Faydalı olacaq yeni atributlar əldə edin. Məsələn, kiminsə bədən
                kütləsi indeksini boy və çəki sahələrindən çıxarın.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>3. Modeling.(15 bal)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Addımlar</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Modelləşdirmə üsullarını seçin</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Test dizaynını yaradın(train , test).
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Model qurun</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Hyperparameter tuning edin</Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>4. Evaluation(15)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Addımlar</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Modelin qiymətləndirilməsi:</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                F1 bal və ya digərləri kimi müvafiq qiymətləndirmə
                göstəricilərindən istifadə edərək modellərinizin performansını
                ölçün.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Modelin müqayisəsi: Əgər bir neçə modeli sınamısınızsa, onların
                performansını müqayisə edin və ən yaxşısını seçin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                accuracy, precision, recall, F1-score, Confusion matrix -i
                göstərin
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>5. Deployment(25 bal)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>İzahat</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Əvvəlcədən hazırlanmış maşın öyrənmə modelinizi pickle formatı
                və ya H5 kimi yükləyin
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                FastAPI tətbiqini hazırlayın (flask, Django da isteğe bağlıdır)
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Uvicorn və ya seçdiyiniz başqa ASGI serverindən istifadə edərək
                FastAPI proqramınızı yerləşdirin
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Server komputere yollayin</Text>
            </Unorderedlist>
          </View>
        </View>
        <TouchableOpacity
          style={styles.card}
          onPress={() => openLinkInBrowser()}
        >
          <View style={styles.view}>
            <InfoCard style={styles.icon} />
            <Text style={styles.cardText}>
              {`Datanı çəkmək üçün istifadə \nedəcəyiniz link:`}
            </Text>
          </View>
          <CircleArrow style={styles.icon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DataScience;

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
  },
  steps: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    width: "95%",
    height: 90,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 36,
    marginBottom: 55,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000000",
  },
});
