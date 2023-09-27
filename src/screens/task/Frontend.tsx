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

const Frontend = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <GradientHeader title="Front-End" showArrow navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            1. Uİ-ın yazılım tərzi və istifadə etməli olduğunuz texnologiyalar
            (30 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: Dizaynerinizin sizlərə təqdim etdiyi dizayndan istifadə
                edərək eynisini kodlayırsınız, burada önəm verməli olduğunuz
                məqam doğru Folder Structure və maksimum Component-lərə
                bölməyinizdir.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>2. Admin Girişi(20 bal)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: İstifadəçinin email və şifrə məlumatlarını qəbul edir(bu
                dəyərlər static olaraq sizə bildiriləcək) daha sonra sizə
                verilən api-dan istifadə edərək Auth işləri icra olunur.Bu işlər
                icra olunarkən Context və ya Redux-dan istifadə etmək mütləqdir!
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            3. Müraciət edən istifadəçilərin Siyahısı (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: Api-a sorğu ataraq bütün müraciət etmiş istifadəçinin
                siyahısı ekranda əks olunur.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            4. İstifadəçilərin Axtarışı və filterlənməsi(15 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: Burada istifadəçilərin statusan görə Filter
                olunmalıdır,ad və soyadına görə isə Search olunmalıdır.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            5. Müraciəti Qəbul Et Funksiyası (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: Yeni bir modal açılır orada görüşmək isdəyi tarixin
                dəyərlərini götürüb Api-a sorğu atılır
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            6. Müraciəti Rədd Et Funksiyası(10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>İzahat: Api-a sorğu atılır.</Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            7. Görüş Tarixini Dəyiş Funksiyası (5 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: görüşmək istəyi tarixin dəyərlərini götürüb Api-a sorğu
                atılır
              </Text>
            </Unorderedlist>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Frontend;

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
});
