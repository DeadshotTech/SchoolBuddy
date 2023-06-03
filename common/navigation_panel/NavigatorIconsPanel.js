import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const IconScreen = () => {
    const icons = [
        { name: 'Home', image: require('./image.png') },
        { name: 'Attendance', image: require('./image.png') },
        { name: 'Homework', image: require('./image.png') },
        { name: 'Revise', image: require('./image.png') },
        { name: 'Explore', image: require('./image.png') },
        { name: 'Results', image: require('./image.png') },
        { name: 'Store', image: require('./image.png') },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.iconContainer}>
            <Image source={item.image} style={styles.iconImage} />
            <Text style={styles.iconText}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={icons}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
    },
    iconContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 5
    },
    iconImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },
    iconText: {
        fontSize: 12,
    },
});

export default IconScreen;
