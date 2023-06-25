import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'

const moment = require('moment');

import { SEVERITY_INDICATOR_TEXT_STYLE, SEVERITY_INDICATOR_DATE_CUTOFF } from '../common/utilities/SeverityCalculator';

const homeworkData = [
    { date: '2023-06-29', subject: 'Science', content: 'Lorem  ipsum dolor sit amet,  consectetur adipiscing elit. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. kjnkn jknkn kjnkn' },
    { date: '2023-07-03', subject: 'Maths', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. sfefwef efewf' },
    { date: '2023-07-23', subject: 'English', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-07-22', subject: 'Hindi', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-08-21', subject: 'Environmental Education', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-09-20', subject: 'Sanskrit', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const currentDate = moment();

const renderHomeworkData = ({ item }) => {
  
  // Get days remaining for assignment due date
  const remainderDays = -1 * currentDate.diff(item.date, 'days');
  let remainderDaysSeverityStyle;

  // Define the style for rendering the due date indicator
  if (remainderDays <= SEVERITY_INDICATOR_DATE_CUTOFF.RED)
    remainderDaysSeverityStyle = SEVERITY_INDICATOR_TEXT_STYLE.RED;
  else if (remainderDays <= SEVERITY_INDICATOR_DATE_CUTOFF.YELLOW)
    remainderDaysSeverityStyle = SEVERITY_INDICATOR_TEXT_STYLE.YELLOW;
  else if (remainderDays <= SEVERITY_INDICATOR_DATE_CUTOFF.GREEN)
    remainderDaysSeverityStyle = SEVERITY_INDICATOR_TEXT_STYLE.GREEN;
  else
    remainderDaysSeverityStyle = SEVERITY_INDICATOR_TEXT_STYLE.GREY;
  
    return(
    <View style={styles.homeworkCardContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.subjectHeader}>{item.subject}</Text>
            <Text style={[styles.dateHeader, remainderDaysSeverityStyle]}>Due in {remainderDays} days</Text>
        </View>
        <Text style={styles.contentHeader}>{item.content}</Text>
    </View>
    );
};
  
export function dueDateSeverityCalculator({ remainingDays }) {
    console.log(remainingDays);
    if (remainingDays < 3)
        return SEVERITY.RED;
    else if (remainingDays < 7)
        return SEVERITY.YELLOW;
    else
        return SEVERITY.GREEN;
}

  const HomeworkScreen = () => {
    return (
      <View style={styles.container}>
        <FlatList
            data={homeworkData}
            renderItem={renderHomeworkData}
            keyExtractor={(item) => item.subject}
            vertical
            />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    homeworkCardContainer: {
        flexDirection: 'column',
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#f0f0f5',
        padding: 5,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center', // Center items vertically
      borderBottomWidth: 1,
      borderBottomColor: '#c2c2d6', // Add a border at the bottom
    },
    subjectHeader: {
        flex: 2,
        fontSize: 20,
        padding: 1,
        fontWeight: '400',
    },
    dateHeader: {
      flex: 1,
      fontSize: 12,
      padding: 1,
      fontWeight: '500',
      textAlign: 'right',
    },
    contentHeader: {
        fontSize: 16,
        padding: 1,
        marginTop: 5,
        textAlignVertical: 'center',
    },
  });

export default HomeworkScreen;
  
  