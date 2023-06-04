import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarRangeSelector = () => {
  const holidays = [
    { date: '2023-06-05', type: 'present' },
    { date: '2023-06-10', type: 'absent' },
    { date: '2023-06-15', type: 'holiday' },
    { date: '2023-06-20', type: 'holiday' },
  ];

  const getBlockColor = (type) => {
    switch (type) {
      case 'present':
        return '#00FF00'; // Green color for present
      case 'absent':
        return '#FF0000'; // Red color for absent
      case 'holiday':
        return '#FFFF00'; // Yellow color for holidays
      default:
        return '#FFFFFF'; // Default color for other days
    }
  };

  const renderBlock = (date) => {
    const dateString = date.toISOString().split('T')[0]; // Convert date to string format
    let blockColor = getBlockColor(''); // Default color for other days

    const holiday = holidays.find((holiday) => holiday.date === dateString);
    if (holiday) {
      blockColor = getBlockColor(holiday.type); // Get color based on the holiday type
    }

    // Customize the design and content of each block here
    return (
      <View key={dateString} style={[styles.block, { backgroundColor: blockColor }]}>
        <Text style={styles.dateText}>{date.getDate()}</Text>
        {/* Add any additional content or customization for each date */}
      </View>
    );
  };

  const renderBlocks = () => {
    const today = new Date();
    const monthStartDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEndDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const blocks = [];
    for (let date = monthStartDate; date <= monthEndDate; date.setDate(date.getDate() + 1)) {
      blocks.push(renderBlock(date));
    }
    return blocks;
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>{renderBlocks()}</View>
      <View style={styles.tagsContainer}>
        <View style={styles.tag}>
          <View style={[styles.tagColor, { backgroundColor: getBlockColor('present') }]} />
          <Text style={styles.tagText}>Present</Text>
        </View>
        <View style={styles.tag}>
          <View style={[styles.tagColor, { backgroundColor: getBlockColor('absent') }]} />
          <Text style={styles.tagText}>Absent</Text>
        </View>
        <View style={styles.tag}>
          <View style={[styles.tagColor, { backgroundColor: getBlockColor('holiday') }]} />
          <Text style={styles.tagText}>Holiday</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 5,
    },
    calendarContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    block: {
      width: 50,
      height: 40,
      margin: 5,
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#000000',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  tagColor: {
    width: 15,
    height: 15,
    marginRight: 5,
    borderRadius: 2,
  },
  tagText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CalendarRangeSelector;


