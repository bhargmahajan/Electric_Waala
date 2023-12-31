import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({email:"", password:""});

    const HandleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/auth/signin",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        
        if(!json.error) {
            localStorage.setItem("token", json.token);
            alert("Success");
            navigate("/");
        }
        else {
            alert(json.error);
        }
    }

    const onChange = (event) => {
        setcredentials({...credentials, [event.target.name]:event.target.value})
    }

    const clickHandle = async(req,res) => {
        window.open("http://localhost:4000/auth/google","_self");
    }

    return (
        <>
        <div className="md:hidden">
            <div className="flex flex-row h-screen justify-center bg-gray-400">
                <form className="m-16 w-2/3 py-10 px-6 bg-white rounded" method="POST" onSubmit={HandleSubmit}>
                    <h2 className="text-2xl text-center font-semibold p-3">User Signin</h2>
                    <div className="px-2 py-1">
                        <label htmlFor="email" className="text-sm py-1">Email</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="email" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-1">
                        <label htmlFor="password" className="text-sm py-2">Password</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="password" placeholder="Enter password" name='password' value={credentials.password} onChange={onChange}/>
                    </div>

                    <div className="flex flex-row justify-center p-3">
                        <button className="px-8 py-1 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signin</button>
                    </div>
                    <h3 className="text-sm text-center">or</h3>
                    <h3 className="text-sm text-center">Signin using</h3>
                    <div className="flex flex-row justify-center p-3">
                        <button className="px-4 py-1 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600" onClick={clickHandle}>
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
                </form>
            </div>
        </div>

        <div className="hidden lg:hidden md:block">
            <div className="flex flex-row h-screen justify-center bg-gray-400">
                <form className="mx-20 my-20 w-1/2 py-2 px-12 bg-white rounded" onSubmit={HandleSubmit}>
                    <h2 className="text-2xl text-center font-semibold p-6">User Signin</h2>
                    <div className="px-2 py-1">
                        <label htmlFor="email" className="text-md py-0.5">Email</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="email" placeholder="Enter your email" name='email' value={credentials.email} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-1">
                        <label htmlFor="password" className="text-md py-0.5">Password</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="password" placeholder="Enter the password" name='password' value={credentials.password} onChange={onChange}/>
                    </div>
                    <div className="flex flex-row justify-center p-3">
                        <button className="px-24 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signin</button>
                    </div>
                    <h3 className="text-sm text-center">or Signin using</h3>
                    <div className="flex flex-row justify-center p-3">
                        <button className="px-20 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600" onClick={clickHandle}>
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
                </form>
            </div>
        </div>

        <div className="hidden lg:block">
            <div className="flex flex-row h-screen justify-center bg-gray-400">
                <form className="mx-16 my-16 w-1/3 py-14 px-12 bg-white rounded" onSubmit={HandleSubmit}>
                    <h2 className="text-3xl text-center font-semibold p-1">User Signin</h2>
                    <div className="px-2 py-2">
                        <label htmlFor="email" className="text-md py-1">Email</label>
                        <input className="w-full px-3 py-2 bg-gray-100 rounded" type="email" placeholder="Enter your email here" name='email' value={credentials.email} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-2">
                        <label htmlFor="password" className="text-md py-1">Password</label>
                        <input className="w-full px-3 py-2 bg-gray-100 rounded" type="password" placeholder="Enter a password here" name='password' value={credentials.password} onChange={onChange}/>
                    </div>

                    <div className="flex flex-row justify-center p-3">
                        <button className="px-24 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signin</button>
                    </div>
                    <h3 className="text-md text-center">or Signin using</h3>
                    <div className="flex flex-row justify-center p-3">
                        <button className="px-20 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600" onClick={clickHandle}>
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

                </form>
            </div>
        </div>
        </>
    )
};

export default Signin;