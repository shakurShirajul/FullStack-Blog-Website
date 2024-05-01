import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleRegistration = async (event) => {
        event.preventDefault();

        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(firstName, lastName, email, password);

        const response = await fetch('http://localhost:9000/user/signup', {
            method: 'POST',
            credentials: 'include', // Using it for cookies
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            }),
        })
        if (!response.ok) {
            console.log(response.statusText, response.status);
        } else {
            navigate("/login")
        }

    };
    return (
        <div className='h-screen flex justify-center items-center bg-black'>
            <div className='container mx-auto'>
                <div className='flex justify-center font-inter gap-10'>
                    <div className="flex flex-col justify-center font-space-grotesk font-bold text-5xl text-white">
                        <h1 >Create Your Blog Profile</h1>
                        <h1>Share Your Thoughts</h1>
                    </div>
                    <div className="space-y-5">
                        <div>
                            <h1 className="font-bold text-lg text-right text-[#898889]">Already Have Account? <Link to="/login"><span className="text-blue-800">Login</span></Link></h1>
                        </div>
                        <div>
                            <h1 className="text-white font-bold font-space-grotesk text-5xl">Sign Up</h1>
                        </div>
                        <form className="space-y-5" onSubmit={handleRegistration}>
                            <div className="flex gap-5">
                                <label className="flex items-center justify-center ">
                                    <input type="text" className="text-xl bg-[#222122] text-[#898889] pl-8 py-3 rounded-[4px]" name="firstName" placeholder="First Name" required />
                                </label>
                                <label className="flex items-center justify-center ">
                                    <input type="text" className="text-xl bg-[#222122] text-[#898889] pl-8 py-3 rounded-[4px]" name="lastName" placeholder="Last Name" required />
                                </label>
                            </div>
                            <label className="flex items-center justify-center">
                                <input type="email" className="text-xl bg-[#222122] text-[#898889] pl-8 py-3 rounded-[4px] w-full" name="email" placeholder="Email" required />
                            </label>
                            <label className="flex items-center justify-center">
                                <input type="password" className="text-xl bg-[#222122] text-[#898889] pl-8 py-3 rounded-[4px] w-full" name="password" placeholder="Password" required />
                            </label>
                            <label className="flex items-center gap-2 my-2 text-white">
                                <input type="checkbox" name="terms" /> I agree to the Terms of Service and Privacy Notice
                            </label>
                            <label className="btn btn-info bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] font-bold text-lg w-full">
                                <button className="w-full">Sign me up !  </button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;