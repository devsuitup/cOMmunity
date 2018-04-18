import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import styles from './styles/CreateMeetingScreen';
import { MaterialIcons } from '@expo/vector-icons'
import { FormLabel, FormInput, Button } from 'react-native-elements';

class CreateMeetingScreen extends Component {

    static navigationOptions = () => {

        return {
            title:'Create a new meeting',
            headerTitleStyle:{
                fontFamily: "montserrat",
                fontWeight:"200",
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
                    <TouchableOpacity 
                        style={styles.iconClose} 
                        onPress = {() => onPress()} 
                    >
                        <MaterialIcons 
                            name="close"
                            size={30}
                            color={Colors.$whiteColor}
                        />
                    </TouchableOpacity>
                )
            }
        }    
    }
    
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <FormLabel fontFamily="montserrat" fontWeight="normal" >Title</FormLabel>
                        <FormInput 
                            selectionColor={Colors.$redColor}
                            underlineColorAndroid={Colors.$grayColor}
                        />
                    </View>
                    <View style={styles.item}>
                        <FormLabel fontFamily="montserrat" fontWeight="normal" >Description</FormLabel>
                        <FormInput 
                            multiline
                            selectionColor={Colors.$redColor}
                            underlineColorAndroid={Colors.$grayColor}
                        />
                    </View>
                    <View style={styles.item}>
                        <Button
                            title="Pick a date"
                            raised
                            fontFamily="montserrat"
                        />
                    </View>
                    <View style={styles.buttonCreate}>
                        <Button
                            title="It's a date !"
                            raised
                            backgroundColor={Colors.$darkBlueColor}
                            fontFamily="montserrat"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default CreateMeetingScreen;