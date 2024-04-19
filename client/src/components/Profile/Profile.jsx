import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Post from "../Post/Post";

const Profile = () => {
    const { userID, setUserID } = useContext(AuthContext)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9000/posts/${userID._id}`)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])
    return (
        <div className="flex w-[100%]">
            <div className="w-[80%]  h-screen px-10">
                {
                    posts.map((post, index) =>
                        <Post key={index} post={post} />
                    )
                }
            </div>
            <div className="w-[20%]  h-screen flex flex-col items-start pl-10 border-l space-y-4">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start space-y-4">
                    <h1 className="text-left">{userID.firstName+" "+userID.lastName}</h1>
                    <h1 className="text-left">Hello World! Im an Italian guy interested in programming, money and AI! I'm interested in reporting what I learn; I hope to passionate you as well</h1>
                    <button className="px-3 py-3 font-semibold border-none border-[#1A8917] border-2 rounded-full text-white bg-[#1A8917]">Follow</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;