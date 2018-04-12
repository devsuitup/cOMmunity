// import fetch from 'node-fetch';

export const fetchMeetings = () => 
    // fetch('http://localhost:3000/api/meetings')
    fetch('http://192.168.56.1:3000/api/meetings')
        .then(res => res.json())
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
    
