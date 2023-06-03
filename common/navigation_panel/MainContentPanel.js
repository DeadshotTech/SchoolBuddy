import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainContentPanel = () => {

    const getMainPanelView = () => {
        const userInput = 'value2';
        switch (userInput) {
          case 'value1':
            return <View style={styles.view1}><Text>View 1</Text></View>;
          case 'value2':
            return <View style={styles.view2}><Text>View 2</Text></View>;
          case 'value3':
            return <View style={styles.view3}><Text>View 3</Text></View>;
          case 'value4':
            return <View style={styles.view4}><Text>View 4</Text></View>;
          case 'value5':
            return <View style={styles.view5}><Text>View 5</Text></View>;
          default:
            return null;
        }
      };

    return (
        <View style={styles.container}>
            {getMainPanelView()}
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
