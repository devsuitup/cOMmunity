import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Colors from "../../constants/Colors";
import { HeaderTitleComponent } from '../commons';
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
    navigationOptions: ({ navigation }) => ({
        headerTitle:HeaderTitleComponent,
        headerLeft: (<View/>),
        // headerLeft: navigation.state.routeName === 'Home'
        //     ? <View />
        //     : <Button clickAction={() => navigation.goBack()} />,
        headerRight: (<View/>),
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
        // headerLeftStyle: {
        // //     flex:0.3,
        //     width:'30%',
        //     // backgroundColor:Colors.$redColor,
        // },
        // headerRightStyle: {
        // //     flex:0.3,
        //     width:'30%',
        // }
    }),
});
