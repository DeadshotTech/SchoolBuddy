import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SummaryCard from '../common/cards/SummaryCard';
import ProductInformationCard from '../common/cards/ProductInformationCard';

const homePageData = [
    {id: 'Attendance', name: 'Attendance', score: '11/12', scoreMessage: 'Attended', weeklySummary: '1 Leave in this month\n2 upcoming holidays', dataCategory: 'SUMMARY'},
    {id: 'Homework', name: 'Homework', score: '4/12', scoreMessage: 'Completed',  weeklySummary: '2 Due in 13 days\n1 completed in this week', dataCategory: 'SUMMARY'},
    {id: 'Revise', name: 'Classes', weeklySummary: 'Revise upto 6 subjects\n178 revisions till now', dataCategory: 'PRODUCT'},
    {id: 'Home', name: 'Routine',  weeklySummary: '2 submissions this week', dataCategory: 'PRODUCT'},
    {id: 'Home', name: 'Reminders' ,  weeklySummary: '0 reminders for today', dataCategory: 'PRODUCT'},
    {id: 'Explore', name: 'Explore',  weeklySummary: 'Learn from 784 schools\n45678 topics to learn', dataCategory: 'PRODUCT'},
    {id: 'Store', name: 'Store',  weeklySummary: 'Buy stationary\nGet merchandise', dataCategory: 'PRODUCT'},
];

const HomepageScreen = (props) => {

    const renderSummary = ({ item }) => (
        <View style={styles.summaryCardContainer}>
            {
            item.dataCategory === 'SUMMARY' &&
                <SummaryCard summary={item} handleSummaryClick={props.handleSummaryClick} />
            }
            {
            item.dataCategory === 'PRODUCT' &&
                <ProductInformationCard summary={item} handleSummaryClick={props.handleSummaryClick} />
            }
        </View>
);

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
