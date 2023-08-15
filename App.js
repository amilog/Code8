import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screens/Onboarding';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Onboarding />
      {/* <Text>Ağla İlham</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
