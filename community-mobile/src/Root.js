import React from 'react';
import {View, StatusBar} from 'react-native';
import Colors from '../constants/Colors'

import Navigator from './routes/Navigator';
import HomeNavigator from './routes/HomeNavigator'

console.log('Root.js');

// const Root = () => (
//     <Navigator />
// );

const Root = () => (
    <View style={{flex:1}}>
        <StatusBar 
            hidden={true}
            // backgroundColor={Colors.$darkBlueColor}
            // translucent={false}
            barStyle="light-content"
        />
        {/* <HomeNavigator /> */}
        <Navigator />
    </View>
);

export default Root;