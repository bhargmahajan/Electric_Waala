import React from "react";
import { Link } from "react-router-dom";

const NavSm = () =>{
    return (
        <>
        <h1 className="mx-10 font-bold text-2xl">Jangid</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-center px-16 my-10">
        <Link to="/marshal">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/advance-marshall.png"
                    alt="Advance Marshall"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Advance Marshall</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/delgrand">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/delux-grand.png"
                    alt="Delux Grand"
                    className="w-full h-full"
                    />
                </div>
                <div className="mx-8 my-3">
                    <h3 className="my-2 text-base font-medium mx-4">Delux Grand</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>
            </Link>

            <Link to="/delplus">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/delux-plus.png"
                    alt="Delux Plus"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Delux Plus</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/king">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/dlx-king-x5.png"
                    alt="Dlx King"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Dlx King</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/mspro">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/ms-pro.png"
                    alt="MS Pro"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">MS Pro</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/sspro">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-48">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/ss-pro.png"
                    alt="SS Pro"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">SS Pro</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>
        </div>
        </>
    );
};

const NavMd =() =>{
    return (
        <>
        <h1 className="mx-16 font-bold text-4xl">Jangid</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-between my-10 mx-12">
        <Link to="/marshal">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/advance-marshall.png"
                    alt="Advance Marshall"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Advance Marshall</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>
            </Link>

            <Link to="/delgrand">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/delux-grand.png"
                    alt="Delux Grand"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Delux Grand</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>
            </Link>

            <Link to="/delplus">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/delux-plus.png"
                    alt="Delux Plus"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Delux Plus</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/king">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/dlx-king-x5.png"
                    alt="Dlx King"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Dlx King</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/mspro">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/ms-pro.png"
                    alt="MS Pro"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">MS Pro</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/sspro">
            <div className="bg-white rounded-m shadow">
                <div className="w-80 h-52">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/ss-pro.png"
                    alt="SS Pro"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">SS Pro</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>
        </div>
        </>
    )
};

const NavLg =() =>{
    return (
        <>
        <h1 className="mx-28 font-bold text-4xl">Jangid</h1>
        <div className="flex flex-row flex-wrap gap-8 justify-between my-10 mx-32">
        <Link to="/marshal">
            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/advance-marshall.png"
                    alt="Advance Marshall"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Advance Marshall</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/delgrand">
            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/delux-grand.png"
                    alt="Delux Grand"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Delux Grand</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>
            </Link>

            <Link to="/delplus">
            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/delux-plus.png"
                    alt="Delux Plus"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Delux Plus</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.45L</h3>
                </div>
            </div>
            </Link>

            <Link to="/king"><div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/dlx-king-x5.png"
                    alt="Dlx King"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">Dlx King</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/mspro">
            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/ms-pro.png"
                    alt="MS Pro"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">MS Pro</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>

            <Link to="/sspro">
            <div className="bg-white rounded-m shadow">
                <div className="w-96 h-60">
                    <img
                    src="https://electricwaala.s3.ap-south-1.amazonaws.com/ss-pro.png"
                    alt="SS Pro"
                    className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-base font-medium mx-4">SS Pro</h3>
                    <h3 className="my-2 text-sm mx-4">Price: 1.62L</h3>
                </div>
            </div>
            </Link>
        </div>
        </>
    )
};


const variantCard = () => {
    return ( 
        <>
        <div className="md:hidden my-8">{
            <NavSm />
        }</div>
        <div className="hidden lg:hidden md:block w-full my-8">{
            <NavMd />
        }</div>
        <div className="hidden lg:block my-16">{
            <NavLg />
        }</div>     
        </>
    );
};

export default variantCard;