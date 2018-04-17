import React from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from "@expo/vector-icons";
import { Button, Icon } from 'native-base';

import { LoadingScreen } from "../../commons"
import { MeetingList } from "./components"
import { fetchMyMeetings } from './actions';

import styles from './styles/HomeScreen';
import Colors from '../../../constants/Colors'

@connect(
    state => ({
        myMeetings: state.home.myMeetings
    }),
    { fetchMyMeetings}
)
class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {

        return {
            headerRight: (
                    <View>
                        <Button 
                            transparent
                            onPress = {() => navigation.navigate('CreateMeeting')}
                        >
                            <Icon
                                name="md-add-circle"
                                style={{
                                    color:Colors.$whiteColor,
                                    fontSize:30
                                }}
                            />
                        </Button>
                    </View>
            ),
            // headerStyle: {
            //     backgroundColor:Colors.$redColor,
            //     // alignItems:'center',
            // },

            tabBarIcon: ({tintColor}) => (
                <FontAwesome
                    name="home"
                    size={25}
                    color={tintColor}
                />
            )
        }
    }

    // state = {
    //     loading:false,
    //     meetings:[]
    // };

    // async componentDidMount() {
        // this.setState({loading:true});
        // const meetings = await this.props.meetingApi.fetchGroupMeeting();
        // // this.setState({loading:false, meetings});
        // setTimeout(() => this.setState({loading:false, meetings}), 1000);
    // }

    componentDidMount() {
        this.props.fetchMyMeetings();
    }

    render() {

        const {
            myMeetings: {
                isFetched,
                data,
                errors
            }
        } = this.props;

        // console.log(this.props);

        if (!isFetched) {
            return (
                <View style={styles.root}>
                    <LoadingScreen />
                </View>)
        } else if (errors.on) {
            return (
                <View><Text>{error.messafe}</Text></View>
            )
        }
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
                        meetings={data}                        
                    />
                </View>
                
            </View>
        )
        
    }
}


export default HomeScreen;
