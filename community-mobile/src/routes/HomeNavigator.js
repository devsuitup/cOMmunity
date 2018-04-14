import { TabNavigator } from 'react-navigation';
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
});
