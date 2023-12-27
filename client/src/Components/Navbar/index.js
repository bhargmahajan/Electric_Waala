import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import axios from "axios";

const NavSm =() =>{

    return (
        <>
        <div className="items-center justify-between py-4 px-2 flex w-full shadow-md">
            <div className="w-28">
                <img
                src="#"
                alt="logo"
                className="w-full h-full"
                />
            </div>
            <div className="flex items-center gap-3">
                <Link to="/signin">
                    <button className="bg-electricwaala-400 text-white py-2 px-3 rounded-full">Sign in</button>
                </Link>
                <span className="border p-2 border-electricwaala-300 text-electricwaala-800 rounded-full">
                    <CgProfile />
                </span>
            </div>
        </div>
        </>
    );
};

const NavMd =() =>{
    return (
        <div className="container items-center justify-between py-2 px-4 flex shadow-md">
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
                <Link to="/signin">
                    <button className="bg-electricwaala-400 text-white py-3 px-4 rounded-full">Sign in</button>
                </Link>
                <span className="border p-3 border-electricwaala-300 text-electricwaala-800 rounded-full">
                    <CgProfile />
                </span>
            </div>  
        </div>  
    )
};

const NavLg =() =>{
    return (
        <div className="container items-center justify-between py-4 px-2 flex w-full shadow-md">
            <div className="flex items-center px-4 gap-20 w-3/4">
                <div className="w-48 h-12">
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
                    className="w-full focus:outline-none bg-gray-50" 
                    placeholder="Search here"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 px-6">
                <span className="text-gray-400 text-xs flex items-center hover:text-black cursor-pointer">
                    Jaipur
                    <BiChevronDown/>
                </span>

                <Link to="/signin">
                    <button className="bg-electricwaala-400 text-white py-2 px-3 rounded-full">Signin/ Signup</button>
                </Link>
                    <span className="border p-3 border-electricwaala-300 text-electricwaala-800 rounded-full">
                        <CgProfile />
                    </span>                
            </div>  
        </div>
    )
};

const Navbar =() => {
    return (
        <>
        <nav>
            <div className="md:hidden">{
                <NavSm />
            }</div>
            <div className="hidden lg:hidden md:flex w-full">{
                <NavMd />
            }</div>
            <div className="hidden lg:flex">{
                <NavLg />
            }</div>
        </nav>
        </>
    )
};

export default Navbar;