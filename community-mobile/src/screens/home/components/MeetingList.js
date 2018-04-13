import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/MeetingList';

const MeetingList = ({meetings}) => (
    <View style={styles.root}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Meetings</Text>
        </View>
        <View style={styles.contentContainer}>
            <ScrollView horizontal>
                {meetings.map((meeting, i) => (
                    <View key={i} style={styles.meetingCard}>
                        <View style={styles.meetingCardTopContainer}>
                            <Text style={styles.meetingCardTitle} >{meeting.title}</Text>
                        </View>
                        
                        <View style={styles.meetingCardBottomContainer}>
                            <Text style={styles.meetingCardMetaGroupName} >{meeting.group.name}</Text>
                            <Text style={styles.meetingCardMetaDate} >{meeting.eventDate.toString()}</Text>
                        </View>
                    </View>
                ))} 
            </ScrollView>
        </View>
    </View>
);

export default MeetingList;