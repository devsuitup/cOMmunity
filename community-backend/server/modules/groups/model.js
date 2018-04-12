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


GroupSchema.statics.addMeeting = async function(id, args) {
    // console.log(id, args);
    
    const Meeting = mongoose.model('Meeting');

    const group = await this.findById(id);

    const meeting = await new Meeting({...args, group });

    group.meetings.push(meeting);

    return await Promise.all([meeting.save(), group.save()]);

    // console.log(meeting);


};



export default mongoose.model('Group', GroupSchema);
