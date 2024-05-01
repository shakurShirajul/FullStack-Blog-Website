import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    // _id:{
    //     type: String,
    //     require: true,
    //     unique:
    // },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    postID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'  
    }],
    userBio:{
        type: String,
        
    }
})

export const User = mongoose.model('users', userSchema);