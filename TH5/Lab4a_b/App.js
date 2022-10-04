import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab4a from './views/Lab4a';
import Lab4b from './views/Lab4b';

export default function App() {
  return (
    <View style={styles.container}>
      <Lab4a/>

      {/* <Lab4b/> */}
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
