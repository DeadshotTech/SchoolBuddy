import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CalendarRangeSelector from '../common/calender/CalendarRangeSelector';
import HomepageScreen from '../home_page/HomepageScreen';

const AttendanceScreen = () => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.attendanceHeaderMessageContainer}>
                <Text style={styles.attendanceHeaderMessage}>Good Job 👍 You have 100% attendance this week</Text>
            </View>
            <View style={styles.calendar}>
                <CalendarRangeSelector />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    attendanceHeaderMessageContainer: {
        flex: .1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 2,
    },
    attendanceHeaderMessage: {
        flex: 1,
        color: '#FFFFFF',
        justifyContent: 'center',
    },
    calendar: {
        flex: 1,
    },
    attendanceInfoContainer: {
        flex: 1
    }
});

export default AttendanceScreen;
