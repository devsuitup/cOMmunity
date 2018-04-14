import React from 'react';
import {View, Text} from 'react-native';
import { MeetingApi } from "../../../constants/api";
import { LoadingScreen } from "../../commons"
import { MeetingList } from "./components"
import { FontAwesome } from "@expo/vector-icons";
import styles from './styles/HomeScreen';
import Colors from '../../../constants/Colors'
const meetingApi = new MeetingApi();

class HomeScreen extends React.Component {

    static defaultProps = {
        meetingApi
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <FontAwesome
                name="home"
                size={25}
                color={tintColor}
            />
        )
    }

    state = {
        loading:false,
        meetings:[]
    };

    async componentDidMount() {
        this.setState({loading:true});
        const meetings = await this.props.meetingApi.fetchGroupMeeting();
        // this.setState({loading:false, meetings});
        setTimeout(() => this.setState({loading:false, meetings}), 1000);
    }


    render() {

        if (this.state.loading) {
            return (
                <View style={styles.root}>
                    <LoadingScreen />
                </View>)
        } else {
            return (
                <View style={styles.root}>
                    <View style={styles.topContainer}>
                        <FontAwesome
                            name="home"
                            size={25}
                        />
                        <Text>HomeScreen!!!</Text>
                    </View>
                    
                    <View style={styles.bottomContainer}>
                        <MeetingList 
                            meetings={this.state.meetings}                        
                        />
                    </View>
                    
                </View>
            )
        }
    }
}


export default HomeScreen;
