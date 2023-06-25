import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'

const homeworkData = [
    { date: 'Today', subject: 'Science', content: 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit.\nLorem ipsum dolor sit amet,\n consectetur adipiscing elit.\nkjnkn\njknkn\nkjnkn' },
    { date: 'Yesterday', subject: 'Maths', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nsfefwef\nefewf' },
    { date: '2023-06-23', subject: 'English', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-06-22', subject: 'Hindi', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-06-21', subject: 'Environmental Education', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { date: '2023-06-20', subject: 'Sanskrit', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const renderHomeworkData = ({ item }) => (
    <View style={styles.homeworkCardContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.dateDueHeader}>{item.date}</Text>
            <Text style={styles.dateHeader}>{item.date}</Text>
        </View>
        <Text style={styles.subjectHeader}>{item.subject}</Text>
        <Text style={styles.contentHeader}>{item.content}</Text>
    </View>
);

  const HomeworkScreen = () => {
    return (
      <View style={styles.container}>
        <FlatList
            data={homeworkData}
            renderItem={renderHomeworkData}
            keyExtractor={(item) => item.name}
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
        justifyContent: 'center',
    },
    dateDueHeader: {
        flex: 1,
        fontSize: 16,
        padding: 1,
        fontWeight: '300',
    },
    dateHeader: {
      flex: 1,
      fontSize: 16,
      padding: 1,
      fontWeight: '200',
      alignItems: 'center',
      width: '100%',
    },
    contentHeader: {
        fontSize: 16,
        padding: 1,
    },
    subjectHeader: {
        fontSize: 20,
        padding: 1,
        fontWeight: '400',
    }
  });

export default HomeworkScreen;
  
  