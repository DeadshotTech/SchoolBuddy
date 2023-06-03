import { StyleSheet, View, StatusBar } from 'react-native';

import NavigatorIconsPanel from './common/navigation_panel/NavigatorIconsPanel';
import WelcomeUser from './common/navigation_panel/WelcomeUser';

import { ScrollView } from 'react-native-virtualized-view';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.topView}>
        <WelcomeUser />
      </View>
      <View style={styles.scrollableContent}>

      </View>
      <View style={styles.bottomView}>
        <NavigatorIconsPanel/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topView: {
    flex: .75,
  },
  scrollableContent: {
    flex: 8,
  },
  bottomView: {
    flex: 1,
  },
});
