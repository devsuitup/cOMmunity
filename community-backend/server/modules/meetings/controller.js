import Meeting from "./model";

export const createMeeting = async (req, res) => {
    try {
        const {title, description } = req.body;
        const newMeeting = new Meeting({title, description});

        return res.status(210).json({meeting: await newMeeting.save()});
    } catch (e) {
        return res.status(e.status).json({error:true, message:"Error when trying to create new Meeting"});
    }
};

export const getAllMeetings = async (req, res) => {
    try {
        return res.status(200).json({meetings: await Meeting.find({})});
    } catch (e) {
        return res.status(e.status).json({error:true, message:"Error getting the meetings"});
    }
};