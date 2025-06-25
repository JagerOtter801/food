import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Screens/HomeScreen";
import ResultDetailScreen from "./Screens/ResultDetailScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "HUNGER RUN"
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ResultDetails" component={ResultDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
