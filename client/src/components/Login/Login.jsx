// import Cookies from 'js-cookie'
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AuthProviders, { AuthContext } from '../../providers/AuthProviders';
// import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const { userID, setUserID, isLogin, setIsLogin } = useContext(AuthContext)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email + " " + password);


        const response = await fetch('http://localhost:9000/user/login', {
            method: 'POST',
            credentials: 'include', // Using it for cookies
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const responseData = await response.json();
        console.log(responseData.data);

        if (!response.ok) {
            console.log(response.statusText, response.status);
        } 
        else {
            setUserID(responseData.data);
            setIsLogin(true);
            // console.log('UserData', userID);
            console.log("checking",isLogin);
            navigate("/");
        }
    };
    return (
        <div className='h-screen flex justify-center items-center bg-black'>
            <div className='container mx-auto'>
                <div className='text-white text-center space-y-5 mb-20'>
                    <h1 className='font-space-grotesk text-6xl font-medium'>Login to Your Account</h1>
                    <p className='font-inter text-[#898889] font-medium text-2xl'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Vorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </div>
                <div className='flex justify-center font-inter'>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <label className="flex items-center justify-center w-[440px]">
                            <input type="email" className="text-xl grow bg-[#222122] text-[#898889] pl-8 py-3 rounded-[4px]" name="email" placeholder="Email" required />
                        </label>
                        <label className="flex items-center justify-center w-[440px]">
                            <input type="password" className="text-xl grow bg-[#222122] text-[#898889] pl-8 py-3 rounded-[4px]" name="password" placeholder="Password" required />
                        </label>
                        <label className="btn btn-info bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] w-[440px] font-bold text-lg">
                            <button>Login to Your Account </button>
                            <FiArrowRight />
                        </label>
                        <p className='text-[#898889]'>Don’t have an account yet? <Link to="/register" className='text-white'>Register now!</Link></p>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;