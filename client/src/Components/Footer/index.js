import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <div className="flex flex-row justify-between">
            <Link to ="/contactUs" >
                Contact Us
            </Link>

            <Link to ="/aboutUs" >
                About Us
            </Link>
        </div>
        </>
    )
};

export default Footer;