import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchMeetings } from './constants/api';


export default class App extends React.Component {

  static defaultProps = {
    fetchMeetings
  }

  state = {
    loading:false,
    meetings:[]
  }

  async componentDidMount () {
    this.setState({loading:true});

    // Sleep for 10 seconds
    await new Promise(resolve => { setTimeout(resolve, 10000); });
    
    // fetchMeetings()
      // .then((data) => this.setState({loading: false, meetings:data.meetings}));

      // OR 
    
    const data = await this.props.fetchMeetings();
    console.log('data', data);
    this.setState({loading: false, meetings:data.meetings});



    // console.log(this.props.fetchMeetings, await this.props.fetchMeetings());
    // fetchMeetings().then((data) => {
    //   console.log('data', data);
    //   this.setState({loading: false, meetings:data.meetings});
    // });
    
    // fetch('http://192.168.56.1:3000/api/meetings')
    // .then(res => {
        // const data = res.json()
        // const data = res.json()
        // this.setState();
    // });

  }


  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>

      )
    } else {
      return (
        <View style={styles.container}>
          <Text>cOMmunity \_o_/</Text>
          {this.state.meetings.map((meeting, i) => (
            <Text key={i}>{meeting.title}</Text>
          ))}

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
