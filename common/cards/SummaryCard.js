import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryCard = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.topText}>8/12</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>2 Due in 3 Days</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        height: 200,
      },
      topContainer: {
        flex: 3,
        backgroundColor: '#EAF2FF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      topText: {
        fontSize: 60,
        fontWeight: 'bold',
      },
      bottomContainer: {
        flex: 2,
        backgroundColor: '#4169E1',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      bottomText: {
        fontSize: 20,
        color: '#FFFFFF',
      },
});

export default SummaryCard;
