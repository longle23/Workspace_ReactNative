import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab1 from './src/screens/Lab1';
import Lab2 from './src/screens/Lab2';
import Lab3 from './src/screens/Lab3';

export default function App() {
  return (
    <View style={styles.container}>
      <Lab1 />

      {/* <Lab2 /> */}

      {/* <Lab3 /> */}
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
