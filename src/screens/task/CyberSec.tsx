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

const CyberSec = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <GradientHeader
        title="Cyber Security"
        showArrow
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ediləcəklər:</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>1.vm1: xdr</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>2.vm3: waf </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>3.Consulting</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>{`4.Pentest \n(1<>2)`}</Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 20 }} />
          <Text style={styles.text}>
            1. xdr serverinə wazuh servisini quraşdırın (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                yalnızca istifadə etdiyiniz protokollar (məs: https) üçün
                bağlantı icazələri yazın (daxili firewall (ufw) və ya cloud
                provider-ın təklif etdiyi imkanlarla)
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            2. waf maşınında nginx servisini və modsecurity connectorunu
            quraşdırın.
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                docker ilə waf maşını daxili şəbəkədə istifadə olunan ip-lər
                vasitəsilə əlaqə qursun.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Web server gələn müraciətlər waf maşını tərəfindən
                cavablandırılsın və daxil olan sorğuları modsecurity vasitəsilə
                təhlükəsiz hala gətirin.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                waf maşınını wazuh serverə agent kimi qoşun.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                yalnızca istifadə etdiyiniz protokollar (məs: https) üçün
                bağlantı icazələri yazın (daxili firewall (ufw) və ya cloud
                provider-ın təklif etdiyi imkanlarla) (20 bal)
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            3. wazuh, waf və dockera gələn sorğuları (http, ssh) izləyin və əgər
            kimsə brute force, injection (command, sql, xss) etmək istəyirsə
            onun ip adresini active response özəlliyi ilə 1 saatlıq blocka
            atın.(20bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Baş verən hadisəni dashboard-la təqdim edin
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>
            4. Komandanın digər üzvləri ilə birgə işləməli,baş verə biləcək
            vulnerability qarşı tədbirlər görməli,məsləhətlər verilməlidir. (20
            bal)
          </Text>
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
          <Text style={styles.text}>Pentest: (30 bal)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Digər komandanın hazırladığı proyekti penetration test edin və
                yaranan boşluqları report edin
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text1}>1-ci komanda → 2-ci komanda</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text1}>2-ci komanda → 3-cu komanda</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text1}>3-cu komanda → 4-cu komanda</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text1}>4-cu komanda → 5-ci komanda</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text1}>5-ci komanda → 6-cı komanda</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text1}>6-cı komanda → 7-ci komandanı</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text1}>7-ci komanda → 1-ci komandanı</Text>
            </Unorderedlist>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CyberSec;

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
  text1: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000000",
    lineHeight: 26,
  },
  textContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 30,
  },
  steps: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 26,
  },
});
