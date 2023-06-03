import { StyleSheet, View } from 'react-native';

import NavigatorIconsPanel from './common/navigation_panel/NavigatorIconsPanel';
import WelcomeUser from './common/navigation_panel/WelcomeUser';

import { ScrollView } from 'react-native-virtualized-view';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeUser />
      <NavigatorIconsPanel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topView: {
    flex: 1
  },
  scrollableContent: {
    flex: 8,
    flexGrow: 1,
    paddingVertical: 10
  },
  bottomView: {
    flex: 1
  },
});
