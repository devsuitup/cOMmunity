import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import { HeaderTitleComponent } from '../commons';
import Colors from '../../constants/Colors'
import { View } from 'react-native';
import {
    CreateMeetingScreen
} from '../screens'

export default StackNavigator({
    Home:{ screen:HomeNavigator },
    CreateMeeting: { screen:CreateMeetingScreen }
},{
    mode:'modal',
    
    navigationOptions: {
        // headerTitle:HeaderTitleComponent,
        // headerLeft: (<View/>),
        // headerRight: (<View/>),
        // headerTitleStyle: {
        //     // flex:1
        // //     alignSelf: 'center',
        //     textAlign: 'center',
        //     alignSelf: 'center',
        // //     width: '100%',
        // //     // height:
        // },
        headerTitleStyle: {
            // flex:1
            alignSelf: 'center',
            textAlign: 'center',
            width: '80%',
        //     // height:
        },
        headerStyle: {
            // justifyContent: 'center',
            backgroundColor:Colors.$redColor,
        },
    //     headerLeftStyle: {
    //     //     flex:0.3,
    //         width:'30%',
    //     },
    //     headerRightStyle: {
    //     //     flex:0.3,
    //         width:'30%',
    //     }
    },
})