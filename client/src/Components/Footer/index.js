import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <div className="bg-black text-white py-10 px-96">
            <div className="flex flex-row justify-between text-xl px-60">
                <Link to ="/contactUs" >
                    Contact Us
                </Link>

                <Link to ="/aboutUs" >
                    About Us
                </Link>
            </div>

            <div className="text-center pt-10 text-md">All Rights Reserved | CopyRight © 2023, Electric Waala</div>
        </div>
        </>
    )
};

export default Footer;