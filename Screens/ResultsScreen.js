import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { Image } from 'react-native';   
import { useNavigation } from '@react-navigation/native';

const ResultsScreen = ({results }) => {
    const navigation = useNavigation();

   

    return (
        <View style={styles.container}>
        
            <FlatList
            horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.resultContainer} onPress={()=> navigation.navigate('ResultDetails', { item })}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {item.image_url || item != null ? (
                                <Image 
                                    source={{ uri: item.image_url }} 
                                    style={styles.image}
                                />
                            ) : (
                                <View style={styles.noImage} />
                            )}
                                <View>
                                <Text style={styles.name}>{item.name} ({item.rating})</Text>
                                <Text> ({item.price}) {item.review_count} Reviews </Text>
                                <Text>{item.location.display_address[0]}</Text>
                                <Text>{item.location.display_address[1]}</Text>
                                <Text>{item.location.display_address[2]}</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
       
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    resultContainer: {
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#fff4e6',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },
    noImage: {
        width: 80,
        height: 80,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginRight: 10,
    },
});

export default ResultsScreen;