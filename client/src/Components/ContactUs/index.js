import React, { useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();

    const callContactUsPage = () => {
        try {
            if(!localStorage.getItem("token")) {
                throw new Error("not Signed in");
            }
        } catch(err) {
            console.log(err);
            navigate("/signin");
        }
    }

    useEffect(() => {
        callContactUsPage();
    });

    return (
        <>
        <div className="md:hidden lg:hidden">
            <h1 className="text-2xl flex font-semibold p-6 justify-center">Contact US</h1>
            <div className="py-1 flex flex-row justify-center">
                <div className="w-2/3 p-2 shadow-lg rounded-md">
                    <div className="flex flex-col justify-between p-2 gap-4">
                        <div className="w-full"> 
                            <input className="w-full h-full border-2 border-slate-200 p-2 rounded-sm" type="text" placeholder="Your name"/>
                        </div>
                        <div className="w-full"> 
                            <input className="w-full h-full border-2 border-slate-200 p-2 rounded-sm" type="text" placeholder="Your email"/>
                        </div>
                        <div className="w-full"> 
                            <input className="w-full h-full border-2 border-slate-200 p-2 rounded-sm" type="text" placeholder="Your email"/>
                        </div>
                    </div>
                    <div className="py-4 px-2">
                        <textarea className="w-full h-full border-2 border-slate-200 p-2 rounded-sm" type="textarea" placeholder="Message"/>
                    </div>
                    <div className="py-4 px-2">
                        <button className=" bg-blue-500 text-slate-50 w-2/3 p-2 rounded-sm" type="submit">Send message</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center py-10">
                <div className="w-72 flex flex-col py-5 justify-between">
                    <div className="px-3 py-3 flex flex-row shadow-md rounded-md">
                        <div className="w-12 px-4 h-full">
                            <FiPhone className="w-full h-full" />
                        </div>
                        <div className="px-2">
                            <h2 className="text-sm">Mobile</h2>
                            <h2 className="text-sm">+91 8306969413</h2>
                        </div>
                    </div>
                
                    <div className="px-3 py-3 flex flex-row shadow-md rounded-md">
                        <div className="w-12 h-full px-4">
                            <MdOutlineEmail className="w-full h-full" />
                        </div>
                        <div className="px-2">
                            <h2 className="text-sm">Email</h2>
                            <h2 className="text-sm">electricwaala.official@gmail.com</h2>
                        </div>
                    </div>

                    <div className="px-3 py-3 flex flex-row shadow-md rounded-md">
                        <div className="w-12 h-full px-4">
                            <CiLocationOn className="w-full h-full" />
                        </div>
                        <div className="px-1">
                            <h2 className="text-sm">Address</h2>
                            <h2 className="text-sm">Jaipur, Rajasthan</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        <div className="hidden lg:hidden md:block">
            <h1 className="text-3xl flex font-semibold p-3 justify-center">Contact US</h1>
            <div className="flex flex-row py-8 px-3 justify-between gap-4">
                <div className="px-1 py-2 flex w-1/3 flex-row shadow-md rounded-md">
                    <div className="w-8 px-1 h-full">
                        <FiPhone className="w-full h-full" />
                    </div>
                    <div className="px-1">
                        <h2 className="text-sm">Mobile</h2>
                        <h2 className="text-sm">+91 8306969413</h2>
                    </div>
                </div>
                
                <div className="px-1 py-2 flex w-1/3 flex-row shadow-md rounded-md">
                    <div className="w-8 h-full px-1">
                        <MdOutlineEmail className="w-full h-full" />
                    </div>
                    <div className="px-1">
                        <h2 className="text-sm">Email</h2>
                        <h2 className="text-sm">electricwaala.official@gmail.com</h2>
                    </div>
                </div>

                <div className="px-1 py-2 flex w-1/3 flex-row shadow-md rounded-md">
                    <div className="w-8 h-full px-1">
                        <CiLocationOn className="w-full h-full" />
                    </div>
                    <div className="px-1">
                        <h2 className="text-sm">Address</h2>
                        <h2 className="text-sm">Jaipur, Rajasthan</h2>
                    </div>
                </div>
            </div>

            <div className="py-8 flex flex-row justify-center">
                <div className="w-2/3 py-4 px-4 shadow-lg rounded-md">
                    <h1 className="text-3xl flex font-semibold py-4 px-2">Get in Touch</h1>
                    <div className="flex flex-row justify-between py-4 px-2 gap-4">
                        <div className="w-1/3"> 
                            <input className="w-full h-full border-2 border-slate-200 px-3 py-2 rounded-sm" type="text" placeholder="Your name"/>
                        </div>
                        <div className="w-1/3"> 
                            <input className="w-full h-full border-2 border-slate-200 px-3 py-2 rounded-sm" type="text" placeholder="Your email"/>
                        </div>
                        <div className="w-1/3"> 
                            <input className="w-full h-full border-2 border-slate-200 px-3 py-2 rounded-sm" type="text" placeholder="Your email"/>
                        </div>
                    </div>
                    <div className="py-4 px-2">
                        <textarea className="w-full h-full border-2 border-slate-200 px-3 py-2 rounded-sm" type="textarea" placeholder="Message"/>
                    </div>
                    <div className="py-4 px-2">
                        <button className=" bg-blue-500 text-slate-50 w-2/5 px-3 py-2 rounded-sm" type="submit">Send message</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden md:hidden lg:block">
            <h1 className="text-4xl flex font-semibold p-4 justify-center">Contact US</h1>
            <div className="flex flex-row py-7 px-28 justify-between gap-12">
                <div className="px-5 py-2 flex w-1/3 flex-row shadow-md rounded-md">
                    <div className="w-12 px-2 h-full">
                        <FiPhone className="w-full h-full" />
                    </div>
                    <div className="px-4">
                        <h2>Mobile</h2>
                        <h2>+91 8306969413</h2>
                    </div>
                </div>
                
                <div className="px-5 py-2 flex w-1/3 flex-row shadow-md rounded-md">
                    <div className="w-12 h-full px-2">
                        <MdOutlineEmail className="w-full h-full" />
                    </div>
                    <div className="px-4">
                        <h2>Email</h2>
                        <h2>electricwaala.official@gmail.com</h2>
                    </div>
                </div>

                <div className="px-5 py-2 flex w-1/3 flex-row shadow-md rounded-md">
                    <div className="w-12 h-full px-2">
                        <CiLocationOn className="w-full h-full" />
                    </div>
                    <div className="px-4">
                        <h2>Address</h2>
                        <h2>Jaipur, Rajasthan</h2>
                    </div>
                </div>
            </div>

            <div className="py-8 flex flex-row justify-center">
                <div className="w-2/3 py-4 px-6 shadow-lg rounded-md">
                    <h1 className="text-3xl flex font-semibold p-4">Get in Touch</h1>
                    <div className="flex flex-row justify-between p-4 gap-10">
                        <div className="w-1/3"> 
                            <input className="w-full h-full border-2 border-slate-200 px-3 py-2 rounded-sm" type="text" placeholder="Your name"/>
                        </div>
                        <div className="w-1/3"> 
                            <input className="w-full h-full border-2 border-slate-200 px-3 py-2 rounded-sm" type="text" placeholder="Your email"/>
                        </div>
                        <div className="w-1/3"> 
                            <input className="w-full h-full border-2 border-slate-200 px-3 py-2 rounded-sm" type="text" placeholder="Your email"/>
                        </div>
                    </div>
                    <div className="p-4">
                        <textarea className="w-full h-full border-2 border-slate-200 px-3 py-2 rounded-sm" type="textarea" placeholder="Message"/>
                    </div>
                    <div className="p-4">
                        <button className=" bg-blue-500 text-slate-50 w-1/4 px-3 py-2 rounded-sm" type="submit">Send message</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ContactUs;