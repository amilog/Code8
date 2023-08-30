import {
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TextField from "../components/TextField";
import GradientHeader from "../components/GradientHeader";
import SvgGraidentButton from "../assets/icons/gradientButton";

const Valuation = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <GradientHeader title={"Qiymetlendirme"} />
      <View style={styles.section}>
        <Text style={styles.sectionText}>
          Bu bölmə <Text style={styles.textBold}>yalnızca</Text> münsiflər və
          texniki heyətin girişi üçündür. Zəhmət olmasa, daxil olmaq üçün{" "}
          <Text style={styles.textBold}>
            Code Academy tərəfindən sizə verilmiş paroldan{" "}
          </Text>
          istifadə edin.
        </Text>
        <View style={{ height: 24 }} />
        <TextField label="6 reqemli parol" cursorColor={"#080F9C"} />
        <TouchableOpacity style={styles.button}>
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
    paddingTop: StatusBar.currentHeight! + 20,
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
});
