import Group from "./model";
import { Meeting } from "../meetings";

export const createGroup = async (req, res) => {
    const {
        name,
        description, 
        category 
    } = req.body;

    if (!name) {
        return res.status(400).json({error:true, message:"Name is required"});
    } else if (typeof name !== 'string') {
        return res.status(400).json({error:true, message:"Name must be a string"});
    } else if (name.length < 5) {
        return res.status(400).json({error:true, message:"Name must be at least 5 caracters long"});
    }

    if (!description) {
        return res.status(400).json({error:true, message:"Description is required"});
    } else if (typeof description !== 'string') {
        return res.status(400).json({error:true, message:"Description must be a string"});
    } else if (description.length < 10) {
        return res.status(400).json({error:true, message:"Description must be at least 10 caracters long"});
    }

    const newGroup = new Group({name, description});

    try {
        return res.status(210).json({group: await newGroup.save()});
    } catch (e) {
        return res.status(500).json({error:true, message:"Error when trying to create new Group"});
    }
};

export const createNewGroupMeeting = async (req, res) => {
    const { title, description } = req.body;
    const { groupId } = req.params;
    
    if (!title) {
        return res.status(400).json({error:true, message:"title is required"});
    } else if (typeof title !== 'string') {
        return res.status(400).json({error:true, message:"title must be a string"});
    } else if (title.length < 5) {
        return res.status(400).json({error:true, message:"title must be at least 5 caracters long"});
    }

    if (!description) {
        return res.status(400).json({error:true, message:"Description is required"});
    } else if (typeof description !== 'string') {
        return res.status(400).json({error:true, message:"Description must be a string"});
    } else if (description.length < 10) {
        return res.status(400).json({error:true, message:"Description must be at least 10 caracters long"});
    }

    if (!groupId) {
        return res.status(400).json({error:true, message:"Group ID must be provided"});
    }

    const eventDate = new Date();

    // const newMeeting = new Meeting({title, description, groupId, eventDate });

    try {
        const {meeting, group} = await Group.addMeeting(groupId, {title, description, eventDate});
        return res.status(201).json({error: false, meeting, group});
        // console.log(result);
        // return res.status(210).json({meeting: await newMeeting.save()});
    } catch (e) {
        return res.status(500).json({error:true, message:"Error when trying to create new Meeting for this group"});
    }
};  

export const getGroupMeetings = async (req, res) => {
    const { groupId } = req.params;

    const group = await Group.findById(groupId);

    if (!group) {
        return res.status(404).json({error:true, message:`Group ${groupId} not found`});
    }

    try {
        return res.status(200).json({meetings: await Meeting.find({group:groupId}).populate('group', ['name', 'description'])});
    } catch (e) {
        return res.status(400).json({error:true, message:"Error when trying to fetch meetings"});
    }
};