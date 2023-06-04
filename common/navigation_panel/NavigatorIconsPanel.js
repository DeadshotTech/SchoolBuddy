import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const icons = [
    { name: 'Home', image: require('./homework.png') },
    { name: 'Attendance', image: require('./homework.png') },
    { name: 'Homework', image: require('./homework.png') },
    { name: 'Revise', image: require('./homework.png') },
    { name: 'Explore', image: require('./homework.png') },
    { name: 'Results', image: require('./homework.png') },
    { name: 'Store', image: require('./homework.png') },
];



const NavigatorIconsPanel = ({handleIconClick}) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleIconClick(item.name)}>
            <View style={styles.iconContainer}>
                <Image source={item.image} style={styles.iconImage} />
                <Text style={styles.iconText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
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

export default NavigatorIconsPanel;
