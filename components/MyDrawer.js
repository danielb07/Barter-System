import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';

import CustomSideBarMenu from './CustomSideBarMenu';
import BottomTabNavigator from './BottomTabNavigation';
import SettingScreen from './SettingScreen';
export const AppDrawerNavigator = createDrawerNavigator({
        Home:{
            screen: BottomTabNavigator
        },
        Setting:{
            screen:SettingScreen
        }
        
    },
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:Home
    }
)
