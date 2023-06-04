import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SummaryCard from '../common/cards/SummaryCard';
import ProductInformationCard from '../common/cards/ProductInformationCard';

const homePageData = [
    {name: 'Attendance', score: '11/12', scoreMessage: 'Attended', weeklySummary: '1 Leave in this month\n2 upcoming holidays', dataCategory: 'SUMMARY'},
    {name: 'Homework', score: '4/12', scoreMessage: 'Completed',  weeklySummary: '2 Due in 13 days\n1 completed in this week', dataCategory: 'SUMMARY'},
    {name: 'Classes', weeklySummary: 'Revise upto 6 subjects\n178 revisions till now', dataCategory: 'PRODUCT'},
    {name: 'Routine',  weeklySummary: '2 submissions this week', dataCategory: 'PRODUCT'},
    {name: 'Reminders' ,  weeklySummary: '0 reminders for today', dataCategory: 'PRODUCT'},
    {name: 'Explore',  weeklySummary: 'Learn from 7843 schools\n45678 topics to learn', dataCategory: 'PRODUCT'},
    {name: 'Store',  weeklySummary: 'Buy stationary\nGet merchandise', dataCategory: 'PRODUCT'},
];

const renderSummary = ({ item }) => (
        <View style={styles.summaryCardContainer}>
            {
            item.dataCategory === 'SUMMARY' &&
                <SummaryCard summary={item} />
            }
            {
            item.dataCategory === 'PRODUCT' &&
                <ProductInformationCard summary={item} />
            }
        </View>
);

const HomepageScreen = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={homePageData}
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
        width: '100%',
    },
    summaryCardContainer: {
        padding: 5,
        marginVertical: 2,
    }
});

export default HomepageScreen;
