import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    publishedDate :{
        type: Date,
    },
    authorID :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'  
    }

})

export const Post = mongoose.model("posts", postSchema);