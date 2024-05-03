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
		const author = userID.firstName + " " + userID.lastName;

		const response = await fetch("http://localhost:9000/posts/new", {
			method: "POST",
			credentials: "include", // Using it for cookies
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				category,
				content,
				author: userID.firstName + " " + userID.lastName,
				authorID: userID._id,
			}),
		});

		// console.log(title, category, content);
	};
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-semibold mb-4 text-center mb-[100px]">
				Create a New Blog Post
			</h1>

			<form className="max-w-xl mx-auto" onSubmit={handleStorySubmit}>
				<div className="mb-4">
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						Title
					</label>
					<input
						type="text"
						id="title"
						name="title"
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-2 h-14 shadow-sm sm:text-sm border-gray-300 rounded-md"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="content"
						className="block text-sm font-medium text-gray-700"
					>
						Content
					</label>
					<textarea
						id="content"
						name="content"
						rows="5"
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
					></textarea>
				</div>

				<div className="mb-4">
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700"
					>
						Category
					</label>
					<select
						id="category"
						name="category"
						className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none outline-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					>
						<option>Technology</option>
						<option>Travel</option>
						<option>Food</option>
						<option>Lifestyle</option>
					</select>
				</div>

				<div className="mb-4">
					<label
						htmlFor="tags"
						className="block text-sm font-medium text-gray-700"
					>
						Tags
					</label>
					<input
						type="text"
						id="tags"
						name="tags"
						className="mt-1 h-8 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
					/>
				</div>

				<div className="mb-4">
					<label
						htmlFor="featured-image"
						className="block text-sm font-medium text-gray-700"
					>
						Featured Image
					</label>
					<input
						type="file"
						id="featured-image"
						name="featured-image"
						accept="image/*"
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
					/>
				</div>

				<div className="flex justify-end">
					<button
						type="submit"
						className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Create Post
					</button>
				</div>
			</form>
		</div>
	);
};

export default TextBox;
