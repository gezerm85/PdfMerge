import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';

const Router = () => {
  return (
    <NavigationContainer>
       <BottomNavigation/>
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({})