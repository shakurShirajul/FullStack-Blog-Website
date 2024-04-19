const Post = ({ post }) => {
    // console.log(post);
    return (
        <div>
            <div className="flex-1 bg-[#f2f2ff] p-10 mb-5 rounded-3xl">
                <div className="flex gap-5 text-sm font-medium">
                    {/* <h1># {post.category}</h1>
                    <h1>Author: {post.author}</h1> */}
                    <p>{post.publishedDate}</p>
                </div>
                <div className="space-y-4 mb-5">
                    <h1 className="text-lg font-bold">{post.title}</h1>
                    <h1 className="text-base text-[#12132D99] font-normal">{post.content}</h1>
                </div>
                <hr className="border-1 border-dashed border-[#12132D40] mb-5" />
                <div>
                    
                </div>
            </div>
        </div>
    );
};
export default Post;