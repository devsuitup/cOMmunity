import mongoose, { Schema } from "mongoose";

const MeetingSchema = new Schema({
    title:{
        type:String,
        required:true,
        minLength:[5, "Title must be at least 5 caracters long"]
    },
    description:{
        type:String,
        required:true,
        minLength:[10, "Title must be at least 10 caracters long"]
    },
    eventDate:{
        type:Date
    },
    group:{
        type:Schema.Types.ObjectId,
        ref:'Group'
    }
}, {timestamps:true});

export default mongoose.model('Meeting', MeetingSchema);
