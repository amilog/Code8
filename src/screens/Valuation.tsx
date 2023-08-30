import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientHeader from "../components/GradientHeader";
import TextField from "../components/TextField";

const Valuation = () => {
  return (
    <View style={styles.container}>
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
        <TextField placeholder="Cardholder name" />
      </View>
    </View>
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
});
