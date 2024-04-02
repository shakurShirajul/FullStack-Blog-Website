import express from 'express';
import cors from 'cors';
import { connectDB } from './database/mongodb.js';
import { Post } from './models/post.js'

const app = express();

app.use(express.json()); // 
app.use(cors());

const PORT = 5000;

connectDB();

app.get('/posts/all', async (req, res) => {

    // Sorting  the posts by date in descending order
    const postData = await Post.find({}).sort({publishedDate: 1});

    // const postsData = await Post.find({});
    // console.log(postsData);
    res.send(postData);
})
app.post('/posts/new', async (req, res) => {
    const { title, author, content, category } = req.body;
    const publishedDate = new Date();
    await Post.create({
        title,
        author,
        content,
        category,
        publishedDate,
    });
    res.status(201).json({
        success: true,
        message: "Successfully Added Book",
    });
})

// app.get('/posts/category/:qry', (req, res) => {
//     const { title } = req.query;
//     console.log(query);
// })

app.get('/posts', async (req, res) => {
    const { category } = req.query;
    const post = await Post.find({ category: category });
    res.send(post);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})