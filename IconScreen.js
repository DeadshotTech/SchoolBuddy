import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const IconScreen = () => {
    const icons = [
        { name: 'A', image: require('./image.png') },
        { name: 'B', image: require('./image.png') },
        { name: 'C', image: require('./image.png') },
        { name: 'D', image: require('./image.png') },
        { name: 'E', image: require('./image.png') },
        { name: 'F', image: require('./image.png') },
        { name: 'G', image: require('./image.png') },
        { name: 'H', image: require('./image.png') },
        { name: 'I', image: require('./image.png') },
        { name: 'J', image: require('./image.png') },
        { name: 'K', image: require('./image.png') },
        { name: 'L', image: require('./image.png') },
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
        paddingTop: '10%',
    },
    iconListContainer: {
        paddingHorizontal: 10,
    },
    iconContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
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
