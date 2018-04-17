import { MeetingApi } from '../../../constants/api';

const meetingApi = new MeetingApi();

// console.log('MeetingAPI', MeetingApi );

export const FETCH_MY_MEETINGS = 'FETCH_MY_MEETINGS';

export const fetchMyMeetings = () => ({
    type: FETCH_MY_MEETINGS,
    payload: meetingApi.fetchGroupMeeting()
})
