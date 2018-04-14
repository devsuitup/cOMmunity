import React from 'react';
import {View, StatusBar} from 'react-native';

import Navigator from './routes/Navigator';
import HomeNavigator from './routes/HomeNavigator'


const Root = () => (
    <Navigator />
);

// const Root = () => (
//     <View style={{flex:1}}>
//         <StatusBar hidden={true} />
//         <HomeNavigator />
//         {/* <Navigator /> */}
//     </View>
// );

export default Root;