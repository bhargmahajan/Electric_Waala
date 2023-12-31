import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState({fullname:"", email:"", password:"", phonenumber:""});

    const HandleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/auth/signup",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({fullname: user.fullname, email: user.email, password: user.password, phoneNumber: user.phoneNumber})
        });
        const data = await response.json();
        console.log(data);
        
        if(!data.error) {
            alert("Signup Success!");
            navigate("/signin");
        }
        else {
            alert(data.error);
        }
    }

    const onChange = (event) => {
        setuser({...user, [event.target.name]:event.target.value})
    }

    const clickHandle = async(req,res) => {
        window.open("http://localhost:4000/auth/google","_self");
    }

    return (
        <>
        <div className="md:hidden">
            <div className="flex flex-row h-screen justify-center bg-gray-400">
                <form className="m-12 w-2/3 py-10 px-6 bg-white rounded" onSubmit={HandleSubmit}>
                    <h2 className="text-xl text-center font-semibold p-2">User Signup</h2>
                    <div className="px-2 py-0.5">
                        <label htmlFor="fullname" className="text-sm py-1"> Full Name</label>
                        <input className="w-full px-3 py-0.5 bg-gray-100 rounded" type='name' placeholder="Enter name" name='fullname' value={user.fullname} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-0.5">
                        <label htmlFor="email" className="text-sm py-0.5">Email</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="email" placeholder="Enter email" name='email' value={user.email} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-0.5">
                        <label htmlFor="phoneNumber" className="text-sm py-0.5">Phone no.</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="phone" placeholder="Enter phone no" name='phoneNumber' value={user.phoneNumber} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-0.5">
                        <label htmlFor="password" className="text-sm py-0.5">Password</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="password" placeholder="Enter password" name='password' value={user.password} onChange={onChange}/>
                    </div>

                    <div className="flex flex-row justify-center p-4">
                        <button className="px-8 py-1 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600" type="submit">Signup</button>
                    </div>
                    <h3 className="text-sm text-center">or</h3>
                    <h3 className="text-sm text-center">Sign up using</h3>
                    <div className="flex flex-row justify-center p-4">
                        <button className="px-4 py-1 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600" onClick={clickHandle}>
                            <div className="flex flex-row justify-between gap-1">
                                <div className="w-5">
                                    <FcGoogle className="w-full h-full" />
                                </div>
                                Google
                            </div>
                        </button>
                    </div>     
                </form>
            </div>    
        </div>

        <div className="hidden lg:hidden md:block">
            <div className="flex flex-row h-screen justify-center bg-gray-400">
                <form className="mx-16 my-14 w-1/2 py-2 px-12 bg-white rounded" onSubmit={HandleSubmit}>
                    <h2 className="text-2xl text-center font-semibold p-3">User Signup</h2>
                    <div className="px-2 py-0.5">
                        <label htmlFor="fullname" className="text-md py-1"> Full Name</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded"  type="name" placeholder="Enter your name here" name='fullname' value={user.fullname} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-0.5">
                        <label htmlFor="email" className="text-md py-1">Email</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="email" placeholder="Enter your email here" name='email' value={user.email} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-0.5">
                        <label htmlFor="phoneNumber" className="text-md py-1">Phone no.</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="number" placeholder="Enter your phone number here" name='phoneNumber' value={user.phoneNumber} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-0.5">
                        <label htmlFor="password" className="text-md py-1">Password</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="password" placeholder="Enter a password here" name='password' value={user.password} onChange={onChange}/>
                    </div>

                    <div className="flex flex-row justify-center p-4">
                        <button className="px-24 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signup</button>
                    </div>
                    <h3 className="text-sm text-center">or Sign up using</h3>
                    <div className="flex flex-row justify-center p-4">
                        <button className="px-20 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600"  onClick={clickHandle}>
                            <div className="flex flex-row justify-between gap-1">
                                <div className="w-5">
                                    <FcGoogle className="w-full h-full" />
                                </div>
                                Google
                            </div>
                        </button>
                    </div>     
                </form>
            </div>
        </div>
        
        <div className="hidden lg:block">
            <div className="flex flex-row h-screen justify-center bg-gray-400">
                <form className="mx-20 my-12 w-1/3 py-8 px-12 bg-white rounded" onSubmit={HandleSubmit}>
                    <h2 className="text-3xl text-center font-semibold p-3">User Signup</h2>
                    <div className="px-2 py-2">
                        <label htmlFor="fullname" className="text-md py-0.5"> Full Name</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded"  type="name" placeholder="Enter your name here" name='fullname' value={user.fullname} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-2">
                        <label htmlFor="email" className="text-md py-0.5">Email</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="email" placeholder="Enter your email here" name='email' value={user.email} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-2">
                        <label htmlFor="phoneNumber" className="text-md py-0.5">Phone no.</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="phone" placeholder="Enter your phone number here" name='phoneNumber' value={user.phoneNumber} onChange={onChange}/>
                    </div>
                    <div className="px-2 py-2">
                        <label htmlFor="password" className="text-md py-0.5">Password</label>
                        <input className="w-full px-3 py-1 bg-gray-100 rounded" type="password" placeholder="Enter a password here" name='password' value={user.password} onChange={onChange}/>
                    </div>

                    <div className="flex flex-row justify-center p-3">
                        <button className="px-24 py-2 text-white bg-electricwaala-500 rounded-lg hover:bg-electricwaala-600">Signup</button>
                    </div>
                    <h3 className="text-md text-center">or Sign up using</h3>
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
                </form>
            </div>
        </div>
        </>
    )
};

export default Signup;