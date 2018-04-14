import { TabNavigator } from 'react-navigation';
import Colors from "../../constants/Colors";
import { Platform, StatusBar } from 'react-native';

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
        title:'cOMmunity',
        headerBackTitle: null,
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            width: '90%',
        },
        headerStyle: {
            backgroundColor:Colors.$redColor,
        }
    },
});
