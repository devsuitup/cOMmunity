import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import styles from './styles/CreateMeetingScreen';
import { MaterialIcons } from '@expo/vector-icons'
import { FormLabel, FormInput, Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { MeetingApi } from '../../../constants/api';

const meetingApi = new MeetingApi();

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

    _createMeeting = async () => {
        const {
            title, description, eventDate
        } = this.state;

        const res = await meetingApi.createNewMeeting({
            title, description, eventDate
        });

        console.log(res);
    }

    _updateTitle = title => this.setState({title});

    _updateDescription = description => this.setState({description});

    _handleDatePicked = eventDate => {
        this.setState({eventDate});
        this._hideDateTimePicker();
    }

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible:false});
    
    state = {
        isDateTimePickerVisible:false,
        title:'',
        description:'',
        eventDate:moment(),
    }

    _isFormIncomplete = () => {
        console.log(this.state);
        const {
            title,
            description,
            eventDate
        } = this.state;

        return title < 5 || description < 5 || eventDate <= moment();
    }

    _selectDateTitle = () => {
        return this.state.eventDate < moment() ? 'Pick a date' : moment(this.state.eventDate).format('LLLL');
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
                            onChangeText={(title) => this._updateTitle(title)}
                            value={this.state.title}
                        />
                    </View>
                    <View style={styles.item}>
                        <FormLabel fontFamily="montserrat" fontWeight="normal" >Description</FormLabel>
                        <FormInput 
                            multiline
                            selectionColor={Colors.$redColor}
                            underlineColorAndroid={Colors.$grayColor}
                            onChangeText={(description) => this._updateDescription(description)}
                            value={this.state.description}
                        />
                    </View>
                    <View style={styles.item}>
                        <Button
                            title={this._selectDateTitle()}
                            raised
                            fontFamily="montserrat"
                            onPress={() => this.setState({isDateTimePickerVisible:true})}
                        />
                    </View>
                    <View style={styles.buttonCreate}>
                        <Button
                            title="It's a date !"
                            raised
                            backgroundColor={Colors.$darkBlueColor}
                            fontFamily="montserrat"
                            disabled={this._isFormIncomplete()}
                            onPress={this._createMeeting}
                        />
                    </View>
                </View>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode="datetime"
                />
            </View>
        );
    }
}

export default CreateMeetingScreen;