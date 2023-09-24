import {
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useRef } from "react";
import GradientHeader from "../components/GradientHeader";
import BottomSheet, { BottomSheetRefProps } from "../components/BottomSheet";

const JuryValuation = ({ navigation }: any) => {
  const ref = useRef<BottomSheetRefProps>(null);

  const toggleSheet = useCallback(() => {
    Keyboard.dismiss();
    ref?.current?.scrollTo(-500);
  }, []);

  return (
    <View style={styles.container}>
      <GradientHeader
        title="Qiymetlendirmə"
        navigation={navigation}
        showArrow={true}
      />
      <TouchableOpacity onPress={() => toggleSheet()}>
        <Text>bas</Text>
      </TouchableOpacity>
      <BottomSheet ref={ref}></BottomSheet>
    </View>
  );
};

export default JuryValuation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS == "ios" ? 40 : StatusBar.currentHeight! + 20,
  },
});
