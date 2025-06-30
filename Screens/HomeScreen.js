import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ResultsScreen from './ResultsScreen';
import SearchBar from './SearchBar';
import useResults from '../hooks/useResults';

const HomeScreen = () => {
    const [term, setSearchTerm] = useState('');
    const { searchResults, handleSearch } = useResults();
   
    const filterResultsByPrice = (price) => {
        return searchResults.filter(result => result.price === price);
    }
    
    // Get results that don't have a price
    const resultsWithoutPrice = () => {
        return searchResults.filter(result => !result.price);
    }
    
    // Check if any results have price information
    const hasPricedResults = () => {
        return searchResults.some(result => result.price);
    }

    // Render the results content based on search state
const renderContent = () => {
    if (searchResults && searchResults.length > 0) {
        if (hasPricedResults()) {
            // Pre-filter all price categories
            const costEffectiveResults = filterResultsByPrice('$');
            const midRangeResults = filterResultsByPrice('$$');
            const luxuryResults = filterResultsByPrice('$$$');
            const bougieResults = filterResultsByPrice('$$$$');
            const noPriceResults = resultsWithoutPrice();

            return (
                <View style={styles.resultsContainer}>
                    {costEffectiveResults.length > 0 && (
                        <>
                            <Text style={styles.categoryTitle}>Cost Effective</Text>
                            <ResultsScreen results={costEffectiveResults}/>
                        </>
                    )}
                    
                    {midRangeResults.length > 0 && (
                        <>
                            <Text style={styles.categoryTitle}>Mid-range Range</Text>
                            <ResultsScreen results={midRangeResults}/>
                        </>
                    )}
                    
                    {luxuryResults.length > 0 && (
                        <>
                            <Text style={styles.categoryTitle}>Luxury Range</Text>
                            <ResultsScreen results={luxuryResults}/>
                        </>
                    )}
                    
                    {bougieResults.length > 0 && (
                        <>
                            <Text style={styles.categoryTitle}>Bougue Level</Text>
                            <ResultsScreen results={bougieResults}/>
                        </>
                    )}
                    
                    {noPriceResults.length > 0 && (
                        <>
                            <Text style={styles.categoryTitle}>Price Not Listed</Text>
                            <ResultsScreen results={noPriceResults}/>
                        </>
                    )}
                </View>
            );
        } 
        // Default state, no search performed yet
        else {
            return (
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>Enter a search term to find restaurants</Text>
                </View>
            );
        }
    };
}

    return (
        <>
            <SearchBar 
                searchText={term} 
                setSearchText={newText => setSearchTerm(newText)} 
                onSubmit={() => handleSearch(term, 'Sugar House')} 
            />
            <ScrollView>
                {renderContent()}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    searchButton: {
        marginTop: 5,
        alignItems: 'flex-start',
    },
    resultsContainer: {
        backgroundColor: '#edecdd',
        margin: 5,
        flexDirection: 'column',
        flex: 1,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: '500',
        margin: 5,
    },
    messageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    message: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    }
});

export default HomeScreen;