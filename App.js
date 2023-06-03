import { StyleSheet, View, StatusBar } from 'react-native';

import NavigatorIconsPanel from './common/navigation_panel/NavigatorIconsPanel';
import WelcomeUserPanel from './common/navigation_panel/WelcomeUserPanel';
import MainContentPanel from './common/navigation_panel/MainContentPanel';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.topView}>
        <WelcomeUserPanel />
      </View>
      <View style={styles.mainContent}>
        <MainContentPanel/>
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
  mainContent: {
    flex: 8,
  },
  bottomView: {
    flex: 1,
  },
});
