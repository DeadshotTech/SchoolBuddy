import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryCard = (params) => {

    return (
        <View style={styles.container}>
        <View style={styles.leftContainer}>
            <View style={styles.summarizedScore}>
                <Text style={styles.summarizedScoreText}>{params.summary.score}</Text>
            </View>
            <View style={styles.summarizedScoreMessage}>
                <Text style={styles.summarizedScoreMessageText}>{params.summary.scoreMessage}</Text>
            </View>
        </View>
            <View style={styles.rightContainer}>
                <View style={styles.weeklySummary}>
                    <Text style={styles.weeklySummaryText}>{params.summary.weeklySummary}</Text>
                </View>
                <View style={styles.summaryIdentifier}>
                    <Text style={styles.summaryIdentifierText}>{params.summary.name}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        height: 100,
      },
      rightContainer: {
        flex: 2,
        backgroundColor: '#4169E1',
        padding: 5,
      },
      leftContainer: {
        flex: 1,
        backgroundColor: '#EAF2FF',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 20,
      },
      summarizedScore: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      summarizedScoreMessage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      summarizedScoreText: {
        fontSize: 40,
        fontWeight: 'bold',
      },
      summarizedScoreMessageText: {
        fontSize: 20,
      },
      weeklySummary: {
        flex: 1.5,
        justifyContent: 'center',
        
      },
      summaryIdentifier: {
        flex: 2,
        justifyContent: 'flex-end',
        color: '#FFFFFF',
        alignItems: 'flex-end'
      },
      weeklySummaryText: {
        fontSize: 18,
        color: '#FFFFFF',
      },
      summaryIdentifierText: {
        fontSize: 24,
        fontWeight: 'bold',
      }
});

export default SummaryCard;
