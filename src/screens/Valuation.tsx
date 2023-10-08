import React, { useCallback, useRef, useState } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GradientHeader from "../components/GradientHeader";
import SvgGraidentButton from "../assets/icons/gradientButton";
import TextField from "../components/TextField";
import { passwords } from "../data/valuationPasspowrds";

const Valuation = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleSubmit = () => {
    if (passwordIsValid(password)) {
      navigateToCorrectScreen();
    } else {
      handleIncorrectPassword();
    }
  };

  const anim = useRef(new Animated.Value(0));

  const shake = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: -4,
          duration: 50,
          useNativeDriver: false,
        }),
        Animated.timing(anim.current, {
          toValue: 4,
          duration: 50,
          useNativeDriver: false,
        }),
        Animated.timing(anim.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: false,
        }),
      ]),
      { iterations: 2 }
    ).start();
  }, []);

  const passwordIsValid = (pass: string) => {
    return pass.length > 0 && passwords.includes(pass);
  };

  const navigateToCorrectScreen = () => {
    const screenMappings: any = {
      codeadmin: "Result",
      mobileali: "CoachValuation",
      frontorxan: "CoachValuation",
      backasgar: "CoachValuation",
      datamushviq: "CoachValuation",
      cybermirmehdi: "CoachValuation",
      uxuirufatzeyneb: "CoachValuation",
      jurycode8: "JuryValuation",
    };

    const screenName = screenMappings[password];
    navigation.replace(screenName, { type: getTypeFromPassword(password) });
  };

  const getTypeFromPassword = (pass: string) => {
    const typeMappings: any = {
      mobileali: "Mobile",
      frontorxan: "FrontEnd",
      backasgar: "BackEnd",
      datamushviq: "Data Science",
      cybermirmehdi: "Cyber Security",
      uxuirufatzeyneb: "UX/UI",
    };

    return typeMappings[pass];
  };

  const handleIncorrectPassword = () => {
    setIsPasswordCorrect(false);
    setPassword("");
    shake();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <GradientHeader
        title={"Qiymətləndirmə"}
        showArrow={true}
        navigation={navigation}
      />
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Bu bölmə <Text style={styles.textBold}>yalnızca</Text> münsiflər və
          texniki heyətin girişi üçündür. Zəhmət olmasa, daxil olmaq üçün{" "}
          <Text style={styles.textBold}>
            Code Academy tərəfindən sizə verilmiş paroldan{" "}
          </Text>
          istifadə edin.
        </Text>
        <View style={styles.spacer} />
        <Animated.View
          style={{
            transform: [{ translateX: anim.current }],
          }}
        >
          <TextField
            label="6 rəqəmli parol"
            inputValue={password}
            onChangeText={(text) => setPassword(text.toLowerCase())}
            isPasswordCorrect={isPasswordCorrect}
          />
        </Animated.View>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <SvgGraidentButton />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Valuation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
  sectionText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0.25,
    color: "#000000",
  },
  section: {
    marginHorizontal: 16,
    marginVertical: 40,
  },
  textBold: {
    fontWeight: "500",
  },
  button: {
    marginTop: 40,
  },
  spacer: {
    height: 24,
  },
});
