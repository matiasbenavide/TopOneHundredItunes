import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopOneHundredList from '../screens/TopOneHundredList';

const Stack = createNativeStackNavigator();

const ROUTES = {
    HOME: 'Home'
}

const TopOneHundredNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen
                name={ROUTES.HOME}
                component={TopOneHundredList}
                options={{
                    title: 'Top 100',
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>

);

export default TopOneHundredNavigator;