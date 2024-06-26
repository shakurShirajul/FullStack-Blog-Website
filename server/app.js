import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './database/mongodb.js';
import { Post } from './models/post.js'
import { User } from './models/user.js';

const app = express();

app.use(express.json()); // 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser())

const PORT = 9000;

connectDB();

app.get('/posts/all', async (req, res) => {

    // Sorting  the posts by date in descending order
    const postData = await Post.find({}).sort({ publishedDate: 1 });

    // const postsData = await Post.find({});
    // console.log(postsData);
    res.send(postData);
})

// Creating New Post
app.post('/posts/new', async (req, res) => {
    const { title, category, content, author, authorID  } = req.body;
    console.log(req.body);
    const publishedDate = new Date();
    const newPost = await Post.create({
        title,
        category,
        content,
        author,
        authorID,
        publishedDate,
    });

    const updateUserPostArray = await User.updateOne(
        { _id: authorID },
        { $push: { postID: newPost._id } }
    );

    console.log(newPost);
    console.log(".......................");
    console.log(updateUserPostArray);


    res.status(201).json({
        success: true,
        message: "Successfully Added Book",
    });
})

app.get('/posts', async (req, res) => {
    const { category } = req.query;
    const post = await Post.find({ category: category });
    res.send(post);
})

app.get('/posts/:id', async(req,res)=>{
    const  userID=req.params.id;
    // console.log(userID);
    const postData = await Post.find({authorID: userID});
    // console.log(postData);
    res.send(postData);
})

app.post('/user/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try{
        const result = await User.insertMany({
            firstName,
            lastName,
            email,
            password
        });
        return res.status(200).json({ message: 'Login successful'})
    }
    catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    console.log(req.body);
})

app.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if password matches
        const passwordMatch = password === user.password ? true : false;

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Password matches, login successful
        console.log(user._id, user._id.toString());
        return res
            // .cookie("token", user._id.toString(), { maxAge: 900000, httpOnly: true })
            .status(200).json({ message: 'Login successful', data: user})
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
})


/* Tokens, such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user
details. Instead, they are issued by the server during the authentication process and then stored on the
client-side (e.g., in cookies or local storage) for later use. */





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})