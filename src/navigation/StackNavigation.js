import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/HomePages/Home';

const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default StackNavigation
