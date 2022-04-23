import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CakeStore from './src/screen/CakeStore';

export default function App() {
  return (
    <View style={styles.container}>
      <CakeStore />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
