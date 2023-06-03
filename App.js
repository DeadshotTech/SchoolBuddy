import { StyleSheet, View, StatusBar } from 'react-native';
import AppScreen from './AppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <AppScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});
