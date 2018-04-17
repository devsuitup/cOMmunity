import {
    FETCH_MY_MEETINGS
} from './actions'

const INITIAL_STATE = {
    myMeetings: {
        data:[],
        isFetched:false,
        errors : {
            on:false,
            message: null
        }
    }
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type, `${FETCH_MY_MEETINGS}_FULFILLED`);
    switch (action.type) {
        case `${FETCH_MY_MEETINGS}_PENDING`:
            return INITIAL_STATE;
        case `${FETCH_MY_MEETINGS}_FULFILLED`:
            return {
                myMeetings: {
                    data:action.payload,
                    isFetched:true,
                    errors : {
                        on:false,
                        message: null
                    }
                }
            };
        case `${FETCH_MY_MEETINGS}_REJECTED`:
            return {
                myMeetings:  {
                    data:[],
                    isFetched:false,
                    errors : {
                        on:true,
                        message: 'Error while fetching my meetings'
                    }
                }
            };
            
        default:
            return state;
    }
};