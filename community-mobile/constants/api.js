import axios from 'axios';

axios.defaults.baseURL = 'http://10.0.3.2:3000/api';
// axios.defaults.baseURL = 'http://192.168.56.1:3000/api';

class MeetingApi {
        
    constructor() {
        this.groupId = "5acf6b234332f33f30eb022a";
        this.path = `groups/${this.groupId}/meetings`
    }

    async fetchGroupMeeting () {
        try {
            const {data} = await axios.get(this.path);
            return data.meetings;
        } catch (e) {
            console.log(e);
        }
    }
}

export {
    MeetingApi,
}


// import fetch from 'node-fetch';
// export const fetchMeetings = () => 
    // fetch('http://localhost:3000/api/meetings')
    // fetch('http://192.168.56.1:3000/api/meetings')
        // .then(res => res.json())
        // .then(json => console.log(json));
	// .then(json => console.log(json));
    // .then(res => 
    //     // {
    //         // console.log('res', res.text());

    //         res.json()
    //     // }
    // )
    // .then(body => console.log(body));

    // .err(err => console.error(err));
    

//  */