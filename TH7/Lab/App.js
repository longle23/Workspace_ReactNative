import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddItemScreen from './views/AddItemScreen';
import CallMockAPI from './views/CallMockAPI';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AddItemScreen /> */}

      <CallMockAPI />
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
