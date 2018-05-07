import { MeetingApi } from "../../../constants/api";
import { fetchMyMeetings } from "../home/actions";

const meetingApi = new MeetingApi();

export const CREATE_MEETING = 'CREATE_MEETING';
export const CREATE_MEETING_ERROR = 'CREATE_MEETING_ERROR';
export const CREATE_MEETING_SUCCESS = 'CREATE_MEETING_SUCCESS';

export const createMeeting = args => async dispatch => {
    dispatch({type:CREATE_MEETING});
    try {
        await meetingApi.createNewMeeting(args);
        dispatch({type:CREATE_MEETING_SUCCESS});
    } catch (e) {
        return dispatch({type: CREATE_MEETING_ERROR});
    }
    return await dispatch(fetchMyMeetings());
}