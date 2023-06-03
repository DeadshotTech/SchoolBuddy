import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const WelcomeUser = () => {
    const icons = { name: 'Vishal Gautam', image: require('./image.png') };

    return (
        <View style={styles.container}>
            <View style={styles.welcomeDisplayContainer}>
                <Image source={icons.image} style={styles.displayPictureImage} />
                <View style={styles.welcomeMessageContainer}>
                    <Text style={styles.welcomeMessage}>Good Evening</Text>
                    <Text style={styles.displayName}>{icons.name}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
    },
    welcomeDisplayContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
        flexDirection: 'row'
    },
    displayPictureImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },
    welcomeMessageContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    welcomeMessage:{
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    },
    displayName: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default WelcomeUser;
