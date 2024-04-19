import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const TextBox = () => {
    const { userID, setUserID } = useContext(AuthContext);

    // const {firstName, lastName, }

    const handleStorySubmit = async (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const category = event.target.category.value;
        const content = event.target.content.value;
        const author = userID.firstName + ' '+userID.lastName;
        

        const response = await fetch('http://localhost:9000/posts/new', {
            method: 'POST',
            credentials: 'include', // Using it for cookies
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                category,
                content,
                author : userID.firstName+ " " +userID.lastName,
                authorID: userID._id,
            }),
        })

        // console.log(title, category, content);
    }
    return (
        <div>
            <form onSubmit={handleStorySubmit} >

                <input type="text" placeholder="Title" className="border p-5 w-full" name="title" />
                <input type="text" placeholder="Category" className="border" name="category" />

                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs focus:outline-none" name="content" ></textarea>

                {/* <input type="submit" value="submit"/> */}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default TextBox;