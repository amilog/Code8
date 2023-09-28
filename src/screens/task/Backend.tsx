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

const Backend = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <GradientHeader title="Back-End" showArrow navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>1. Introduction (10 bal)</Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: Proyekt 3 arxitexturadan biri ilə yazılmalıdır. Pattern
                istifadə edilməlidir. (Clean, Onion, N-Tier, Repository,
                Options, CQRS, UOW, SO, Mediator və s.). User Cədvəli: (ID,
                Name, BirthDate, Gender, Email, Password, AppointmentDate,
                DeviceId). Education Cədvəli: (ID, University Name, Speciality,
                Current Grade Level, GPA). Interests Cədvəli: (ID, Enjoyed
                Subjects, Hobbies, Career Envision(Business, Design, etc.).
                Applicants Cədvəli: (ID, Name, Status). Admin Datası seed
                olunmalıdır.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            2. Cihaz Qeydiyyatı Endpointi (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/register-deviceadında POST endpointiniz olur. Gələn
                DeviceID dəyəri ilə user yaradırsınız.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            3. Müraciətlər Endpointi (5 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/applicantsadında GET endpointiniz olur. Gələn
                DeviceID dəyərinə uyğun istifadəçinin müraciətlərini geri
                qaytarır.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            4. Kursa Qoşul Endpointi (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/join-course adında POST endpointiniz olur.
                İstifadəçilərin şəxsi məlumatlarını, təhsil məlumatlarını,
                marağı olan sahələri qəbul edir və verilənlər bazasına qeyd
                edir. Data science qrupunun verdiyi endpoint-ə lazım olan
                dataları parametr olaraq göndərir. İstifadəçiyə tövsiyə edilən
                kurs haqqında ətraflı məlumatları qaytarır və email olaraq
                istifadəçiyə göndərilir. Status pending olaraq dəyişir.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            5. Kursa Müraciət Et Endpointi (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/apply-course adında POST endpointiniz olur.
                İstifadəçinin ID dəyərinə uyğun status unaccepted olaraq
                dəyişir.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            6. Görüş Təyin Et Endpointi (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/make-appointment adında POST endpointiniz olur.
                Görüş tarixi yazılır. İstifadəçinin ID dəyərinə uyğun statusu
                unaccepted olaraq dəyişir.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            7. Admin Giriş Endpointi (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/login adında POST endpointiniz olur. Email və
                Password ilə giriş olunacaq. Geriyə JWT qaytarılacaq.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            8. İstifadəçilər Endpointi (5 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/users adında GET endpointiniz olur. Admin
                Dashboard-da istifadəçiləri geri qaytarır. Bu Endpoint Admin
                tərəfindən
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            9. İstəyi Qəbul Et Endpointi (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/accept-request adında POST endpointiniz olur. Görüş
                tarixi yazılır. İstifadəçinin ID-nə uyğun statusu accepted
                olaraq dəyişilir və həmin tələbənin mailinə ‘’Təbirklər!
                Müraciətiniz qəbul oldu. 08/31/2023 16:00 tarixində görüş təyin
                olundu’’ bildirişi göndərilir. (əlavə olaraq push notification
                olması üstünlükdür). Bu Endpoint Admin tərəfindən idarə olunur.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            10. İstəyi Rədd Et Endpointi (5 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/reject-request adında POST endpointiniz olur.
                İstifadəçinin ID-nə uyğun statusu rejected olaraq dəyişilir və
                həmin tələbənin mailinə ‘’Təəssüflər olsun ki siz kursa qəbul
                ola bilmədiniz’’ bildirişi göndərilir. (əlavə olaraq push
                notification olması üstünlükdür). Bu Endpoint Admin tərəfindən
                idarə olunur.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            11. Görüş Tarixini Dəyiş Endpointi (5 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: /api/edit-appointment-date adında PUT endpointiniz olur.
                İstifadəçinin ID-nə uyğun görüş tarixi dəyişilir.
              </Text>
            </Unorderedlist>
          </View>
          <View style={{ height: 30 }} />
          <Text style={styles.headerText}>
            12. Azure Portala Publish Etmək (10 bal)
          </Text>
          <View style={styles.steps}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                İzahat: Proyekt Azure-da Virtual Machine yaradılıb publish
                olunmalıdır.
              </Text>
            </Unorderedlist>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Backend;

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
});
