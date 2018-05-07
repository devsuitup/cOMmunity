import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import Colors from "../../../constants/Colors";
import styles from "./styles/CreateMeetingScreen";
import { MaterialIcons } from "@expo/vector-icons"
import { FormLabel, FormInput, Button } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { MeetingApi } from "../../../constants/api";
import { CreateMeetingForm } from "./components";
import { createMeeting } from './actions';
import {LoadingScreen} from "../../commons";

const meetingApi = new MeetingApi();

@connect(
    state => ({
        meeting:state.createMeeting
    }),
    { createMeeting }
)
export default class CreateMeetingScreen extends Component {

    static navigationOptions = () => {

        return {
            title:"Create a new meeting",
            headerTitleStyle:{
                fontFamily: "montserrat",
                fontWeight:"200",
                color:Colors.$whiteColor,
                alignSelf: "center",
                textAlign: "center",
                width: "80%",
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

    _createMeeting = async values => {
        const {
            eventDate
        } = this.state;

        await this.props.createMeeting ({...values, eventDate});
        this.props.navigation.goBack();
    }

    _handleDatePicked = eventDate => {
        this.setState({eventDate});
        this._hideDateTimePicker();
    }

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible:false});
    
    state = {
        isDateTimePickerVisible:false,
        eventDate:moment(),
    }

    _isFormIncomplete = () => {
        console.log(this.state);
        const {
            eventDate
        } = this.state;

        return eventDate <= moment();
    }

    _selectDateTitle = () => {
        return this.state.eventDate < moment() ? "Pick a date" : moment(this.state.eventDate).format("LLLL");
    }

    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true})

    render() {
        const {
            meeting
        } = this.props;

        if (meeting.isLoading) 
            return (
                    <LoadingScreen/>
        );
        
        else if (meeting.errors.on)
            return (
                <View style={styles.root}>
                    <Text>{meeting.errors.message}</Text>
                </View>
        );


        return (
            <View style={styles.root}>
                <CreateMeetingForm 
                    createMeeting={this._createMeeting}
                    showDateTimePicker={this._showDateTimePicker}
                    selectDateTitle={this._selectDateTitle()}
                />
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
