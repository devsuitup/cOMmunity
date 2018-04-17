import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Colors from "../../constants/Colors";
import { HeaderComponent } from '../commons';
import { Platform, StatusBar, Text, View } from 'react-native';

import {
     HomeScreen, 
     NotificationScreen,
     ProfileScreen
} from '../screens';

export default TabNavigator ({
    Home:{
        screen:HomeScreen,
    },
    Notifications:{
        screen:NotificationScreen,
    },
    Profile:{
        screen:ProfileScreen,
    },
}, {
    headerMode: 'none',
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    swipeEnabled:true,
    animationEnabled :true,
    tabBarOptions : {
        showIcon: true,
        showLabel: false,
        inactiveTintColor: Colors.$darkBlueColor,
        activeTintColor:Colors.$whiteColor,
        indicatorStyle: {backgroundColor:Colors.$redColor },
        pressColor: Colors.$redColor,
        style : {
            backgroundColor:Colors.$blackColor,
        }
    },
    navigationOptions: {
        header:HeaderComponent,
        // title:(<Text>cOmmunity</Text>), //'cOMmunity',
        headerBackTitle: null,
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            width: '90%',
            // height:
        },
        headerStyle: {
            backgroundColor:Colors.$redColor,
        }
    },
});
