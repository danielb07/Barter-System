import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';

import CustomSideBarMenu from './CustomSideBarMenu';
import BottomTabNavigator from './BottomTabNavigation';
export const AppDrawerNavigator = createDrawerNavigator({
        Home:{
            screen: BottomTabNavigator
        },
    },
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:Home
    }
)
