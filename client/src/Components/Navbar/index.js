import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiSearch, BiChevronDown } from "react-icons/bi";

const Navbar =() => {
    const navigate = useNavigate();

    const HandleSignout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <>
        <nav>
            <div className="md:hidden">
                <div className="items-center justify-between py-4 px-2 flex w-full shadow-md">
                    <div className="w-28">
                        <img
                        src="https://electricwaala.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2024-03-01+at+09.48.09_0c4edfff.jpg"
                        alt="logo"
                        className="w-full h-full"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        {(!localStorage.getItem("token"))? 
                        <div>
                            <Link to="/signin">
                                <button className="bg-electricwaala-400 text-white py-2 px-3 rounded-full">Signin</button>
                            </Link>  
                        </div>  
                        : 
                        <div className="flex items-center gap-4 px-6">
                            <Link to="/">
                                <button className="bg-electricwaala-400 text-white py-2 px-3 rounded-full" onClick={HandleSignout}>Signout</button>
                            </Link>
                            <span className="border p-2 border-electricwaala-300 text-electricwaala-800 rounded-full">
                                <CgProfile />
                            </span>
                        </div>
                        } 
                    </div>
                </div>
            </div>

            <div className="hidden lg:hidden md:flex w-full">
                <div className="items-center justify-between py-2 px-4 flex shadow-md">
                    <div className="flex items-center px-3 gap-12 w-3/4">
                        <div className="w-32 h-12">
                            <img 
                            src="https://electricwaala.s3.ap-south-1.amazonaws.com/er.png" 
                            alt="logo"
                            className="w-full h-full"
                            />
                        </div>

                        <div className="w-full flex items-center bg-gray-50 gap-3 px-3 py-2 rounded-sm">
                            <BiSearch />
                            <input 
                            type="search" 
                            className="w-full focus:outline-none" 
                            placeholder="Search here"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-8 px-3">
                        {(!localStorage.getItem("token"))? 
                        <div>
                            <Link to="/signin">
                                <button className="bg-electricwaala-400 text-white py-3 px-4 rounded-full">Signin</button>
                            </Link>  
                        </div>  
                        : 
                        <div className="flex items-center gap-4 px-6">
                            <Link to="/">
                                <button className="bg-electricwaala-400 text-white py-2 px-3 rounded-full" onClick={HandleSignout}>Signout</button>
                            </Link>
                            <span className="border p-3 border-electricwaala-300 text-electricwaala-800 rounded-full">
                                <CgProfile />
                            </span>
                        </div>
                        } 
                    </div>  
                </div> 
            </div>

            <div className="hidden lg:flex">
                <div className="items-center justify-between py-4 px-2 flex w-full shadow-md">
                    <div className="flex items-center px-4 gap-20 w-3/4">
                        <div className="w-full h-20">
                            <img 
                            src="https://electricwaala.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2024-03-01+at+09.48.09_0c4edfff.jpg" 
                            alt="logo"
                            className="w-48 h-full"
                            />
                        </div>

                        
                    </div>

                    <div className="flex items-center gap-4 px-6">
                        <span className="text-gray-400 text-xs flex items-center hover:text-black cursor-pointer">
                            Jaipur
                            <BiChevronDown/>
                        </span>

                        {(!localStorage.getItem("token"))? 
                        <div>
                            <Link to="/signin">
                                <button className="bg-electricwaala-400 text-white py-2 px-3 rounded-full">Signin</button>
                            </Link>  
                        </div>  
                        : 
                        <div className="flex items-center gap-4 px-6">
                            <Link to="/">
                                <button className="bg-electricwaala-400 text-white py-2 px-3 rounded-full" onClick={HandleSignout}>Signout</button>
                            </Link>
                            <span className="border p-3 border-electricwaala-300 text-electricwaala-800 rounded-full">
                                <Link to="/profile">
                                    <CgProfile />
                                </Link>
                            </span>
                        </div>
                        }                                  
                    </div>  
                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;