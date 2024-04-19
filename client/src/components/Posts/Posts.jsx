import { useState, useEffect } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/posts/all')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])

    return (
        <div className="flex-1 px-10">
            {
                posts.map((post,index)=>
                    <Post key={index} post={post}/>    
                )
            }
        </div>
    );
};

export default Posts;