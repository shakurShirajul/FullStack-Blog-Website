import { useState, useEffect } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts/all')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])

    return (
        <div>
            {
                posts.map((post,index)=>
                    <Post key={index} post={post}/>    
                )
            }
        </div>
    );
};

export default Posts;