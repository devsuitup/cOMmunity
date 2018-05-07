import {combineReducers} from 'redux';
import { reducer as form } from "redux-form";

import {
    HomeReducer,
    CreateMeetingReducer
} from '../screens';

export default combineReducers({
    home: HomeReducer,
    createMeeting: CreateMeetingReducer,
    form
});