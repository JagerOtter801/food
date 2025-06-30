import React from 'react';
import { View, Text, StyleSheet, Linking, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const ResultDetailScreen = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const { item } = route.params || {};// Adding a fallback to avoid errors if item is undefined


    return (
        <View style={styles.container}>
            <Text>{item.name}</Text>
            <Text>{item.display_phone}</Text>
            {item.is_closed ? (
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Closed</Text>
            ) : (
                <Text style={{ color: 'green', fontWeight: 'bold' }}>Open</Text>
            )}
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 12,
    },
    tag: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 8,
        borderRadius: 4,
        textAlign: 'center',
    },
    good: {
        backgroundColor: '#d4edda',
        color: '#155724',
    },
    bad: {
        backgroundColor: '#f8d7da',
        color: '#721c24',
    },
});

export default ResultDetailScreen;