import {
    CREATE_MEETING,
    CREATE_MEETING_ERROR,
    CREATE_MEETING_SUCCESS
} from './actions';

const INITIAL_STATE = {
    isLoading:false,
    errors : {
        on:false,
        message: null
    }
};

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case CREATE_MEETING:
            return {
                ...INITIAL_STATE,
                isLoading:true
            };
        case CREATE_MEETING_SUCCESS:
            return {
                ...INITIAL_STATE,
            };
        case CREATE_MEETING_ERROR:
            return {
                ...INITIAL_STATE,
                errors : {
                    on:true,
                    message: 'Error occured during meeting saving'
                }
            };
    default:
        return state;
    }
};