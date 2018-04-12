import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minLength:[5, "Name must be at least 5 caracters long"]
    },
    description:{
        type:String,
        required:true,
        minLength:[10, "Description must be at least 10 caracters long"]
    },
    category:{
        type:String
    },
    meetings:[{
        type:Schema.Types.ObjectId,
        ref:'Meeting'
    }]
}, {timestamps:true});

/**
 * Create a meeting and add it to its parent group
 * @param String id 
 * @param Object args 
 */
GroupSchema.statics.addMeeting = async function(id, args) {
    // console.log(id, args);
    
    const Meeting = mongoose.model('Meeting');
    const meeting = await new Meeting({...args, group:id });

    const group = await this.findByIdAndUpdate(id, { $push: { meetings: meeting.id } });


    // group.meetings.push(meeting);

    return {
        meeting:await meeting.save(),
        group
    };

    // console.log(meeting);


};



export default mongoose.model('Group', GroupSchema);
