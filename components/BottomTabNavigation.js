import React from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ExchangeScreen from '../screens/ExchangeScreen'
import HomeScreen from '../screens/HomeScreen'


export const bottomTabNavigation =createBottomTabNavigator({
    Exchange:{screens:ExchangeScreen},
    HomeScreen:{screens:HomeScreen}
})
