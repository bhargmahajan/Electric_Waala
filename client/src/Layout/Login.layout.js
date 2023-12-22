import React from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const ScreenSm =() =>{
    return(
    <div className="flex flex-row h-screen justify-center bg-gray-400">
            <div className="m-16 w-2/3 py-10 px-6 bg-white rounded">
                <h2 className="text-2xl text-center font-semibold p-3">User Signin</h2>
                <div className="px-2 py-1">
                    <h3 className="text-sm py-1">Email</h3>
                    <input className="w-full px-3 py-1 bg-gray-100 rounded" type="email" placeholder="Enter email"/>
                </div>
                <div className="px-2 py-1">
                    <h3 className="text-sm py-2">Password</h3>
                    <input className="w-full px-3 py-1 bg-gray-100 rounded" type="password" placeholder="Enter password"/>
                </div>

                <div className="flex flex-row justify-center p-3">
                    <button className="px-8 py-1 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signin</button>
                </div>
                <h3 className="text-sm text-center">or</h3>
                <h3 className="text-sm text-center">Signin using</h3>
                <div className="flex flex-row justify-center p-3">
                    <button className="px-4 py-1 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">
                        <div className="flex flex-row justify-between gap-1">
                            <div className="w-5">
                                <FcGoogle className="w-full h-full" />
                            </div>
                            Google
                        </div>
                    </button>
                </div>
                <h3 className="text-center p-1">OR</h3>
                <Link to="/signup">
                    <div className="flex flex-row justify-center p-2">
                        <button className="px-8 py-1 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signup</button>
                    </div> 
                </Link>   
            </div>
        </div>
    )
};

const ScreenMd =() =>{
    return(
    <div className="flex flex-row h-screen justify-center bg-gray-400">
            <div className="mx-20 my-20 w-1/2 py-2 px-12 bg-white rounded">
                <h2 className="text-2xl text-center font-semibold p-6">User Signin</h2>
                <div className="px-2 py-1">
                    <h3 className="text-md py-0.5">Email</h3>
                    <input className="w-full px-3 py-1 bg-gray-100 rounded" type="email" placeholder="Enter your email"/>
                </div>
                <div className="px-2 py-1">
                    <h3 className="text-md py-0.5">Password</h3>
                    <input className="w-full px-3 py-1 bg-gray-100 rounded" type="password" placeholder="Enter the password"/>
                </div>
                <div className="flex flex-row justify-center p-3">
                    <button className="px-24 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signin</button>
                </div>
                <h3 className="text-sm text-center">or Signin using</h3>
                <div className="flex flex-row justify-center p-3">
                    <button className="px-20 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">
                        <div className="flex flex-row justify-between gap-1">
                            <div className="w-5">
                                <FcGoogle className="w-full h-full" />
                            </div>
                            Google
                        </div>
                    </button>
                </div>
                <h3 className="text-center p-1">OR</h3>
                <Link to="/signup">
                    <div className="flex flex-row justify-center p-1">
                        <button className="px-24 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signup</button>
                    </div>
                </Link>       
            </div>
        </div>
    )
};

const ScreenLg =() =>{
    return(
    <div className="flex flex-row h-screen justify-center bg-gray-400">
            <div className="mx-16 my-16 w-1/3 py-14 px-12 bg-white rounded">
                <h2 className="text-3xl text-center font-semibold p-1">User Signin</h2>
                <div className="px-2 py-2">
                    <h3 className="text-md py-1">Email</h3>
                    <input className="w-full px-3 py-2 bg-gray-100 rounded" type="email" placeholder="Enter your email here"/>
                </div>
                <div className="px-2 py-2">
                    <h3 className="text-md py-1">Password</h3>
                    <input className="w-full px-3 py-2 bg-gray-100 rounded" type="password" placeholder="Enter a password here"/>
                </div>

                <div className="flex flex-row justify-center p-3">
                    <button className="px-24 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signin</button>
                </div>
                <h3 className="text-md text-center">or Signin using</h3>
                <div className="flex flex-row justify-center p-3">
                    <button className="px-20 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">
                        <div className="flex flex-row justify-between gap-1">
                            <div className="w-5">
                                <FcGoogle className="w-full h-full" />
                            </div>
                            Google
                        </div>
                    </button>
                </div>
                <h3 className="text-center p-1">OR</h3>
                <Link to="/signup">
                    <div className="flex flex-row justify-center p-2">
                        <button className="px-24 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signup</button>
                    </div>
                </Link>

            </div>
        </div>
    )
};

const LoginLayout = () => {
    return (
        <>
        <div>
        <div className="md:hidden">{
                <ScreenSm />
            }</div>
            <div className="hidden lg:hidden md:block">{
                <ScreenMd />
            }</div>
            <div className="hidden lg:block">{
                <ScreenLg />
            }</div>
        </div>
        </>
    )
};

export default LoginLayout;