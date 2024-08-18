import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();

    const callProfilePage = async () => {
        try {
            if(localStorage.getItem("token")) {
                const res = await fetch("http://localhost:4000/profile/:_id", {
                    method: 'GET',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                const data = await res.json();
                console.log(data);
                setUserData(data);
            }
            else {
                throw new Error("not Signed in");
            }
        } catch(err) {
            console.log(err);
            navigate("/signin");
        }
    }

    useEffect(() => {
        callProfilePage();
    });

    return (
        <>
        <div className="md:hidden lg:hidden">
            <div className="py-16 flex flex-row justify-center">
                <div className="bg-white w-1/2 py-4 px-6 shadow-lg rounded-md">
                    <h1 className="text-3xl justify-center flex font-semibold px-4 py-4">Profile</h1>
                    <div className="py-4 flex flex-row justify-center">
                        <div className="w-1/3">
                        <CgProfile  className="w-full h-full text-gray-400"/>
                        </div>
                    </div>
                    <div className="p-4 gap-8">
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg">Name : </p>
                            <p className="px-4 py-2 text-lg">Bharg Mahajan</p>
                        </div>
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg">Email : </p>
                            <p className="px-4 py-2 text-lg">Bhargmahajan1@gmail.com</p>
                        </div>
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg">Phone number : </p>
                            <p className="px-4 py-2 text-lg">6006960265</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        <div className="hidden lg:hidden md:block">
            <div className="py-16 flex flex-row justify-center">
                <div className="bg-white w-1/2 py-4 px-6 shadow-lg rounded-md">
                    <h1 className="text-3xl justify-center flex font-semibold px-4 py-4">Profile</h1>
                    <div className="py-4 flex flex-row justify-center">
                        <div className="w-1/3">
                        <CgProfile  className="w-full h-full text-gray-400"/>
                        </div>
                    </div>
                    <div className="p-4 gap-8 ">
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg">Name : </p>
                            <p className="px-4 py-2 text-lg">Bharg Mahajan</p>
                        </div>
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg">Email : </p>
                            <p className="px-4 py-2 text-lg">Bhargmahajan1@gmail.com</p>
                        </div>
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg">Phone number : </p>
                            <p className="px-4 py-2 text-lg">6006960265</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden md:hidden lg:block">
            <div className="py-16 flex flex-row justify-center">
                <div className="bg-white w-1/2 py-4 px-6 shadow-lg rounded-md">
                    <h1 className="text-3xl justify-center flex font-semibold px-4 py-4">Profile</h1>
                    <div className="py-4 flex flex-row justify-center">
                        <div className="w-1/3">
                        <CgProfile  className="w-full h-full text-gray-400"/>
                        </div>
                    </div>
                    <div className="p-4 gap-8">
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg w-1/3">Name : </p>
                            <p className="px-4 py-2 text-lg w-2/3">{userData.fullname}</p>
                        </div>
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg w-1/3">Email : </p>
                            <p className="px-4 py-2 text-lg w-2/3">{userData.email}</p>
                        </div>
                        <div className="flex flex-row justify-between"> 
                            <p className="px-4 py-2 text-lg w-1/3">Phone number : </p>
                            <p className="px-4 py-2 text-lg w-2/3">{userData.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Profile;