import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import SummaryCard from '../common/cards/SummaryCard';

const summaryData = [
    {name: 'Attendance', score: '11/12', scoreMessage: 'Attended', weeklySummary: '1 Leave in this month'},
    {name: 'Homework', score: '4/12', scoreMessage: 'Completed',  weeklySummary: '2 Due in 13 days'},
    {name: 'Homework1', score: '4/12', scoreMessage: 'Attended',  weeklySummary: '2 Due in 13 days'},
    {name: 'Homework2', score: '4/12', scoreMessage: 'Attended',  weeklySummary: '2 Due in 13 days'},
    {name: 'Homework3', score: '4/12', scoreMessage: 'Attended',  weeklySummary: '2 Due in 13 days'}
];

const renderSummary = ({ item }) => (
        <View style={styles.summaryCardContainer}>
            <SummaryCard summary={item} />
        </View>
);

const HomepageScreen = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={summaryData}
                renderItem={renderSummary}
                keyExtractor={(item) => item.name}
                vertical
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        width: '100%',
    },
    summaryCardContainer: {
        padding: 5,
        marginVertical: 2,
    }
});

export default HomepageScreen;
