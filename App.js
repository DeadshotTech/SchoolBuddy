import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import IconScreen from './IconScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <IconScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
