import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import Colors from '../../../constants/Colors';

class CreateMeetingScreen extends Component {

    static navigationOptions = () => {

        return {
            title:'Create a new meeting',
            headerTitleStyle:{
                color:Colors.$whiteColor,
                alignSelf: 'center',
                textAlign: 'center',
                width: '80%',
            },
            // header: () => {
            //     const style = {
    
            //     }
            // }
            // headerBackTitle : (
            //     <Icon transparent
            //         name="md-close"
            //         style={{
            //             backgroundColor:Colors.$redColor,
            //             fontSize:30,
            //             color:Colors.$whiteColor
            //         }}
            //     />)
            headerRight: (<View/>),
            headerLeft:({onPress}) => {
                return (
                    <Button transparent>
                        <Icon transparent onPress ={() => onPress()}
                            name="md-close"
                            style={{
                                backgroundColor:Colors.$redColor,
                                fontSize:30,
                                color:Colors.$whiteColor
                            }}
                        />
                    </Button>
                )}
        }    
    }
    
    render() {
        return (
            <View>
                <Text>This is my future form</Text>
            </View>
        );
    }
}

export default CreateMeetingScreen;