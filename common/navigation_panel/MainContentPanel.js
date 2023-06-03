import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainContentPanel = (props) => {

    const getMainPanelView = (mainContentIdentifier) => {
        switch (mainContentIdentifier) {
          case 'Home':
            return <View style={styles.view1}><Text>{mainContentIdentifier}</Text></View>;
          case 'Attendance':
            return <View style={styles.view2}><Text>{mainContentIdentifier}</Text></View>;
          case 'Homework':
            return <View style={styles.view3}><Text>{mainContentIdentifier}</Text></View>;
          case 'Revise':
            return <View style={styles.view4}><Text>{mainContentIdentifier}</Text></View>;
          case 'Explore':
            return <View style={styles.view5}><Text>{mainContentIdentifier}</Text></View>;
          case 'Results':
            return <View style={styles.view5}><Text>{mainContentIdentifier}</Text></View>;
          case 'Store':
            return <View style={styles.view5}><Text>{mainContentIdentifier}</Text></View>;
          default:
            return null;
        }
      };

    return (
        <View style={styles.container}>
            {getMainPanelView(props.mainContentIdentifier)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainContentPanel;
