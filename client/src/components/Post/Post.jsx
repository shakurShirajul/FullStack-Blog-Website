const Post = ({ post }) => {
    // console.log(post);
    return (
        <div>
            {/* <div>
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary border-none ${userStatus}"></span>
                    <div className="grid w-[72px] h-[72px] bg-base-300 place-items-center rounded-2xl"><img src="${authorImage}" alt="" className="rounded-2xl"/></div>
                </div>
            </div> */}
            <div className="flex-1">
                <div className="flex gap-5 text-sm font-medium">
                    <h1># {post.category}</h1>
                    <h1>Author: {post.author}</h1>
                </div>

                <div className="space-y-4 mb-5">
                    <h1 className="text-lg font-bold">{post.title}</h1>
                    <h1 className="text-base text-[#12132D99] font-normal">{post.content}</h1>
                </div>
                <hr className="border-1 border-dashed border-[#12132D40] mb-5" />

                {/* <div className="flex justify-between"> */}
                    {/* <ul className="flex gap-3 lg:gap-6 text-[#12132D99]">
                        <li className="flex items-center justify-center gap-1 lg:gap-3"><i className="fa-regular fa-message text-base"></i><p>${commentCount}</p></li>
                        <li className="flex items-center justify-center gap-1 lg:gap-3"><i className="fa-regular fa-eye text-base"></i><p>${viewCount}</p></li>
                        <li className="flex items-center justify-center gap-1 lg:gap-3"><i className="fa-regular fa-clock text-base"></i><p>${postedTime}</p></li>
                    </ul> */}
                    {/* <button onClick="markAsRead(${postId}, ${viewCount})"><i className="fa-solid fa-envelope-open text-[#10B981] text-xl"></i></button> */}
                {/* </div> */}
            </div>
        </div>
    );
};
export default Post;