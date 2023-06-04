import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductInformationCard = (params) => {

    return (
      <TouchableOpacity style={styles.container} onPress={() => params.handleSummaryClick(params.summary.id)}>
        <View style={styles.leftContainer}>
          <Image source={require('./homework.png')} style={styles.iconImage} />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.summaryIdentifier}>
              <Text style={styles.summaryIdentifierText}>{params.summary.name}</Text>
          </View>
          <View style={styles.weeklySummary}>
              <Text style={styles.weeklySummaryText}>{params.summary.weeklySummary}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      height: 120,
    },
    rightContainer: {
      flex: 2,
      backgroundColor: '#4169E1',
      padding: 5,
    },
    leftContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EAF2FF',
    },
    iconImage: {
      width: '100%',
      height: '100%',
    },
    summaryIdentifier: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    weeklySummary: {
      flex: 2,
    },
    summaryIdentifierText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#f0f0f5',
    },
    weeklySummaryText: {
      fontSize: 16,
      color: '#FFFFFF',
    }
});

export default ProductInformationCard;
