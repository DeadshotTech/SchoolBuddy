import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import NavigatorIconsPanel from './common/navigation_panel/NavigatorIconsPanel';
import WelcomeUserPanel from './common/navigation_panel/WelcomeUserPanel';
import MainContentPanel from './common/navigation_panel/MainContentPanel';

const AppScreen = () => {
    const [mainContentIdentifier, setMainContentIdentifier] = useState('Home');

    const changeMainContent = (screenIdentifier) => {
        setMainContentIdentifier(screenIdentifier);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <WelcomeUserPanel />
            </View>
            <View style={styles.mainContent}>
                <MainContentPanel mainContentIdentifier={mainContentIdentifier} handleSummaryClick={changeMainContent} />
            </View>
            <View style={styles.bottomView}>
                <NavigatorIconsPanel handleIconClick={changeMainContent}/>
            </View>
        </View>
    );
};

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

export default AppScreen;
