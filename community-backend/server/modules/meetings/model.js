import mongoose, { Schema } from "mongoose";

const MeetingSchema = new Schema({
    title:{
        type:"string",
        required:true,
    },
    description:{
        type:"string",
        required:true,
    },
});


export default mongoose.model('Meeting', MeetingSchema);
