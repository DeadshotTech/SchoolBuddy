import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomepageScreen from '../../home_page/HomepageScreen';
import AttendanceScreen from '../../attendance/AttendanceScreen';
import HomeworkScreen from '../../homework/HomeworkScreen';

const MainContentPanel = (props) => {

    const getMainPanelView = (mainContentIdentifier) => {
        switch (mainContentIdentifier) {
            // case 'Home':
            //   return <View style={styles.view1}><Text>{mainContentIdentifier}</Text></View>;
          case 'Home':
            return <View style={styles.homepageContainer}><HomepageScreen handleSummaryClick={props.handleSummaryClick}/></View>;
          case 'Attendance':
            return <View style={styles.attendanceContainer}><AttendanceScreen/></View>;
          case 'Homework':
            return <View style={styles.homeworkContainer}><HomeworkScreen/></View>;
          case 'Revise':
            return <View style={styles.view4}><Text>{mainContentIdentifier}</Text></View>;
          case 'Explore':
            return <View style={styles.view5}><Text>{mainContentIdentifier}</Text></View>;
          case 'Results':
            return <View style={styles.view6}><Text>{mainContentIdentifier}</Text></View>;
          case 'Store':
            return <View style={styles.view7}><Text>{mainContentIdentifier}</Text></View>;
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
        alignItems: 'stretch',
    },
    homepageContainer: {
        flex: 1,
    },
    attendanceContainer: {
        flex: 1,
    },
    homeworkContainer: {
        flex: 1,
    }
});

export default MainContentPanel;
