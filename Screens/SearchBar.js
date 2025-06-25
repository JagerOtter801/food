import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({searchText, setSearchText, onSubmit}) => {
    return (
            <View style={styles.searchBar}>
                <Feather name="search" size={24} color="black" />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter search text"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={searchText}
                        onChangeText={setSearchText}
                        onEndEditing={onSubmit}
                    />
            </View>
    );
};

const styles = StyleSheet.create({
    searchBar : {
        height: 40, 
        flexDirection: 'row',
        alignItems: 'space-between',
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff4e6',
    },
});



export default SearchBar;